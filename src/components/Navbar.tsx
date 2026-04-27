"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { clsx } from "clsx";

const navLinks = [
  { name: "Welcome", href: "/" },
  { name: "Menu", href: "/menu" },
];

interface NavbarProps {
  isHidden?: boolean;
}

export default function Navbar({ isHidden = false }: NavbarProps) {
  const pathname = usePathname();

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6 pointer-events-none transition-transform duration-300 ease-out"
      style={{
        transform: isHidden ? "translateY(-100%)" : "translateY(0)",
      }}
    >
      <div className="flex items-center gap-1 p-1 bg-black/40 backdrop-blur-md border border-white/10 rounded-full pointer-events-auto">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={clsx(
                "relative px-6 py-2 text-sm font-medium transition-colors rounded-full",
                isActive ? "text-black" : "text-white/70 hover:text-white",
              )}
            >
              {isActive && (
                <motion.div
                  layoutId="nav-pill"
                  className="absolute inset-0 bg-gold rounded-full"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10">{link.name}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
