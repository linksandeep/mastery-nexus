import type { Metadata } from "next";
import { organisation } from "@/lib/site-data";

export function pageMetadata(title: string, description: string, path: string): Metadata {
  const url = new URL(path, organisation.siteUrl).toString();
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, siteName: organisation.name, type: "website" },
    twitter: { card: "summary_large_image", title, description },
  };
}

