"use client";

import React from "react";
import { Separator } from "@src/components/ui/separator";
import { ArrowDownRight } from "lucide-react";

export default function StatementsSection() {
  const statements = [
    {
      tag: "ABOUT US",
      title: "Our Story",
      description:
        "Life in Nigeria can be unpredictable, but your safety and your family’s wellbeing shouldn’t be in doubt, that’s why we built TruthHub. A hub of innovative safety and trust solutions designed to keep you and your loved ones protected.",
    },
    {
      tag: "VISION STATEMENT",
      title: "Our Vision",
      description:
        "To become the global leading force in personal and data safety, security and trust.",
    },
    {
      tag: "MISSION STATEMENT",
      title: "Our Mission",
      description:
        "At TruthHub, our mission is to safeguard people and institutions across Africa and beyond by providing advanced, technology driven security and safety services grounded in innovation, transparency, and truth. We will provide our clients and our communities with the trust and confidence they need to go about their daily activities with absolute assurance.",
    },
  ];

  return (
    <section className="w-full py-16 px-4">
      <div className="max-w-5xl mx-auto space-y-10">
        {statements.map((item, idx) => (
          <div key={idx} className="space-y-3">
            {/* Tag */}
            <div>
              <span className="inline-block text-xs font-semibold bg-[#22ab98] text-white px-3 py-1 rounded-md">
                {item.tag}
              </span>
            </div>

            {/* Grid layout: title/arrow left — description right */}
            <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-6 items-start">
              {/* Left: title + arrow */}
              <div className="flex items-center gap-2">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
                  {item.title}
                </h3>
                <ArrowDownRight className="text-[#22ab98] w-6 h-6 flex-shrink-0" />
              </div>

              {/* Right: description */}
              <p className="text-muted-foreground text-[15px] sm:text-base leading-relaxed">
                {item.description}
              </p>
            </div>

            {/* Divider */}
            {idx !== statements.length - 1 && (
              <Separator className="bg-gray-200 mt-6" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
