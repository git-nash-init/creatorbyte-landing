"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { GetStartedButton } from "@/components/ui/Button";

const ease = [0.22, 1, 0.36, 1] as const;
const reveal = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
};

const roles = ["Marketer", "Designer", "Developer", "Social Media Manager"];

export default function Features() {
  return (
    <section id="features" className="relative py-28 px-6">
      <div className="max-w-[1200px] mx-auto">
        {/* Heading */}
        <motion.div {...reveal} transition={{ duration: 0.8, ease }} className="text-center mb-16">
          <h2 className="text-[clamp(30px,4.5vw,44px)] font-semibold leading-[1.15] tracking-[-0.02em]">
            Powerful Features<br /> to Grow Your Business
          </h2>
          <p className="text-white/50 mt-4 max-w-[560px] mx-auto text-[15px] leading-relaxed">
            Everything your team needs to manage leads, close deals faster, and build lasting customer relationships.
          </p>
        </motion.div>

        {/* Card 01 — large */}
        <motion.div {...reveal} transition={{ duration: 0.8, ease }}
          className="card relative grid lg:grid-cols-2 gap-8 p-8 lg:p-12 mb-6 overflow-hidden">
          <Image src="/assets/features/feature-card1-bg.png" alt="" fill sizes="100vw" className="object-cover opacity-30 pointer-events-none" />
          <div className="relative z-10 flex flex-col justify-center">
            <h3 className="text-[28px] font-semibold leading-[1.2] tracking-[-0.01em] mb-4">
              Build Smarter Workflows With AI
            </h3>
            <p className="text-white/55 text-[15px] leading-relaxed mb-7 max-w-[400px]">
              Designed for investors and financial teams who want deeper insights,
              faster decisions, and better performance.
            </p>
            <GetStartedButton />
            <div className="flex flex-wrap gap-2 mt-8">
              {roles.map((r, i) => (
                <motion.span key={r}
                  initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }} transition={{ delay: 0.2 + i * 0.08 }}
                  className="px-3.5 py-1.5 rounded-full text-[12px] text-white/70 bg-white/[0.05] border border-white/10">
                  {r}
                </motion.span>
              ))}
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.8, ease, delay: 0.2 }}
            className="relative z-10 flex items-center">
            <div className="w-full rounded-[16px] overflow-hidden border border-white/[0.06] bg-[#0B0820]/60">
              <Image src="/assets/features/feature-card1-chart.png" alt="Sales statistic"
                width={1228} height={920} sizes="(max-width: 1024px) 100vw, 520px"
                className="w-full h-auto" />
            </div>
          </motion.div>
        </motion.div>

        {/* Cards 02 + 03 */}
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { title: "Smart Lead Management",
              desc: "Capture, organize, and track leads in one place so your team never misses an opportunity.",
              bg: "/assets/features/feature-card2-bg.png", img: "/assets/features/feature-card2-main.png" },
            { title: "Automation Workflows",
              desc: "Automate repetitive tasks like follow-ups, notifications, and data updates to save time and improve efficiency.",
              bg: "/assets/features/feature-card3-bg.png", img: "/assets/features/feature-card3-main.png" },
          ].map((c, i) => (
            <motion.div key={c.title} {...reveal} transition={{ duration: 0.8, ease, delay: i * 0.1 }}
              className="card relative p-8 overflow-hidden group">
              <Image src={c.bg} alt="" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover opacity-30 pointer-events-none" />
              <div className="relative z-10">
                <div className="relative h-[240px] mb-7 rounded-2xl overflow-hidden flex items-center justify-center">
                  <Image src={c.img} alt={c.title} width={420} height={300}
                    className="w-auto h-full object-contain group-hover:scale-105 transition-transform duration-700" />
                </div>
                <h3 className="text-[20px] font-semibold mb-2">{c.title}</h3>
                <p className="text-white/55 text-[14px] leading-relaxed">{c.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
