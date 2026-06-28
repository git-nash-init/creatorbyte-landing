"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const next: Record<string, string> = {};
    if (!String(fd.get("name") || "").trim()) next.name = "Please enter your name.";
    const email = String(fd.get("email") || "");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = "Enter a valid email.";
    if (!String(fd.get("message") || "").trim()) next.message = "Please write a message.";
    setErrors(next);
    if (Object.keys(next).length === 0) setSent(true);
  }

  const field = "w-full rounded-xl bg-[#0B0820] border border-white/10 px-4 py-3 text-[14px] text-white placeholder:text-white/30 focus:border-[#694AF9]/60 focus:outline-none transition-colors";

  if (sent) {
    return (
      <motion.div initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }}
        className="card p-10 flex flex-col items-center justify-center text-center gap-3">
        <div className="w-14 h-14 rounded-full bg-[#694AF9]/20 grid place-items-center text-2xl">✅</div>
        <h3 className="text-[20px] font-semibold">Message sent</h3>
        <p className="text-white/55 text-[14px]">Thanks for reaching out — we&apos;ll get back to you shortly.</p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="card p-8 flex flex-col gap-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-[13px] text-white/70 mb-2">Name</label>
          <input id="name" name="name" type="text" autoComplete="name" placeholder="Jane Doe" className={field} />
          {errors.name && <p className="text-red-400 text-[12px] mt-1.5">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="email" className="block text-[13px] text-white/70 mb-2">Email</label>
          <input id="email" name="email" type="email" autoComplete="email" placeholder="jane@company.com" className={field} />
          {errors.email && <p className="text-red-400 text-[12px] mt-1.5">{errors.email}</p>}
        </div>
      </div>
      <div>
        <label htmlFor="company" className="block text-[13px] text-white/70 mb-2">Company <span className="text-white/30">(optional)</span></label>
        <input id="company" name="company" type="text" autoComplete="organization" placeholder="Acme Inc." className={field} />
      </div>
      <div>
        <label htmlFor="message" className="block text-[13px] text-white/70 mb-2">Message</label>
        <textarea id="message" name="message" rows={5} placeholder="Tell us about your team…" className={`${field} resize-none`} />
        {errors.message && <p className="text-red-400 text-[12px] mt-1.5">{errors.message}</p>}
      </div>
      <button type="submit"
        className="self-start px-8 py-3.5 rounded-full bg-[#694AF9] text-white text-[14px] font-medium hover:brightness-110 transition-all shadow-[inset_0_-4.8px_24px_1px_rgba(202,205,255,0.55)]">
        Send Message
      </button>
    </form>
  );
}
