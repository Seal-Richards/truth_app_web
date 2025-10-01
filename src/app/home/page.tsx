
import Hero from "@src/components/Hero";
import ProblemSection from "@src/components/sections/ProblemSection";
import MiniBanner from "@src/components/banners/MiniBanner";
import DefaultLayout from "@src/layouts/DefaultLayout";
import ReviewSection from "@src/components/sections/ReviewSection";
import HowItWorks from "@src/components/sections/HowItWorks";


export default function HomePage() {
  return (
    <DefaultLayout>
      <Hero />
      <ProblemSection />
      <MiniBanner />
      <ReviewSection />
      <HowItWorks />
    </DefaultLayout>
  );
}
