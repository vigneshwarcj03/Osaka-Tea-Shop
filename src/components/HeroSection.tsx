"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background Image Placeholder with Dark Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover scale-105 animate-slow-zoom"
        >
          <source src="/bg_video.mp4" type="video/mp4" />
        </video>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-6"
        >
          <h1 className="text-6xl md:text-8xl font-serif tracking-[0.35em] text-[#D4AF37] drop-shadow-[0_0_60px_rgba(212,175,55,0.18)]">
            OSAKA
          </h1>

          <h2 className="text-lg md:text-2xl font-light tracking-[0.65em] text-white/60 mt-3 uppercase">
            Tea Shop
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          <Link
            href="/menu"
            className="group inline-flex items-center gap-3 px-9 py-4 
backdrop-blur-xl bg-white/5
border border-white/10
text-[#E6C36A] font-medium rounded-full
shadow-[0_8px_30px_rgba(0,0,0,0.4)]
hover:bg-white/10
hover:border-[#E6C36A]/40
hover:scale-[1.03]
transition-all duration-300"
          >
            Explore Menu
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.4em] text-white/30">
          Scroll
        </span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-[#D4AF37]/60 via-[#D4AF37]/20 to-transparent animate-pulse" />
      </motion.div>
    </section>
  );
}
