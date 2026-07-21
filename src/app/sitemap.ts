import type { MetadataRoute } from "next";

import { siteConfig } from "./site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${siteConfig.url}/`,
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
