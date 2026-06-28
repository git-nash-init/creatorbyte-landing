"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const allPages = [
  { label: "Pricing", href: "/pricing" },
  { label: "Blogs", href: "/blogs" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);          // mobile menu
  const [pagesOpen, setPagesOpen] = useState(false); // desktop dropdown

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 inset-x-0 z-50"
    >
      <div className={`transition-colors duration-300 ${
        scrolled ? "bg-[#060610]/80 backdrop-blur-xl border-b border-white/[0.06]" : "bg-transparent"
      }`}>
        <nav className="max-w-[1200px] mx-auto px-6 h-[72px] flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0">
            <Image src="/assets/logo/logo-header.svg" alt="Nexaro" width={130} height={45} priority />
          </Link>

          {/* Center links */}
          <div className="hidden md:flex items-center gap-8 text-[15px] text-white/70">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <Link href="/features" className="hover:text-white transition-colors">Features</Link>
            <div className="relative"
                 onMouseEnter={() => setPagesOpen(true)}
                 onMouseLeave={() => setPagesOpen(false)}>
              <button className="flex items-center gap-1 hover:text-white transition-colors">
                All Pages
                <svg width="12" height="12" viewBox="0 0 12 12" className={`transition-transform ${pagesOpen ? "rotate-180" : ""}`}>
                  <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <AnimatePresence>
                {pagesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.18 }}
                    className="absolute top-full left-0 pt-3">
                    <div className="min-w-[180px] rounded-2xl bg-[#0F0A22] border border-white/10 p-2 shadow-2xl">
                      {allPages.map(p => (
                        <Link key={p.href} href={p.href}
                          className="block px-4 py-2.5 rounded-xl text-[14px] text-white/70 hover:text-white hover:bg-white/[0.05] transition-colors">
                          {p.label}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 28 }}>
              <Link href="/contact" className="btn-secondary !px-7 !py-3 text-sm">Join Now</Link>
            </motion.div>
          </div>

          {/* Mobile toggle */}
          <button className="md:hidden flex flex-col gap-1.5 p-2" onClick={() => setOpen(v => !v)} aria-label="Menu">
            <motion.span animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }} className="block w-6 h-0.5 bg-white" />
            <motion.span animate={open ? { opacity: 0 } : { opacity: 1 }} className="block w-6 h-0.5 bg-white" />
            <motion.span animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }} className="block w-6 h-0.5 bg-white" />
          </button>
        </nav>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden overflow-hidden bg-[#0F0A22] border-b border-white/10">
            <div className="px-6 py-5 flex flex-col gap-1">
              {[{ label: "Home", href: "/" }, { label: "Features", href: "/features" }, ...allPages].map(l => (
                <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
                  className="py-3 text-white/75 hover:text-white border-b border-white/[0.05] last:border-0">
                  {l.label}
                </Link>
              ))}
              <Link href="/contact" onClick={() => setOpen(false)} className="btn-primary mt-3 justify-center">
                <span className="grid place-items-center w-8 h-8 rounded-full bg-white/15">
                  <Image src="/assets/icons/icon-btn-arrow.svg" alt="" width={14} height={14} />
                </span>
                Join Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
