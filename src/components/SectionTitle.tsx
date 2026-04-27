"use client";

import { motion } from "framer-motion";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export default function SectionTitle({ title, subtitle, align = "left" }: SectionTitleProps) {
  return (
    <div className={`mb-12 ${align === "center" ? "text-center" : ""}`}>
      {subtitle && (
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-[10px] uppercase tracking-[0.4em] text-gold mb-3 block"
        >
          {subtitle}
        </motion.span>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-3xl md:text-4xl font-serif text-white"
      >
        {title}
      </motion.h2>
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: 40 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className={`h-[1px] bg-gold mt-6 ${align === "center" ? "mx-auto" : ""}`}
      />
    </div>
  );
}
