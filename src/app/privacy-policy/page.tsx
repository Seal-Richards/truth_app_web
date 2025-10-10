// src/app/(public)/policy/page.tsx (or your equivalent path)
"use client";

import DefaultLayout from "@src/layouts/DefaultLayout";
import DynamicBanner from "@src/components/atoms/DynamicBanner";
import MiniPublicBanner from "@src/components/banners/MiniPublicBanner";
import FAQSection from "@src/components/sections/Faq";
import NewsLetterSection from "@src/components/sections/NewsLetterSection";
import DynamicContents from "@src/components/atoms/DynamicContents";

export default function PolicyPage() {
  return (
    <DefaultLayout>
      {/* Top Banner */}
      <DynamicBanner
        title="Privacy Policy"
        description=""
        showVectors={true}
      />



      {/* Policy Content */}

      {/* Main Privacy Policy Overview */}
      <DynamicContents
        heading="PRIVACY POLICY"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
      />

      {/* Subsections */}
      <DynamicContents
        number={1}
        heading="Privacy Heading"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
      />

      <DynamicContents
        number={2}
        heading="Data Collection"
        description="We may collect personal information such as your name, email address, and contact details to provide better user experiences and improve our services."
      />

      {/* Small Public Banner */}
      <MiniPublicBanner />


      <DynamicContents
        number={3}
        heading="Data Protection"
        description="Your data security is important to us. We implement industry-standard measures to protect your information against unauthorized access or disclosure."
      />

      <DynamicContents
        number={4}
        heading="Data Protection"
        description="Your data security is important to us. We implement industry-standard measures to protect your information against unauthorized access or disclosure."
      />


      {/* FAQ and Newsletter remain unchanged */}
      <div id="faq">
        <FAQSection />
      </div>
      <NewsLetterSection />
    </DefaultLayout>
  );
}
