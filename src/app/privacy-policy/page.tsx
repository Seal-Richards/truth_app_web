"use client";

import DefaultLayout from "@src/layouts/DefaultLayout";
import DynamicBanner from "@src/components/atoms/DynamicBanner";
import MiniPublicBanner from "@src/components/banners/MiniPublicBanner";
import FAQSection from "@src/components/sections/Faq";
import NewsLetterSection from "@src/components/sections/NewsLetterSection";
import DynamicContents from "@src/components/atoms/DynamicContents";
import { privacyPolicy } from "@src/constants/privacy";

export default function PrivacyPolicyPage() {
  const { title, effectiveDate, lastUpdated, overview, sections } = privacyPolicy;

  return (
    <DefaultLayout>
      {/* Top Banner */}
      <DynamicBanner title={title} description="" showVectors />

      {/* Overview Section */}
      <DynamicContents
        heading={title}
        description={`${effectiveDate}\n${lastUpdated}\n\n${overview}`}
      />

      {/* Dynamic Policy Sections with Banner after 4th */}
      {sections.map((section, index) => (
        <div key={index}>
          <DynamicContents
            number={section.number}
            heading={section.heading}
            description={section.description}
          />
          {/* Show banner after the 4th section */}
          {index === 3 && <MiniPublicBanner />}
        </div>
      ))}

      {/* FAQ + Newsletter remain unchanged */}
      <div id="faq">
        <FAQSection />
      </div>
      <NewsLetterSection />
    </DefaultLayout>
  );
}
