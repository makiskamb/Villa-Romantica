import { HeroSection } from "../components/sections/HeroSection";
import { AboutSection } from "../components/sections/AboutSection";
import { QuoteBanner } from "../components/sections/QuoteBanner";
import { TestimonialsSection } from "../components/sections/TestimonialsSection";

export function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <QuoteBanner />
      <TestimonialsSection />
    </main>
  );
}
