import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Pricing from "@/components/Pricing";
import CTA from "@/components/CTA";

export const metadata = {
  title: "Pricing – Nexaro",
  description: "Choose the plan that fits your team. Upgrade anytime as your business grows.",
};

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          badge="Simple Pricing"
          title="Plans that scale with you"
          subtitle="Choose the plan that fits your team. Upgrade anytime as your business grows."
        />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
