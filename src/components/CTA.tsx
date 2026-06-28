"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { GetStartedButton, SecondaryButton } from "@/components/ui/Button";

const ease = [0.22, 1, 0.36, 1] as const;

export default function CTA() {
  return (
    <section id="contact" className="relative py-28 px-6">
      <div className="max-w-[1100px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease }}
          className="relative rounded-[28px] overflow-hidden border border-white/[0.08] px-6 py-20 text-center">
          <Image src="/assets/cta/cta-section-bg.png" alt="" fill sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-[#060610]/30" />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#694AF9]/25 blur-[100px] rounded-full pointer-events-none" />

          <div className="relative z-10">
            <h2 className="text-[clamp(30px,5vw,52px)] font-semibold leading-[1.12] tracking-[-0.02em]">
              Start Managing<br /> Your Customers Smarter
            </h2>
            <p className="text-white/60 mt-5 max-w-[480px] mx-auto text-[15px]">
              Everything you need to manage, track, and grow—without the complexity.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-9">
              <GetStartedButton />
              <SecondaryButton />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
