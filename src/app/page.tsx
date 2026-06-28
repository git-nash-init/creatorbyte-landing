import Navbar        from "@/components/Navbar";
import Hero          from "@/components/Hero";
import LogoMarquee   from "@/components/LogoMarquee";
import Features      from "@/components/Features";
import Stats         from "@/components/Stats";
import HowItWorks    from "@/components/HowItWorks";
import Pricing       from "@/components/Pricing";
import Integrations  from "@/components/Integrations";
import Testimonials  from "@/components/Testimonials";
import Blog          from "@/components/Blog";
import CTA           from "@/components/CTA";
import Footer        from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <LogoMarquee />
        <Features />
        <Stats />
        <HowItWorks />
        <Pricing />
        <Integrations />
        <Testimonials />
        <Blog />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
