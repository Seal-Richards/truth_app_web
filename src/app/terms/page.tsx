"use client";

import DynamicBanner from "@src/components/atoms/DynamicBanner";
import DynamicContents from "@src/components/atoms/DynamicContents";
import MiniPublicBanner from "@src/components/banners/MiniPublicBanner";
import FAQSection from "@src/components/sections/Faq";
import NewsLetterSection from "@src/components/sections/NewsLetterSection";
import DefaultLayout from "@src/layouts/DefaultLayout";
import { termsAndConditions } from "@src/constants/terms";

export default function TermsPage() {
  const { pageTitle, intro, sections } = termsAndConditions;

  return (
    <DefaultLayout>
      {/* Top Banner */}
      <DynamicBanner title={pageTitle} description="" showVectors />

      {/* Intro */}
      <DynamicContents heading={pageTitle} description={intro} />

      {/* Dynamic Sections with banner after 4th */}
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

      {/* FAQ + Newsletter */}
      <div id="faq">
        <FAQSection />
      </div>
      <NewsLetterSection />
    </DefaultLayout>
  );
}
