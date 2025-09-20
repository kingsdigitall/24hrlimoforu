// lib/seo.ts
import type { Metadata } from "next";
import { headers } from "next/headers";

export async function generateCanonicalMetadata(options: {
  title: string;
  description: string;
  canonical?: string; // allow manual override (relative or absolute)
}): Promise<Metadata> {
  const h = await headers();

  const host =
    h.get("x-forwarded-host") ||
    h.get("host") ||
    "localhost:3000";

  const proto =
    h.get("x-forwarded-proto") ||
    (host.includes("localhost") ? "http" : "https");

  const origin = `${proto}://${host}`;

  // If user passed canonical, normalize it
  let canonical: string;
  if (options.canonical) {
    if (options.canonical.startsWith("http")) {
      canonical = options.canonical;
    } else {
      // ensure leading slash
      const path = options.canonical.startsWith("/")
        ? options.canonical
        : `/${options.canonical}`;
      canonical = `${origin}${path}`;
    }
  } else {
    // fallback: try to read from request headers
    const currentPath = h.get("x-next-url") || "/";
    canonical = `${origin}${currentPath}`;
  }

  return {
    title: options.title,
    description: options.description,
    alternates: {
      canonical,
    },
  };
}
