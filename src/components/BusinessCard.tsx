// src/components/BusinessCard.tsx — full file
import { ArrowUpRight, CheckCircle, Clock } from "@phosphor-icons/react";

interface BusinessCardProps {
  name: string;
  logo: string;
  description: string;
  href: string;
  status: "live" | "coming-soon";
}

export function BusinessCard({ name, logo, description, href, status }: BusinessCardProps) {
  const isLive = status === "live";

  return (
    
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col justify-between rounded-lg border border-border bg-surface p-6 transition-colors duration-150 hover:bg-surface-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
    >
      <div>
        <div className="mb-4 flex items-center justify-between">
          <img
            src={logo}
            alt={name}
            className="h-8 w-auto max-w-[140px] object-contain brightness-0 invert"
          />
          <span
            className={`flex items-center gap-1 text-[11px] font-medium uppercase tracking-wide ${
              isLive ? "text-text-secondary" : "text-text-muted"
            }`}
          >
            {isLive ? <CheckCircle size={12} weight="fill" /> : <Clock size={12} />}
            {isLive ? "Live" : "Coming Soon"}
          </span>
        </div>
        <p className="text-[13.5px] leading-relaxed text-text-secondary">{description}</p>
      </div>

      <div className="mt-6 flex items-center gap-1 text-[13px] font-medium text-text-primary">
        {isLive ? "Visit" : "Learn more"}
        <span className="sr-only"> (opens in a new tab)</span>
        <ArrowUpRight
          size={14}
          className="transition-transform duration-150 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        />
      </div>
    </a>
  );
}