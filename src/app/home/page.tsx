
import Hero from "@src/components/Hero";
import ProblemSection from "@src/components/sections/ProblemSection";
import MiniBanner from "@src/components/banners/MiniBanner";
import DefaultLayout from "@src/layouts/DefaultLayout";
import ReviewSection from "@src/components/sections/ReviewSection";
import HowItWorks from "@src/components/sections/HowItWorks";
import PricingPlans from "@src/components/sections/PricingPlans";
import FAQSection from "@src/components/sections/Faq";


export default function HomePage() {
  return (
    <DefaultLayout>
      <Hero />
      <div id="features" >
        <ProblemSection />
      </div>

      <MiniBanner />
      <ReviewSection />
      <HowItWorks />
      <div id="pricing">
        <PricingPlans />
      </div>
      <div id="faq">
        <FAQSection />
      </div>
    </DefaultLayout>
  );
}
