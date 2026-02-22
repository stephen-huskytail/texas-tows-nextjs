"use client";

import { useRef, useState, useEffect } from "react";
import { MapPin } from "lucide-react";

interface LazyGoogleMapProps {
  src: string;
  title: string;
  width?: string | number;
  height?: number;
}

/**
 * LazyGoogleMap — renders a lightweight placeholder until the user scrolls
 * near the map section, then swaps in the actual Google Maps iframe.
 * Eliminates ~350 KB of third-party scripts from the initial page load.
 */
export default function LazyGoogleMap({
  src,
  title,
  width = "100%",
  height = 400,
}: LazyGoogleMapProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" } // start loading 200px before it enters viewport
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} style={{ width, height, backgroundColor: "#e5e7eb" }}>
      {isVisible ? (
        <iframe
          title={title}
          src={src}
          width="100%"
          height={height}
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      ) : (
        <div
          className="flex flex-col items-center justify-center gap-3 h-full text-gray-400"
          aria-label="Map loading placeholder"
        >
          <MapPin className="w-10 h-10" />
          <span className="text-sm font-medium">Loading map&hellip;</span>
        </div>
      )}
    </div>
  );
}
