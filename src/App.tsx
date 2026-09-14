// src/App.tsx
import { useEffect } from "react";
import { resolveSiteMode } from "./lib/site";
import { Hub } from "./components/Hub";
import { ComingSoon } from "./components/ComingSoon";

const TITLES = {
  hub: "HKM",
  vocational: "HKM Vocational Centre",
  bawoj: "Bawoj Restaurant — Coming Soon",
};

export default function App() {
  const mode = resolveSiteMode();

  useEffect(() => {
    document.title = TITLES[mode];
  }, [mode]);

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