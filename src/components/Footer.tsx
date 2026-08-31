// src/components/Footer.tsx — full file, one small legibility change
import { ArrowUpRight } from "@phosphor-icons/react";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border-light bg-black/30 px-6 py-5 backdrop-blur-sm">
      <div className="mx-auto flex max-w-5xl flex-col-reverse items-center justify-between gap-2 text-[11.5px] text-text-muted sm:flex-row">
        <span>&copy; {year} HKM. All rights reserved.</span>
        <a
          href="https://www.zentrya.co.tz"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-1 rounded-sm text-text-muted transition-colors duration-150 hover:text-text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text-primary/40"
        >
          Created by{" "}
          <span className="font-medium text-text-secondary transition-colors duration-150 group-hover:text-text-primary">
            Zentrya Limited
          </span>
          <ArrowUpRight
            size={11}
            weight="bold"
            className="transition-transform duration-150 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </a>
      </div>
    </footer>
  );
}