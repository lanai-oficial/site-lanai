import { unstable_cache } from "next/cache";

const INSTAGRAM_MEDIA_URL = "https://graph.instagram.com/me/media";
const INSTAGRAM_FIELDS = [
  "id",
  "media_type",
  "media_url",
  "thumbnail_url",
  "permalink",
  "caption",
  "timestamp",
].join(",");

export const INSTAGRAM_REVALIDATE_SECONDS = 30 * 60;

export type InstagramPost = {
  id: string;
  media_type: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
  media_url: string;
  thumbnail_url?: string;
  permalink: string;
  caption?: string;
  timestamp: string;
};

type InstagramResponse = { data?: unknown };

function isInstagramPost(value: unknown): value is InstagramPost {
  if (!value || typeof value !== "object") return false;

  const post = value as Record<string, unknown>;
  return (
    typeof post.id === "string" &&
    ["IMAGE", "VIDEO", "CAROUSEL_ALBUM"].includes(String(post.media_type)) &&
    typeof post.media_url === "string" &&
    typeof post.permalink === "string" &&
    typeof post.timestamp === "string" &&
    (post.thumbnail_url === undefined || typeof post.thumbnail_url === "string") &&
    (post.caption === undefined || typeof post.caption === "string")
  );
}

async function requestInstagramPosts(): Promise<InstagramPost[]> {
  const token = process.env.INSTAGRAM_ACCESS_TOKEN;
  if (!token) throw new Error("Instagram feed is not configured");

  const url = new URL(INSTAGRAM_MEDIA_URL);
  url.searchParams.set("fields", INSTAGRAM_FIELDS);
  url.searchParams.set("limit", "8");

  const response = await fetch(url, {
    headers: { Authorization: `Bearer ${token}` },
    cache: "no-store",
    signal: AbortSignal.timeout(8_000),
  });

  if (!response.ok) throw new Error(`Instagram API returned ${response.status}`);

  const payload = (await response.json()) as InstagramResponse;
  if (!Array.isArray(payload.data)) throw new Error("Instagram API returned invalid data");

  return payload.data.filter(isInstagramPost).slice(0, 4);
}

// Only successful responses are retained, so a temporary Meta failure can recover
// immediately while normal traffic shares one response for thirty minutes.
export const getInstagramPosts = unstable_cache(
  requestInstagramPosts,
  ["lanai-instagram-feed"],
  { revalidate: INSTAGRAM_REVALIDATE_SECONDS, tags: ["instagram-feed"] },
);

