"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Category } from "@/data/menu";
import { clsx } from "clsx";

interface CategoryTabsProps {
  categories: Category[];
  activeCategory: string;
  onCategoryChange: (id: string) => void;
  isNavbarHidden?: boolean;
}

export default function CategoryTabs({
  categories,
  activeCategory,
  onCategoryChange,
  isNavbarHidden = false,
}: CategoryTabsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const tabsRef = useRef<{ [key: string]: HTMLButtonElement | null }>({});

  // Auto-center the active tab in the horizontal scroll view
  useEffect(() => {
    if (!containerRef.current || !tabsRef.current[activeCategory]) return;

    const container = containerRef.current;
    const activeTab = tabsRef.current[activeCategory];

    // Calculate scroll position to center the active tab
    const containerWidth = container.clientWidth;
    const tabLeft = activeTab.offsetLeft;
    const tabWidth = activeTab.offsetWidth;
    const currentScroll = container.scrollLeft;

    // Center the tab in the visible area
    const targetScroll = tabLeft - (containerWidth / 2 - tabWidth / 2);

    container.scrollTo({
      left: targetScroll,
      behavior: "smooth",
    });
  }, [activeCategory]);

  // Dynamic top position based on navbar visibility
  const topPosition = isNavbarHidden ? "top-0" : "top-24";

  return (
    <div
      className={clsx(
        "z-40 w-full premium-blur border-b border-white/5 overflow-x-auto no-scrollbar",
        isNavbarHidden ? "fixed" : "sticky",
      )}
      style={{
        top: isNavbarHidden ? "0px" : "96px",
        left: isNavbarHidden ? "0px" : "auto",
        right: isNavbarHidden ? "0px" : "auto",
        transition:
          "top 300ms ease-out, left 300ms ease-out, right 300ms ease-out",
      }}
      ref={containerRef}
    >
      <div className="flex px-4 py-4 min-w-max mx-auto gap-4">
        {categories.map((category) => (
          <motion.button
            ref={(el) => {
              if (el) tabsRef.current[category.id] = el;
            }}
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            whileTap={{ scale: 0.95 }}
            className={clsx(
              "relative px-6 py-2 text-sm transition-all duration-300 rounded-full border whitespace-nowrap",
              activeCategory === category.id
                ? "bg-gold border-gold text-black"
                : "bg-white/5 border-white/10 text-white/60 hover:text-white hover:border-white/20",
            )}
          >
            {category.name}
          </motion.button>
        ))}
      </div>
    </div>
  );
}
