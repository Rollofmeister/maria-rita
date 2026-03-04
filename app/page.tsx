import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { HeroSection } from "@/components/home/hero-section"
import { TrustSection } from "@/components/home/trust-section"
import { BenefitsSection } from "@/components/home/benefits-section"
import { TreatmentsPreview } from "@/components/home/treatments-preview"
import { TestimonialsSection } from "@/components/home/testimonials-section"
import { HowItWorksSection } from "@/components/home/how-it-works-section"
import { CTASection } from "@/components/home/cta-section"
import { ObjectionsSection } from "@/components/home/objections-section"

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <TrustSection />
        <BenefitsSection />
        <TreatmentsPreview />
        <ObjectionsSection />
        <TestimonialsSection />
        <HowItWorksSection />
        <CTASection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
