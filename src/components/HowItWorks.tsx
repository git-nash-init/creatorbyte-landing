"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { SecondaryButton } from "@/components/ui/Button";

const ease = [0.22, 1, 0.36, 1] as const;

const steps = [
  { n: "01.", step: "STEP 01", img: "/assets/steps/steps-step1.png", text: "Create your workspace and import your contacts." },
  { n: "02.", step: "STEP 02", img: "/assets/steps/steps-step2.png", text: "Track leads and organize your sales pipeline." },
  { n: "03.", step: "STEP 03", img: "/assets/steps/steps-step3.png", text: "Automate tasks and close deals faster." },
];

export default function HowItWorks() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "end 60%"] });
  const lineWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="relative py-28 px-6 overflow-hidden">
      <Image src="/assets/steps/steps-section-bg.png" alt="" fill sizes="100vw" className="object-cover opacity-50 pointer-events-none" />
      <div className="relative z-10 max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease }} className="text-center mb-16">
          <h2 className="text-[clamp(30px,4.5vw,44px)] font-semibold tracking-[-0.02em]">Get Started in Minutes</h2>
          <p className="text-white/50 mt-4 max-w-[560px] mx-auto text-[15px] leading-relaxed">
            Set up your CRM, organize your pipeline, and start managing customer relationships with ease.
          </p>
          <div className="mt-8 flex justify-center"><SecondaryButton label="Our Features" /></div>
        </motion.div>

        <div ref={ref} className="relative">
          {/* Progress line (desktop) */}
          <div className="hidden md:block absolute top-[70px] left-[12%] right-[12%] h-px bg-white/10">
            <motion.div style={{ width: lineWidth }} className="h-full bg-gradient-to-r from-[#694AF9] to-[#8b6dfa]" />
          </div>

          <div className="grid md:grid-cols-3 gap-10 md:gap-6 relative">
            {steps.map((s, i) => (
              <motion.div key={s.n}
                initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.7, ease, delay: i * 0.15 }}
                className="flex flex-col items-center text-center">
                <div className="relative w-[140px] h-[140px] mb-6 grid place-items-center">
                  <div className="absolute inset-0 rounded-full bg-[#694AF9]/10 blur-xl" />
                  <Image src={s.img} alt={s.step} width={140} height={140}
                    className="relative w-[130px] h-[130px] object-contain" />
                </div>
                <p className="text-[#8b6dfa] text-[12px] font-semibold tracking-[0.15em] mb-2">{s.step}</p>
                <h4 className="text-[28px] font-semibold mb-2">{s.n}</h4>
                <p className="text-white/55 text-[14px] max-w-[240px]">{s.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
