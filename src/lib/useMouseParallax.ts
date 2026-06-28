"use client";
import { useEffect } from "react";
import { useMotionValue, useSpring, useReducedMotion } from "framer-motion";

/**
 * Mouse-parallax — the real Nexaro "cursor movement" effect.
 * Tracks the pointer offset from viewport center and exposes two spring-smoothed
 * motion values. Multiply by a depth factor per layer for the parallax depth.
 *
 *   const { x, y } = useMouseParallax();
 *   <motion.div style={{ x: useTransform(x, v => v * 0.06), y: useTransform(y, v => v * 0.06) }} />
 *
 * Honors prefers-reduced-motion (stays at 0,0 when set).
 */
export function useMouseParallax(stiffness = 120, damping = 20) {
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const x = useSpring(rawX, { stiffness, damping, mass: 0.5 });
  const y = useSpring(rawY, { stiffness, damping, mass: 0.5 });
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;
    const onMove = (e: MouseEvent) => {
      // offset from center, normalized to roughly [-1, 1]
      const nx = (e.clientX - window.innerWidth / 2) / (window.innerWidth / 2);
      const ny = (e.clientY - window.innerHeight / 2) / (window.innerHeight / 2);
      rawX.set(nx * 100);
      rawY.set(ny * 100);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [rawX, rawY, reduced]);

  return { x, y };
}
