import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Features from "@/components/Features";
import Stats from "@/components/Stats";
import Integrations from "@/components/Integrations";
import CTA from "@/components/CTA";

export const metadata = {
  title: "Features – Nexaro",
  description: "Everything your team needs to manage leads, close deals faster, and build lasting customer relationships.",
};

export default function FeaturesPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          badge="Powerful Features"
          title="Everything you need to grow"
          subtitle="Manage leads, automate workflows, and close deals faster with a CRM built for modern teams."
        />
        <Features />
        <Stats />
        <Integrations />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
