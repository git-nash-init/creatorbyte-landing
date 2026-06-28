"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/lib/blogPosts";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Blog() {
  return (
    <section className="relative py-28 px-6">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease }} className="text-center mb-16">
          <h2 className="text-[clamp(30px,4.5vw,44px)] font-semibold tracking-[-0.02em]">Insights That Drive Growth</h2>
          <p className="text-white/50 mt-4 max-w-[600px] mx-auto text-[15px] leading-relaxed">
            Stay updated with the latest trends, tips, and strategies to help your team grow faster and work smarter.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {blogPosts.map((p, i) => (
            <motion.div key={p.slug}
              initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.7, ease, delay: i * 0.1 }}>
              <Link href={`/blogs/${p.slug}`} className="card group block h-full">
                <div className="relative h-[220px] overflow-hidden">
                  <Image src={p.image} alt={p.title} fill sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700" />
                  <span className="absolute top-4 left-4 px-3 py-1.5 rounded-full text-[12px] bg-black/50 backdrop-blur-sm text-white/85">
                    {p.date}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-[18px] font-semibold mb-2 group-hover:text-[#a78bfa] transition-colors">{p.title}</h3>
                  <p className="text-white/50 text-[14px] leading-relaxed">{p.excerpt}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
