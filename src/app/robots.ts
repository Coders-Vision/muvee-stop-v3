import getCurrentHost from "@/lib/get-current-host";
import { MetadataRoute } from "next";

export default async function robots(): Promise<MetadataRoute.Robots> {
  const currentHost = await getCurrentHost();
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/",
    },
    sitemap: `${currentHost}`,
  };
}
