
import Hero from "@src/components/Hero";
import ProblemSection from "@src/components/sections/ProblemSection";
import DefaultLayout from "@src/layouts/DefaultLayout";


export default function HomePage() {
  return (
    <DefaultLayout>
      <Hero />
      <ProblemSection />
    </DefaultLayout>
  );
}
