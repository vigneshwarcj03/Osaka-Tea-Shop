"use client";

import { useState, useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import CategoryTabs from "@/components/CategoryTabs";
import MenuCard from "@/components/MenuCard";
import SectionTitle from "@/components/SectionTitle";
import { categories, menuItems } from "@/data/menu";
import { motion, AnimatePresence } from "framer-motion";

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState(categories[0].id);
  const [isNavbarHidden, setIsNavbarHidden] = useState(false);
  const categoryRefs = useRef<{ [key: string]: HTMLElement | null }>({});
  const categoryTabsRef = useRef<HTMLDivElement>(null);

  const scrollToCategory = (id: string) => {
    setActiveCategory(id);
    const element = categoryRefs.current[id];
    if (element) {
      // Offset accounts for navbar height (may or may not be visible) + tabs height
      const offset = isNavbarHidden ? 80 : 160; // 80px for tabs only, 160px for navbar + tabs
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    // Detect when CategoryTabs reaches the top of viewport using scroll listener
    const handleScroll = () => {
      if (!categoryTabsRef.current) return;

      const tabsTop = categoryTabsRef.current.getBoundingClientRect().top;
      // Hide navbar when CategoryTabs top is at or above the navbar height (96px = 24 * 4)
      setIsNavbarHidden(tabsTop <= 96);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Create IntersectionObserver to track which section is in view
    const observerOptions = {
      root: null,
      rootMargin: "-160px 0px -66% 0px", // Account for navbar + tabs height
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      // Find the first visible section
      for (const entry of entries) {
        if (entry.isIntersecting) {
          const categoryId = entry.target.id;
          if (categoryId) {
            setActiveCategory(categoryId);
          }
          break;
        }
      }
    }, observerOptions);

    // Observe all category sections
    categories.forEach((category) => {
      const element = categoryRefs.current[category.id];
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen pt-24">
      <Navbar isHidden={isNavbarHidden} />

      <div className="px-6 mb-12 max-w-7xl mx-auto">
        <SectionTitle title="Our Menu" subtitle="A Curated Selection" />
      </div>

      <div ref={categoryTabsRef}>
        <CategoryTabs
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={scrollToCategory}
          isNavbarHidden={isNavbarHidden}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {categories.map((category) => (
          <section
            key={category.id}
            id={category.id}
            ref={(el) => {
              if (el) categoryRefs.current[category.id] = el;
            }}
            className="mb-20 scroll-mt-32"
          >
            <h3 className="text-2xl font-serif text-gold/80 mb-8 tracking-wide">
              {category.name}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 rounded-3xl overflow-hidden shadow-[0_25px_80px_rgba(0,0,0,0.7)]">
              {/* 🖼️ LEFT: IMAGE (CLEAR & FULLY VISIBLE) */}
              <div className="relative min-h-[260px] md:min-h-full">
                <img
                  src={`/${category.id}.jfif`}
                  alt={category.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* soft cinematic overlay ONLY (not hiding image) */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-black/10 to-transparent" />

                {/* category label */}
                <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8">
                  <h3 className="font-serif text-white leading-tight">
                    <span className="text-2xl md:text-3xl tracking-wide">
                      {category.name}
                    </span>

                    <span className="block h-[1px] w-12 bg-gold/70 mt-3"></span>
                  </h3>
                </div>
              </div>

              {/* 🍽️ RIGHT: MENU (CLEAR GLASS PANEL) */}
              <div
                className="bg-gradient-to-b from-white/[0.06] to-white/[0.02] 
backdrop-blur-2xl 
border-l border-white/10 
p-6 md:p-10"
              >
                {/* items */}
                <div className="space-y-3 divide-y divide-white/5">
                  {menuItems
                    .filter((item) => item.category === category.id)
                    .map((item) => (
                      <div
                        key={item.id}
                        className="group flex items-center justify-between px-4 py-4 rounded-2xl
  bg-white/[0.04] border border-white/10
  hover:bg-white/[0.08] hover:border-white/20
  transition-all duration-300 ease-out
  hover:shadow-[0_10px_30px_rgba(0,0,0,0.6)]"
                      >
                        {/* name */}
                        <span className="text-white/90 text-sm tracking-wide font-light">
                          {item.name}
                        </span>

                        {/* price */}
                        <span className="text-gold text-sm font-light tracking-[0.2em] flex items-center gap-1">
                          <span className="text-white/40 text-xs tracking-normal">
                            ₹
                          </span>
                          <span>
                            {Array.isArray(item.price)
                              ? item.price[0]
                              : item.price}
                          </span>

                          {Array.isArray(item.price) && (
                            <>
                              <span className="text-white/20 mx-1">/</span>
                              <span className="text-white/40 text-xs">₹</span>
                              <span className="opacity-80">
                                {item.price[1]}
                              </span>
                            </>
                          )}
                        </span>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      <footer className="py-12 px-6 text-center border-t border-white/5">
        <p className="text-[10px] uppercase tracking-[0.5em] text-white/20">
          OSAKA Tea Shop • Since 2026
        </p>
      </footer>
    </main>
  );
}
