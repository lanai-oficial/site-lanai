import { NextResponse } from "next/server";
import {
  getInstagramPosts,
  INSTAGRAM_REVALIDATE_SECONDS,
} from "@/lib/instagram";

export async function GET() {
  try {
    const posts = await getInstagramPosts();

    return NextResponse.json(
      { posts },
      {
        headers: {
          "Cache-Control": `public, s-maxage=${INSTAGRAM_REVALIDATE_SECONDS}, stale-while-revalidate=60`,
        },
      },
    );
  } catch {
    return NextResponse.json(
      { posts: [], error: "Instagram feed is temporarily unavailable" },
      { status: 503, headers: { "Cache-Control": "no-store" } },
    );
  }
}
