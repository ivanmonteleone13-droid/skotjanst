import Hero from "@/components/Hero";
import CraftStory from "@/components/CraftStory";
import ServicesSection from "@/components/ServicesSection";
import Process from "@/components/Process";
import ReviewsCarousel from "@/components/ReviewsCarousel";
import FAQ from "@/components/FAQ";
import ContactSection from "@/components/ContactSection";
import FinalCTA from "@/components/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <CraftStory />
      <ServicesSection />
      <Process />
      <ReviewsCarousel />
      <FAQ />
      <ContactSection />
      <FinalCTA />
    </>
  );
}
