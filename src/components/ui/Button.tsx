"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const spring = { type: "spring" as const, stiffness: 400, damping: 28 };

/** Primary pill with circular arrow icon (exact Nexaro "Get Started"). */
export function GetStartedButton({
  href = "/contact",
  label = "Get Started",
  className = "",
}: { href?: string; label?: string; className?: string }) {
  return (
    <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }} transition={spring}
      className={`inline-block ${className}`}>
      <Link href={href} className="btn-primary">
        <span className="grid place-items-center w-9 h-9 rounded-full bg-white/15 shrink-0">
          <Image src="/assets/icons/icon-btn-arrow.svg" alt="" width={16} height={16} />
        </span>
        {label}
      </Link>
    </motion.div>
  );
}

/** Secondary ghost pill (exact Nexaro "Our Features"). */
export function SecondaryButton({
  href = "/features",
  label = "Our Features",
  className = "",
}: { href?: string; label?: string; className?: string }) {
  return (
    <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }} transition={spring}
      className={`inline-block ${className}`}>
      <Link href={href} className="btn-secondary">{label}</Link>
    </motion.div>
  );
}
