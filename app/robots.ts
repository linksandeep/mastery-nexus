import type { MetadataRoute } from "next";
import { organisation } from "@/lib/site-data";

export default function robots(): MetadataRoute.Robots {
  return { rules: { userAgent: "*", allow: "/", disallow: ["/api/", "/thank-you"] }, sitemap: new URL("/sitemap.xml", organisation.siteUrl).toString() };
}

