import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact – Nexaro",
  description: "Get in touch with the Nexaro team.",
};

const info = [
  { label: "Email", value: "contact@nexaro.com", href: "mailto:contact@nexaro.com" },
  { label: "Phone", value: "(702) 555-0122", href: "tel:(702) 555-0122" },
  { label: "Phone", value: "(252) 555-0126", href: "tel:(252) 555-0126" },
  { label: "Address", value: "3517 W. Gray St. Utica, Pennsylvania 57867" },
];

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          badge="Get in touch"
          title="Let's talk about your team"
          subtitle="Have a question or want a demo? Send us a message and we'll get back to you."
        />
        <section className="px-6 pb-28">
          <div className="max-w-[1100px] mx-auto grid lg:grid-cols-[1fr_1.2fr] gap-8">
            {/* Info */}
            <div className="card p-8 flex flex-col gap-6">
              <h2 className="text-[22px] font-semibold">Contact information</h2>
              {info.map((it, i) => (
                <div key={i}>
                  <p className="text-white/40 text-[12px] uppercase tracking-wide mb-1">{it.label}</p>
                  {it.href
                    ? <a href={it.href} className="text-white/85 hover:text-[#a78bfa] transition-colors">{it.value}</a>
                    : <p className="text-white/85">{it.value}</p>}
                </div>
              ))}
            </div>
            {/* Form */}
            <ContactForm />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
