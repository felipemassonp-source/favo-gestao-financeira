import FadeInUp from "../components/FadeInUp";
import FAQ from "../components/FAQ";
import LeadCaptureForm from "../components/LeadCaptureForm";
import TrustBadges from "../components/TrustBadges";

export default function PerguntasFrequentes() {
  return (
    <div className="min-h-screen bg-[#FFFFF0] text-[#111827] pt-28 pb-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <FadeInUp>
          <FAQ />
        </FadeInUp>

        <div id="formulario-faq" className="py-20 border-t border-[#38183A]/15 mt-8">
          <FadeInUp>
            <LeadCaptureForm type="bpo" />
            <div className="mt-16">
              <TrustBadges />
            </div>
          </FadeInUp>
        </div>
      </div>
    </div>
  );
}
