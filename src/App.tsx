// src/App.tsx
import { useEffect } from "react";
import { resolveSiteMode } from "./lib/site";
import { Hub } from "./components/hub";
import { ComingSoon } from "./components/ComingSoon";

const TITLES = {
  hub: "HKM",
  vocational: "HKM Vocational Centre — Coming Soon",
  bawoj: "Bawoj Restaurant — Coming Soon",
};

export default function App() {
  const mode = resolveSiteMode();

  useEffect(() => {
    document.title = TITLES[mode];
  }, [mode]);

  if (mode === "vocational") {
    return (
      <ComingSoon
        name="HKM Vocational Centre"
        logo="/logos/vocational.png"
        tagline="Practical, skills-based training — opening soon."
      />
    );
  }

  if (mode === "bawoj") {
    return (
      <ComingSoon
        name="Bawoj Restaurant"
        logo="/logos/bawoj.png"
        tagline="Good food, good company — opening soon."
      />
    );
  }

  return <Hub />;
}