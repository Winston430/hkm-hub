// src/components/ComingSoon.tsx
import { ArrowLeft } from "@phosphor-icons/react";
import { Footer } from "./Footer";

export function ComingSoon({
  name,
  logo,
  tagline,
}: {
  name: string;
  logo: string;
  tagline: string;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex flex-1 flex-col items-center justify-center px-6 text-center">
        <img
          src={logo}
          alt={name}
          className="h-9 w-auto max-w-[220px] object-contain brightness-0 invert"
        />
        <p className="mt-3 max-w-sm text-[14.5px] leading-relaxed text-text-secondary">
          {tagline}
        </p>
        <p className="mt-1 text-[13px] text-text-muted">Coming soon.</p>

        <a
          href="https://hkm.co.tz"
          className="mt-8 inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-2 text-[13px] font-medium text-text-secondary transition-colors duration-150 hover:bg-surface-secondary hover:text-text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text-primary/40"
        >
          <ArrowLeft size={14} />
          Back to HKM
        </a>
      </main>

      <Footer />
    </div>
  );
}