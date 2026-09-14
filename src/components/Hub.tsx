// src/components/Hub.tsx — full file
import { BackgroundSlideshow } from "./BackgroundSlideshow";
import { BusinessCard } from "./BusinessCard";
import { Footer } from "./Footer";

const BACKGROUND_IMAGES = [
  "/backgrounds/1.jpeg",
  "/backgrounds/2.jpeg",
  "/backgrounds/3.jpg",
];

export function Hub() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <BackgroundSlideshow images={BACKGROUND_IMAGES} />

      <main className="relative z-10 flex-1">
        <section className="mx-auto flex max-w-5xl flex-col items-center px-6 pb-16 pt-24 text-center sm:pt-32">
          <img
            src="/logos/hkm.png"
            alt="HKM"
            className="h-9 w-auto object-contain brightness-0 invert"
          />
          <h1 className="mt-6 max-w-2xl text-[32px] font-semibold leading-tight tracking-tight sm:text-[44px]">
            Three businesses, one home.
          </h1>
          <p className="mt-4 max-w-md text-[15px] leading-relaxed text-text-secondary">
            {/* Placeholder copy — swap once real descriptions exist */}
            Explore what we're building — from stationery and business tools
            to training and good food.
          </p>
        </section>

        <section className="mx-auto grid max-w-5xl grid-cols-1 gap-5 px-6 pb-24 sm:grid-cols-3">
          <BusinessCard
            name="Veritas"
            logo="/logos/veritas.png"
            description="Business management tools for stationery and retail operations."
            href="https://veritas.hkm.co.tz"
            status="live"
          />
          <BusinessCard
            name="HKM Vocational Centre"
            logo="/logos/vocational.png"
            description="Practical, skills-based training."
            href="https://vocational.hkm.co.tz"
            status="live"
          />
          <BusinessCard
            name="Bawoj Restaurant"
            logo="/logos/bawoj.png"
            description="Good food, good company."
            href="https://bawoj.hkm.co.tz"
            status="coming-soon"
          />
        </section>
      </main>

      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}