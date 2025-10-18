import DynamicBanner from "@src/components/atoms/DynamicBanner";
import DynamicContents from "@src/components/atoms/DynamicContents";
import MiniPublicBanner from "@src/components/banners/MiniPublicBanner";
import FAQSection from "@src/components/sections/Faq";
import NewsLetterSection from "@src/components/sections/NewsLetterSection";
import DefaultLayout from "@src/layouts/DefaultLayout";

import { termsAndConditions } from "@src/constants/terms";

export default function TermsPage() {
  return (
    <DefaultLayout>
      <DynamicBanner
        title={termsAndConditions.pageTitle}
        description=""
        showVectors={true}
      />

      {/* Intro */}
      <DynamicContents
        heading={termsAndConditions.pageTitle}
        description={termsAndConditions.intro}
      />

      {/* Dynamic Sections */}
      {termsAndConditions.sections.map((section) => (
        <DynamicContents
          key={section.number}
          number={section.number}
          heading={section.heading}
          description={section.description}
        />
      ))}

      <MiniPublicBanner />
      <div id="faq">
        <FAQSection />
      </div>
      <NewsLetterSection />
    </DefaultLayout>
  );
}
