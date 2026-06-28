"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const ease = [0.22, 1, 0.36, 1] as const;

const testimonials = [
  { quote: "This CRM transformed sales pipeline management, fully making it organized, automated, and easy to track.",
    name: "Dianne Russell", role: "Marketer",
    avatar: "/assets/testimonials/avatar-dianne-russell.png", logo: "/assets/testimonials/testimonial-logo-1.svg" },
  { quote: "Automation tools are powerful, reducing repetitive tasks and helping our team build stronger customer relationships.",
    name: "Annette Black", role: "Marketer",
    avatar: "/assets/testimonials/avatar-annette-black.png", logo: "/assets/testimonials/testimonial-logo-2.svg" },
  { quote: "Managing leads and deals has never been this easy. The dashboard gives us complete visibility into our sales pipeline.",
    name: "Albert Flores", role: "Marketer",
    avatar: "/assets/testimonials/avatar-albert-flores.png", logo: "/assets/testimonials/testimonial-logo-3.svg" },
  { quote: "Platform helped our team organize leads, track deals efficiently, collaborate across departments, completely transforming workflow.",
    name: "Darrell Steward", role: "Marketer",
    avatar: "/assets/testimonials/avatar-darrell-steward.png", logo: "/assets/testimonials/testimonial-logo-4.svg" },
  { quote: "We saw immediate sales improvements, and dashboard insights help us make smarter, more informed decisions.",
    name: "Kristin Watson", role: "Marketer",
    avatar: "/assets/testimonials/avatar-kristin-watson.png", logo: "/assets/testimonials/testimonial-logo-3.svg" },
];

function Card({ t }: { t: typeof testimonials[number] }) {
  return (
    <div className="w-[360px] shrink-0 card !overflow-visible p-7 flex flex-col justify-between">
      <p className="text-white/80 text-[15px] leading-relaxed">{t.quote}</p>
      <div className="flex items-center justify-between mt-7">
        <div className="flex items-center gap-3">
          <Image src={t.avatar} alt={t.name} width={44} height={44} className="w-11 h-11 rounded-full object-cover" />
          <div>
            <p className="text-[14px] font-medium text-white">{t.name}</p>
            <p className="text-[12px] text-white/45">{t.role}</p>
          </div>
        </div>
        <Image src={t.logo} alt="" width={80} height={20} className="h-5 w-auto opacity-70" />
      </div>
    </div>
  );
}

export default function Testimonials() {
  const row = [...testimonials, ...testimonials];
  return (
    <section className="relative py-28 overflow-hidden">
      <div className="px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease }} className="text-center mb-16 max-w-[1200px] mx-auto">
          <h2 className="text-[clamp(30px,4.5vw,44px)] font-semibold tracking-[-0.02em]">What Our Customers Say</h2>
          <p className="text-white/50 mt-4 max-w-[560px] mx-auto text-[15px] leading-relaxed">
            Trusted by teams and businesses worldwide to manage customer relationships and grow faster.
          </p>
        </motion.div>
      </div>

      <div className="relative overflow-hidden fade-x">
        <div className="flex gap-6 w-max marquee-track py-2">
          {row.map((t, i) => <Card key={i} t={t} />)}
        </div>
      </div>
    </section>
  );
}
