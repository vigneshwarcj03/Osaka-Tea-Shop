"use client";

import { motion } from "framer-motion";
import { MenuItem } from "@/data/menu";

interface MenuCardProps {
  item: MenuItem;
}

export default function MenuCard({ item }: MenuCardProps) {
  const formatPrice = (price: number | [number, number]) => {
    if (Array.isArray(price)) {
      return `${price[0]} / ${price[1]}`;
    }
    return price.toString();
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -4 }}
      className="group p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-gold/30 hover:bg-white/[0.05] transition-all duration-300"
    >
      <div className="flex justify-between items-start gap-4 mb-2">
        <h3 className="text-xl font-serif text-white group-hover:text-gold transition-colors">
          {item.name}
        </h3>
        <span className="text-gold font-medium tracking-wider">
          {formatPrice(item.price)}
        </span>
      </div>

      <p className="text-white/50 text-sm leading-relaxed mb-4">
        {item.description}
      </p>

      {item.note && (
        <div className="text-[10px] uppercase tracking-widest text-gold/60 font-medium">
          {item.note}
        </div>
      )}
    </motion.div>
  );
}
