"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { List } from "lucide-react";

interface TocItem {
  id: string;
  text: string;
  level: 2 | 3;
}

/**
 * Auto-generated Table of Contents for blog posts.
 * - Scans the article for H2/H3 headings and builds a clickable TOC
 * - Uses Intersection Observer to highlight the active section
 * - Sticky positioning so it follows the reader down the page
 */
export default function BlogTableOfContents() {
  const [headings, setHeadings] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState<string>("");
  const observerRef = useRef<IntersectionObserver | null>(null);

  // ── Scan headings on mount ──────────────────────────────────────────
  useEffect(() => {
    const article = document.querySelector("article.blog-prose");
    if (!article) return;

    const elements = article.querySelectorAll("h2, h3");
    const items: TocItem[] = [];

    elements.forEach((el, index) => {
      // Generate an id if the heading doesn't have one
      if (!el.id) {
        const slug = (el.textContent || "")
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/(^-|-$)/g, "");
        el.id = slug || `heading-${index}`;
      }

      items.push({
        id: el.id,
        text: el.textContent || "",
        level: el.tagName === "H2" ? 2 : 3,
      });
    });

    setHeadings(items);
  }, []);

  // ── Intersection Observer for active state ──────────────────────────
  const handleIntersect = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      // Find the topmost visible heading
      const visible = entries
        .filter((e) => e.isIntersecting)
        .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

      if (visible.length > 0) {
        setActiveId(visible[0].target.id);
      }
    },
    []
  );

  useEffect(() => {
    if (headings.length === 0) return;

    // Disconnect previous observer
    observerRef.current?.disconnect();

    observerRef.current = new IntersectionObserver(handleIntersect, {
      // Trigger when heading enters the top 20% of viewport
      rootMargin: "0px 0px -80% 0px",
      threshold: 0,
    });

    headings.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, [headings, handleIntersect]);

  // ── Smooth scroll handler ───────────────────────────────────────────
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    // Offset for any sticky header (80px)
    const top = el.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top, behavior: "smooth" });
    setActiveId(id);
  };

  // Don't render if there are fewer than 2 headings
  if (headings.length < 2) return null;

  return (
    <nav className="rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden">
      {/* Header */}
      <div className="flex items-center gap-2 px-4 py-3 bg-[#0a2340]">
        <List className="w-4 h-4 text-[#fef15f]" />
        <span className="font-heading font-bold text-sm text-white tracking-wide">
          In This Article
        </span>
      </div>

      {/* Links */}
      <ul className="px-3 py-3 space-y-0.5 max-h-[50vh] overflow-y-auto">
        {headings.map(({ id, text, level }) => (
          <li key={id}>
            <button
              onClick={() => scrollTo(id)}
              className={`
                w-full text-left rounded-md px-3 py-2 text-sm leading-snug
                transition-all duration-200 cursor-pointer
                ${level === 3 ? "pl-6" : ""}
                ${
                  activeId === id
                    ? "bg-blue-50 text-[#045cb4] font-semibold border-l-2 border-[#045cb4]"
                    : "text-gray-600 hover:text-[#0a2340] hover:bg-gray-50"
                }
              `}
            >
              {text}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
