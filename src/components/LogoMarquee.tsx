"use client";
import Image from "next/image";

const logos = [
  "/assets/trust/trust-logo-1.svg",
  "/assets/trust/trust-logo-2.svg",
  "/assets/trust/trust-logo-3.svg",
];

export default function LogoMarquee() {
  // duplicate enough times for a seamless 50% loop
  const row = [...logos, ...logos, ...logos, ...logos, ...logos, ...logos];

  return (
    <section className="relative py-16 border-y border-white/[0.04]">
      <p className="text-center text-[13px] tracking-wide text-white/40 mb-10">
        Trusted by 1000+ customers
      </p>
      <div className="relative overflow-hidden fade-x">
        <div className="flex w-max marquee-track">
          {row.map((src, i) => (
            <div key={i} className="flex items-center justify-center px-10 shrink-0 opacity-60 hover:opacity-100 transition-opacity">
              <Image src={src} alt="partner logo" width={110} height={28} className="h-7 w-auto" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
