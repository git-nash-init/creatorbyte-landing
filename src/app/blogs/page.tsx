import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/lib/blogPosts";

export const metadata = {
  title: "Blogs – Nexaro",
  description: "Insights, tips, and strategies to help your team grow faster and work smarter.",
};

export default function BlogsPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          badge="Insights"
          title="Insights That Drive Growth"
          subtitle="Stay updated with the latest trends, tips, and strategies to help your team grow faster and work smarter."
        />
        <section className="px-6 pb-28">
          <div className="max-w-[1200px] mx-auto grid md:grid-cols-3 gap-6">
            {blogPosts.map(p => (
              <Link key={p.slug} href={`/blogs/${p.slug}`} className="card group block">
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
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
