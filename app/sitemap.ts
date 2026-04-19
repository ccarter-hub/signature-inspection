import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://signatureinspectionservice.com";
  const now = new Date();

  return [
    { url: base, lastModified: now, changeFrequency: "monthly", priority: 1.0 },
    { url: `${base}/home-inspection-anchorage`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/commercial-inspection-anchorage`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/radon-testing-anchorage`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/about`, lastModified: now, changeFrequency: "yearly", priority: 0.6 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: "yearly", priority: 0.7 },
    { url: `${base}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/terms`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/blog`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    {
      url: `${base}/blog/what-does-a-home-inspection-include-in-alaska`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.65,
    },
    {
      url: `${base}/blog/home-inspection-cost-anchorage-alaska`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.65,
    },
    {
      url: `${base}/blog/common-problems-home-inspections-anchorage`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.65,
    },
  ];
}
