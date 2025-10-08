
import { Icon } from "@iconify/react";
import DynamicBanner from "@src/components/atoms/DynamicBanner";
import MiniAboutBanner from "@src/components/banners/MiniAboutBanner";
import AboutTechSection from "@src/components/sections/AboutTechSection";
import FAQSection from "@src/components/sections/Faq";
import NewsLetterSection from "@src/components/sections/NewsLetterSection";
import OurServices from "@src/components/sections/OurServices";
import OurTeam from "@src/components/sections/OurTeam";
import StatementsSection from "@src/components/sections/Statements";
import DefaultLayout from "@src/layouts/DefaultLayout";


export default function AboutPage() {
  return (
    <DefaultLayout>
      <DynamicBanner
        highlight="Welcome"
        title="to TruthHub"
        description="At TruthHub, we are building innovative solutions designed to protect, empower, and give peace of mind in everyday life. Our mission is simple: to create safer communities through technology, intelligence, and trust."
        buttons={[
          {
            label: "Google Play",
            icon: <Icon icon="logos:google-play-icon" className="w-5 h-5" />,
            className: "bg-white text-foreground shadow-md hover:translate-y-[-2px] transition-transform",
          },
          {
            label: "App Store",
            icon: <Icon icon="grommet-icons:apple-app-store" className="w-5 h-5" />,
            className: "bg-white text-foreground shadow-md hover:translate-y-[-2px] transition-transform",
          },
        ]}
      />
      <AboutTechSection />
      <StatementsSection />
      <MiniAboutBanner />
      <OurTeam />
      <OurServices />
      <FAQSection />
      <NewsLetterSection />
    </DefaultLayout>
  );
}
