import type { MetadataRoute } from "next";
import { organisation } from "@/lib/site-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["", "/courses", "/courses/data-analytics", "/career-support", "/job-guarantee", "/projects", "/student-stories", "/reviews", "/about", "/contact", "/faq", "/privacy", "/terms", "/refund-policy", "/cookie-policy", "/accessibility"];
  return paths.map((path) => ({ url: new URL(path || "/", organisation.siteUrl).toString(), lastModified: new Date(), changeFrequency: path === "" ? "weekly" : "monthly", priority: path === "" ? 1 : path === "/courses/data-analytics" ? 0.9 : 0.7 }));
}

