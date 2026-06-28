import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "@/lib/blogPosts";

export function generateStaticParams() {
  return blogPosts.map(p => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find(p => p.slug === slug);
  return { title: post ? `${post.title} – Nexaro` : "Blog – Nexaro" };
}

export default async function BlogDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find(p => p.slug === slug);
  if (!post) notFound();

  const others = blogPosts.filter(p => p.slug !== post.slug);

  return (
    <>
      <Navbar />
      <main>
        <article className="pt-[140px] px-6">
          <div className="max-w-[820px] mx-auto">
            <Link href="/blogs" className="text-[14px] text-white/50 hover:text-white transition-colors">← Back to blogs</Link>
            <p className="text-[#8b6dfa] text-[13px] mt-6 mb-3">{post.date}</p>
            <h1 className="text-[clamp(28px,4.5vw,44px)] font-semibold leading-[1.15] tracking-[-0.02em]">{post.title}</h1>
            <div className="relative h-[380px] rounded-[20px] overflow-hidden my-10 border border-white/[0.08]">
              <Image src={post.image} alt={post.title} fill sizes="(max-width: 820px) 100vw, 820px" className="object-cover" />
            </div>
            <div className="prose-invert text-white/70 text-[16px] leading-[1.8] space-y-5">
              <p>{post.excerpt}</p>
              <p>
                A strong sales process is the backbone of every growing team. By structuring how
                you capture leads, qualify opportunities, and follow up, you give your team a
                repeatable system that scales as you grow.
              </p>
              <h2 className="text-white text-[22px] font-semibold pt-4">Why it matters</h2>
              <p>
                Automation removes the repetitive work that slows teams down — follow-ups,
                notifications, and data entry — so your people can focus on building relationships
                and closing deals.
              </p>
              <h2 className="text-white text-[22px] font-semibold pt-4">Getting started</h2>
              <p>
                Start small: import your contacts, organize your pipeline, and let the platform
                surface the opportunities most likely to convert. From there, layer in automation
                and watch your close rate climb.
              </p>
            </div>
          </div>
        </article>

        {/* Related */}
        <section className="px-6 py-24">
          <div className="max-w-[1200px] mx-auto">
            <h2 className="text-[24px] font-semibold mb-8">More insights</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {others.map(p => (
                <Link key={p.slug} href={`/blogs/${p.slug}`} className="card group flex gap-5 p-4 items-center">
                  <div className="relative w-[140px] h-[100px] rounded-xl overflow-hidden shrink-0">
                    <Image src={p.image} alt={p.title} fill sizes="140px" className="object-cover group-hover:scale-105 transition-transform duration-700" />
                  </div>
                  <div>
                    <p className="text-[#8b6dfa] text-[12px] mb-1">{p.date}</p>
                    <h3 className="text-[16px] font-semibold group-hover:text-[#a78bfa] transition-colors">{p.title}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
