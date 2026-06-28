"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { GetStartedButton, SecondaryButton } from "@/components/ui/Button";
import { useMouseParallax } from "@/lib/useMouseParallax";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  // Scroll parallax
  const yGlow = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const yDash = useTransform(scrollYProgress, [0, 1], [0, 90]);

  // Mouse parallax (the real Nexaro "cursor" effect)
  const { x, y } = useMouseParallax();
  const mx1 = useTransform(x, v => v * 0.05); const my1 = useTransform(y, v => v * 0.05);

  return (
    <section ref={ref} id="hero"
      className="relative min-h-screen flex flex-col items-center overflow-hidden bg-grid pt-[160px] pb-24">

      {/* Decorative purple glow layers (transparent PNGs) */}
      <motion.div style={{ y: yGlow }} className="absolute inset-0 pointer-events-none">
        <Image src="/assets/hero/hero-bg-1.png" alt="" fill sizes="100vw" className="object-cover opacity-70" priority />
      </motion.div>
      <div className="absolute inset-0 pointer-events-none">
        <Image src="/assets/hero/hero-bg-3.png" alt="" fill sizes="100vw" className="object-cover opacity-50" />
      </div>
      <motion.div style={{ x: mx1 }} className="absolute inset-0 pointer-events-none">
        <Image src="/assets/hero/hero-bg-4.png" alt="" fill sizes="100vw" className="object-cover opacity-60" />
      </motion.div>
      <div className="absolute inset-0 glow-hero pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-[860px] mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/12 bg-white/[0.04] backdrop-blur-sm mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-[#694AF9] animate-pulse" />
          <span className="text-[12px] font-medium text-white/70 tracking-wide">Building Future With AI</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 36 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease, delay: 0.08 }}
          className="text-[clamp(36px,6.2vw,64px)] font-semibold leading-[1.1] tracking-[-0.03em] text-white">
          Build smarter, more<br className="hidden sm:block" /> efficient workflows with <span className="text-gradient">AI</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 36 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease, delay: 0.16 }}
          className="max-w-[520px] mx-auto text-[16px] leading-[1.6] text-white/55 mt-6">
          Designed for investors and financial teams who want deeper insights,
          faster decisions, and better performance.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 36 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease, delay: 0.24 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
          <GetStartedButton />
          <SecondaryButton />
        </motion.div>
      </div>

      {/* Framed Wealth Overview dashboard centerpiece */}
      <motion.div
        style={{ y: yDash }}
        initial={{ opacity: 0, y: 80, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.1, ease, delay: 0.4 }}
        className="relative z-10 mt-24 w-full max-w-[1040px] px-6">
        <motion.div style={{ x: mx1, translateY: my1 }}
          className="relative rounded-[20px] overflow-hidden border border-white/[0.08] shadow-[0_50px_120px_rgba(0,0,0,0.6)]">
          <Image src="/assets/hero/hero-bg-2.png" alt="Nexaro dashboard"
            width={2172} height={1464} sizes="(max-width: 1040px) 100vw, 1040px"
            className="w-full h-auto" priority />
        </motion.div>
      </motion.div>

      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-[#060610] to-transparent pointer-events-none z-10" />
    </section>
  );
}
