import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/sections/Hero";
import Problems from "@/components/sections/Problems";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";
import PortfolioPreview from "@/components/sections/PortfolioPreview";
import AutomationPreview from "@/components/sections/AutomationPreview";
import Offers from "@/components/sections/Offers";
import Contact from "@/components/sections/Contact";

import MatrixSection from "@/components/ui/MatrixSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Problems />
        <Process />
        <Offers />

        {/* ✅ Matrix here (IA focus) */}
        <MatrixSection className="py-20 bg-white" columns={20} opacity={0.12}>
          <AutomationPreview />
        </MatrixSection>

        <PortfolioPreview />
        <FAQ />
        <Contact />

        {/* ✅ Matrix here (closing CTA premium) */}
        <MatrixSection className="py-0 bg-slate-50" columns={16} opacity={0.10}>
          <FinalCTA
            whatsappHref="https://wa.me/212679806345?text=Salam%2C%20je%20veux%20un%20devis%20pour%20mon%20business."
          />
        </MatrixSection>
      </main>
      <Footer />
    </>
  );
}
