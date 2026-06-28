"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const ease = [0.22, 1, 0.36, 1] as const;

const features = [
  "Up to 5 team members",
  "Core AI automation features",
  "Real-time recommendations",
  "Basic integrations",
  "Opportunity detection",
  "Email support",
];

const plans = [
  { name: "Starter", monthly: 2800, popular: false },
  { name: "Growth",  monthly: 3700, popular: true },
  { name: "Starter", monthly: 5500, popular: false },
];

export default function Pricing() {
  const [yearly, setYearly] = useState(false);
  const price = (m: number) => yearly ? Math.round((m * 0.8) / 100) * 100 : m;

  return (
    <section id="pricing" className="relative py-28 px-6">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease }} className="text-center mb-12">
          <h2 className="text-[clamp(30px,4.5vw,44px)] font-semibold tracking-[-0.02em]">Simple, Transparent Pricing</h2>
          <p className="text-white/50 mt-4 max-w-[540px] mx-auto text-[15px] leading-relaxed">
            Choose the plan that fits your team. Upgrade anytime as your business grows.
          </p>

          {/* Toggle */}
          <div className="mt-9 inline-flex items-center gap-4">
            <span className={`text-[14px] ${!yearly ? "text-white" : "text-white/45"}`}>Monthly</span>
            <button onClick={() => setYearly(v => !v)}
              className="relative w-[58px] h-[32px] rounded-full bg-[#291F55] border border-white/10 p-1"
              aria-label="Toggle billing period">
              <motion.span layout transition={{ type: "spring", stiffness: 500, damping: 32 }}
                className={`block w-[24px] h-[24px] rounded-full bg-[#694AF9] ${yearly ? "ml-[26px]" : "ml-0"}`} />
            </button>
            <span className={`text-[14px] ${yearly ? "text-white" : "text-white/45"}`}>Yearly</span>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((p, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.7, ease, delay: i * 0.1 }}
              className={`relative rounded-[20px] p-8 overflow-hidden border ${
                p.popular ? "border-[#694AF9]/50 bg-[#0F0A22]" : "border-white/[0.07] bg-[#0B0820]"
              }`}>
              {p.popular && (
                <Image src="/assets/pricing/pricing-card-bg.png" alt="" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover opacity-50 pointer-events-none" />
              )}
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-6">
                  <Image src={p.popular ? "/assets/pricing/icon-plan-popular.svg" : "/assets/pricing/icon-plan-featured.svg"}
                    alt="" width={22} height={22} />
                  <span className="text-[15px] font-medium text-white/85">{p.name}</span>
                </div>

                <div className="flex items-end gap-2 mb-1 h-[52px]">
                  <AnimatePresence mode="popLayout">
                    <motion.span key={price(p.monthly)}
                      initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }}
                      transition={{ duration: 0.3, ease }}
                      className="text-[40px] font-semibold leading-none tracking-tight">
                      ${price(p.monthly).toLocaleString()}
                    </motion.span>
                  </AnimatePresence>
                  <span className="text-white/45 text-[13px] mb-1">/ Per Month</span>
                </div>
                <p className="text-white/50 text-[14px] mb-6">Perfect for small teams getting started.</p>

                <Link href="/contact"
                  className={`block text-center py-3.5 rounded-full text-[14px] font-medium mb-7 transition-all ${
                    p.popular
                      ? "bg-[#694AF9] text-white hover:brightness-110 shadow-[inset_0_-4.8px_24px_1px_rgba(202,205,255,0.55)]"
                      : "border border-white/12 text-white hover:bg-white/[0.05]"
                  }`}>
                  Choose Plan
                </Link>

                <p className="text-[13px] font-medium text-white/70 mb-4">Features Included</p>
                <ul className="space-y-3">
                  {features.map(f => (
                    <li key={f} className="flex items-center gap-3 text-[14px] text-white/65">
                      <Image src="/assets/icons/icon-check.svg" alt="" width={20} height={20} className="shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
