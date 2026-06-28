"use client";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

export default function PageHero({ badge, title, subtitle }: { badge?: string; title: string; subtitle?: string }) {
  return (
    <section className="relative pt-[160px] pb-16 px-6 text-center overflow-hidden bg-grid">
      <div className="absolute inset-0 glow-hero pointer-events-none" />
      <div className="relative z-10 max-w-[760px] mx-auto">
        {badge && (
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/12 bg-white/[0.04] mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#694AF9] animate-pulse" />
            <span className="text-[12px] font-medium text-white/70">{badge}</span>
          </motion.div>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease, delay: 0.08 }}
          className="text-[clamp(32px,5.5vw,56px)] font-semibold leading-[1.1] tracking-[-0.03em]">
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease, delay: 0.16 }}
            className="text-white/55 mt-5 max-w-[520px] mx-auto text-[16px] leading-relaxed">
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}
