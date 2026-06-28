"use client";
import Image from "next/image";
import Link from "next/link";

const social = [
  { icon: "/assets/icons/icon-facebook.svg",  href: "https://www.facebook.com/",  label: "Facebook" },
  { icon: "/assets/icons/icon-instagram.svg", href: "https://www.instagram.com/", label: "Instagram" },
  { icon: "/assets/icons/icon-twitter.svg",   href: "https://x.com/",             label: "Twitter" },
  { icon: "/assets/icons/icon-linkedin.svg",  href: "https://www.linkedin.com/",  label: "LinkedIn" },
];

const cols = [
  { title: "Essential", links: [
    { label: "Home", href: "/" }, { label: "Features", href: "/features" },
    { label: "About Us", href: "/contact" }, { label: "Pricing", href: "/pricing" },
  ]},
  { title: "Useful Links", links: [
    { label: "Integration", href: "/#integrations" }, { label: "Blogs", href: "/blogs" },
    { label: "Blog Details", href: "/blogs/crm-features-every-growing-team" }, { label: "Contact", href: "/contact" },
  ]},
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/[0.06] pt-20">
      <Image src="/assets/footer/footer-bg-1.png" alt="" fill sizes="100vw" className="object-cover opacity-40 pointer-events-none" />
      <div className="relative z-10 max-w-[1200px] mx-auto px-6">
        <div className="grid md:grid-cols-[1.4fr_1fr_1fr_1.2fr] gap-10 pb-16">
          {/* Brand */}
          <div>
            <Image src="/assets/logo/logo-footer.svg" alt="Nexaro" width={140} height={48} className="mb-5" />
            <p className="text-white/50 text-[14px] leading-relaxed max-w-[260px] mb-6">
              Connect with marketing platforms to track campaigns and leads effortlessly.
            </p>
            <div className="flex gap-3">
              {social.map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                  className="w-9 h-9 rounded-full bg-white/[0.05] border border-white/10 grid place-items-center hover:bg-[#694AF9]/20 hover:border-[#694AF9]/40 transition-colors">
                  <Image src={s.icon} alt="" width={16} height={16} className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {cols.map(col => (
            <div key={col.title}>
              <h4 className="text-[14px] font-semibold text-white mb-5">{col.title}</h4>
              <ul className="space-y-3">
                {col.links.map(l => (
                  <li key={l.label}>
                    <Link href={l.href} className="text-white/50 text-[14px] hover:text-white transition-colors">{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div>
            <h4 className="text-[14px] font-semibold text-white mb-5">Contact</h4>
            <ul className="space-y-3 text-[14px] text-white/50">
              <li><a href="mailto:contact@nexaro.com" className="hover:text-white transition-colors">contact@nexaro.com</a></li>
              <li><a href="tel:(702) 555-0122" className="hover:text-white transition-colors">(702) 555-0122</a></li>
              <li><a href="tel:(252) 555-0126" className="hover:text-white transition-colors">(252) 555-0126</a></li>
              <li>3517 W. Gray St. Utica, Pennsylvania 57867</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 py-6 border-t border-white/[0.06]">
          <p className="text-white/40 text-[13px]">© Designed by RedDevs · Powered by Framer</p>
        </div>

        {/* Wordmark */}
        <div className="relative pb-8 opacity-90">
          <Image src="/assets/footer/footer-wordmark.png" alt="Nexaro" width={1894} height={410}
            className="w-full h-auto" />
        </div>
      </div>
    </footer>
  );
}
