// src/lib/site.ts
export type SiteMode = "hub" | "vocational" | "bawoj";

const HOSTNAME_MAP: Record<string, SiteMode> = {
  "vocational.hkm.co.tz": "vocational",
  "bawoj.hkm.co.tz": "bawoj",
};

/** Decides which "site" to render based on the real hostname a visitor
 *  is on — all three domains point to this same deployment. A ?site=
 *  override exists purely for local development, since localhost won't
 *  match any real hostname during npm run dev. */
export function resolveSiteMode(): SiteMode {
  if (typeof window === "undefined") return "hub";

  const override = new URLSearchParams(window.location.search).get("site");
  if (override === "vocational" || override === "bawoj" || override === "hub") {
    return override;
  }

  return HOSTNAME_MAP[window.location.hostname] ?? "hub";
}