"use client";

import Link from "next/link";
import { ReactNode } from "react";
import { trackEvent } from "@/lib/analytics";

export function CategoryLink({ category, categoryId, children }: { category: string; categoryId: string; children: ReactNode }) {
  return <Link href={`/servicos?categoria=${categoryId}`} onClick={() => trackEvent("category_view", { category, category_id: categoryId })}>{children}</Link>;
}
