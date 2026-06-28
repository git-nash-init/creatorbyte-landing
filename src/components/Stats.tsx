"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { SecondaryButton } from "@/components/ui/Button";

const ease = [0.22, 1, 0.36, 1] as const;

function CountUp({ target, suffix = "", duration = 1600 }: { target: number; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let raf = 0; const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      setVal(Math.floor((1 - Math.pow(1 - p, 3)) * target));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, target, duration]);
  return <span ref={ref}>{val}{suffix}</span>;
}

export default function Stats() {
  return (
    <section className="relative py-28 px-6">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease }} className="text-center mb-16">
          <h2 className="text-[clamp(30px,4.5vw,44px)] font-semibold tracking-[-0.02em]">
            High-Impact Solutions for Business Growth
          </h2>
          <p className="text-white/50 mt-4 max-w-[580px] mx-auto text-[15px] leading-relaxed">
            Equip your team with the tools to streamline workflows, accelerate sales, and create customer connections.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left column: choice + 98% */}
          <div className="flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.7, ease }}
              className="card relative p-7 overflow-hidden">
              <Image src="/assets/stats/stats-card-bg-dark.png" alt="" fill sizes="(max-width: 1024px) 100vw, 33vw" className="object-cover opacity-40" />
              <div className="relative z-10">
                <h3 className="text-[16px] font-semibold mb-4">The Choice of Thousands</h3>
                <Image src="/assets/stats/stats-logos-strip.png" alt="" width={260} height={100}
                  className="w-full max-w-[260px] h-auto opacity-90 mb-4" />
                <p className="text-white/50 text-[13px]">Over 8,000 clients trust tether to connect their teams</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.7, ease, delay: 0.1 }}
              className="card relative p-7 overflow-hidden">
              <Image src="/assets/stats/stats-card-bg-purple.png" alt="" fill sizes="(max-width: 1024px) 100vw, 33vw" className="object-cover opacity-40" />
              <div className="relative z-10">
                <p className="text-[44px] font-semibold leading-none tracking-tight">
                  <CountUp target={98} suffix="%" />
                </p>
                <p className="text-white/80 mt-2 font-medium">Customer Satisfaction</p>
                <p className="text-white/45 text-[13px] mt-2">Over 8,000 clients trust tether to connect their teams</p>
              </div>
            </motion.div>
          </div>

          {/* Middle column: 24/7 + 120+ */}
          <div className="flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.7, ease, delay: 0.05 }}
              className="card relative p-7 overflow-hidden flex-1">
              <Image src="/assets/stats/stats-card-bg-dark.png" alt="" fill sizes="(max-width: 1024px) 100vw, 33vw" className="object-cover opacity-40" />
              <div className="relative z-10">
                <p className="text-[44px] font-semibold leading-none tracking-tight">24/7</p>
                <p className="text-white/80 mt-2 font-medium">Platform Availability</p>
                <p className="text-white/45 text-[13px] mt-3">
                  Reliable performance whenever your team needs it. Always available to help your team succeed.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.7, ease, delay: 0.15 }}
              className="card relative p-7 overflow-hidden flex-1">
              <Image src="/assets/stats/stats-card-bg-purple.png" alt="" fill sizes="(max-width: 1024px) 100vw, 33vw" className="object-cover opacity-40" />
              <div className="relative z-10">
                <p className="text-white/55 text-[13px] mb-4">Smarter business marketing campaigns</p>
                <p className="text-[44px] font-semibold leading-none tracking-tight">
                  <CountUp target={120} suffix="+" />
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right column: tall image + floating button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.7, ease, delay: 0.2 }}
            className="card relative overflow-hidden min-h-[300px] flex items-end">
            <Image src="/assets/stats/stats-right-image.png" alt="" fill sizes="(max-width: 1024px) 100vw, 33vw" className="object-cover" />
            <div className="relative z-10 p-7">
              <SecondaryButton label="Our Features" className="[&_a]:!bg-[#694AF9] [&_a]:!shadow-none" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
