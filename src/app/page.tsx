"use client";

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SectionTitle from "@/components/SectionTitle";
import Link from "next/link";
import { categories } from "@/data/menu";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

export default function Home() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % categories.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen">
      <Navbar />

      <HeroSection />
      {/* Philosophy Section */}
      <section className="py-24 px-6 bg-white/[0.02] border-y border-white/5">
        <div className="max-w-3xl mx-auto text-center">
          <SectionTitle
            title="A Place to Relax & Enjoy"
            subtitle="Our Story"
            align="center"
          />

          <div className="flex justify-center mt-8">
            <img
              src="/shop.png"
              alt="Tea Shop"
              className="w-48 h-auto object-contain"
            />
          </div>
          <p className="text-white/60 leading-loose font-light mt-8">
            At Osaka Tea Shop, we serve good food and refreshing drinks in a
            simple and modern setting. We care about quality and customer
            experience, always making sure every item is fresh and well
            prepared. Our shop is a warm and welcoming place to relax, enjoy
            your time, and have a peaceful visit with friends or family.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 text-center border-t border-white/5">
        <p className="text-[10px] uppercase tracking-[0.5em] text-white/20">
          © 2026 OSAKA Tea Shop. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
