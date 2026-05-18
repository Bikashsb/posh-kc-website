import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://poshkc.com";
  const routes = [
    { url: "/", priority: 1.0, changeFrequency: "weekly" as const },
    { url: "/services", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/memberships", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/posh-bride", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/posh-party", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/packages", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/rental", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/about", priority: 0.7, changeFrequency: "yearly" as const },
    { url: "/team", priority: 0.6, changeFrequency: "yearly" as const },
    { url: "/portfolio", priority: 0.6, changeFrequency: "monthly" as const },
    { url: "/contact", priority: 0.8, changeFrequency: "yearly" as const },
  ];

  return routes.map((route) => ({
    url: `${base}${route.url}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
