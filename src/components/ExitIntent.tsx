"use client";

import { useEffect, useState } from "react";
import QuoteModal from "./QuoteModal";

export default function ExitIntent() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const isMobile = /Mobi|Android/i.test(navigator.userAgent);
    if (isMobile) return;
    if (sessionStorage.getItem("exitIntentShown")) return;

    let engaged = false;
    let scrolled = false;
    let timer: ReturnType<typeof setTimeout>;

    const onScroll = () => {
      if (window.scrollY > 100) scrolled = true;
    };

    const startTimer = () => {
      timer = setTimeout(() => { engaged = true; }, 3000);
    };

    const onMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 20 && engaged && scrolled) {
        sessionStorage.setItem("exitIntentShown", "1");
        setOpen(true);
        document.removeEventListener("mouseleave", onMouseLeave);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("mouseleave", onMouseLeave);
    startTimer();

    return () => {
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("mouseleave", onMouseLeave);
      clearTimeout(timer);
    };
  }, []);

  return <QuoteModal isOpen={open} onClose={() => setOpen(false)} />;
}
