"use client";
import { useEffect, useState } from "react";
import AboutContent from "./AboutContent";
import AboutContentMobile from "./AboutContentMobile";

function useIsLgUp() {
  const [isLg, setIsLg] = useState<boolean | null>(null); // null verhindert SSR-Mismatch
  useEffect(() => {
    const mq = window.matchMedia("(min-width:1024px)"); // Tailwind lg
    const handler = () => setIsLg(mq.matches);
    handler();
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);
  return isLg;
}

export default function ResponsiveSlot() {
  const isLg = useIsLgUp();
  if (isLg === null) return null; // optional Skeleton/Loader

  return isLg ? <AboutContent /> : <AboutContentMobile />;
}
