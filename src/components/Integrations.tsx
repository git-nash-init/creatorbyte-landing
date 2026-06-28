"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const ease = [0.22, 1, 0.36, 1] as const;
const logos = Array.from({ length: 8 }, (_, i) => `/assets/integrations/integration-logo-${i + 1}.svg`);

export default function Integrations() {
  return (
    <section className="relative py-28 px-6 overflow-hidden">
      <Image src="/assets/integrations/integrations-section-bg.png" alt="" fill sizes="100vw" className="object-cover opacity-40 pointer-events-none" />
      <div className="relative z-10 max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease }} className="text-center mb-14">
          <h2 className="text-[clamp(30px,4.5vw,44px)] font-semibold tracking-[-0.02em] max-w-[640px] mx-auto leading-[1.15]">
            Seamless Integrations With Your Favorite Tools
          </h2>
          <p className="text-white/50 mt-4 max-w-[520px] mx-auto text-[15px] leading-relaxed">
            Connect your CRM with the tools your team already uses to streamline workflows.
          </p>
        </motion.div>

        {/* Glowing podium with the single row of integration icons resting on it */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.96 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true }}
          transition={{ duration: 0.9, ease }}
          className="relative max-w-[900px] mx-auto">
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-40 bg-[#694AF9]/20 blur-[80px] rounded-full" />
          <Image src="/assets/integrations/integrations-main.png" alt="Integrations"
            width={900} height={573} className="relative w-full h-auto" priority />

          {/* Icons carousel running across the platform */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-[64%] overflow-hidden fade-x">
              {/* list duplicated once; track translates -50% for a seamless loop */}
              <div className="flex w-max marquee-track">
                {[...logos, ...logos].map((src, i) => (
                  <div key={i} className="px-2 sm:px-2.5 shrink-0">
                    <div className="w-[52px] h-[52px] sm:w-[68px] sm:h-[68px] rounded-2xl bg-[#0F0A22]/90 border border-white/[0.08] grid place-items-center shadow-[0_12px_40px_rgba(0,0,0,0.45)] hover:border-[#694AF9]/50 transition-colors">
                      <Image src={src} alt="integration" width={36} height={36} className="w-7 h-7 sm:w-9 sm:h-9 object-contain" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
