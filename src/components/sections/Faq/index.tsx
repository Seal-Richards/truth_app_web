"use client";

import { useState } from "react";
import { Icon } from "@iconify/react";
import { Button } from "@src/components/ui/button";

const faqData = {
  knocking: [
    {
      question: "What is the Knocking Service?",
      answer:
        "The TruthHub Knocking Service is a welfare and safety visit solution designed for individuals with elderly, vulnerable, or dependent loved ones as well as corporate organizations who have deployed staff to high risk locations. Our trained field agents visit the person's location to ensure their safety and well-being.",
    },
    {
      question: "Who can use the Knocking Service?",
      answer:
        "It is suitable for individuals, families, and organizations that need peace of mind and regular welfare checks.",
    },
    {
      question: "How does it work?",
      answer:
        "Once subscribed, our team will schedule visits at agreed intervals and provide you with real-time updates via the TruthHub app.",
    },
  ],
  checkin: [
    {
      question: "What is the Check-In Service?",
      answer:
        "The TruthHub Check-In Service allows regular digital welfare checks through our app, ensuring the safety of your loved ones without needing physical visits.",
    },
    {
      question: "How often are check-ins done?",
      answer: "You can schedule check-ins as frequently as needed, from daily to weekly.",
    },
  ],
};

export default function FAQSection() {
  const [activeTab, setActiveTab] = useState<"knocking" | "checkin">("knocking");
  const [selectedIndex, setSelectedIndex] = useState(0);

  const currentFAQs = faqData[activeTab];

  return (
    <section className="w-full bg-white px-4 md:px-8 lg:px-16 py-12 flex flex-col items-center">
      {/* Top Label */}
      <div className="mb-3">
        <span className="px-4 py-1 bg-primary text-white text-sm rounded-md font-medium uppercase tracking-wide">
          Frequently Asked Questions
        </span>
      </div>

      {/* Heading */}
      <h2 className="text-center text-2xl md:text-3xl font-bold mb-6">
        <span className="text-primary">Got Questions?</span> We’ve Got Answers.
      </h2>

      {/* Toggle Buttons */}
      <div className="flex flex-wrap gap-2 justify-center mb-10">
        <button
          onClick={() => {
            setActiveTab("knocking");
            setSelectedIndex(0);
          }}
          className={`px-5 py-2 rounded-md font-medium border transition ${
            activeTab === "knocking"
              ? "bg-primary text-white border-primary"
              : "bg-white text-primary border-primary"
          }`}
        >
          Knocking Service
        </button>
        <button
          onClick={() => {
            setActiveTab("checkin");
            setSelectedIndex(0);
          }}
          className={`px-5 py-2 rounded-md font-medium border transition ${
            activeTab === "checkin"
              ? "bg-primary text-white border-primary"
              :"bg-white text-primary border-primary"
          }`}
        >
          Check-In Service
        </button>
      </div>

      {/* FAQ & Answers */}
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-6 border rounded-xl p-4 md:p-6">
        {/* FAQs */}
        <div className="flex flex-col">
          <div className="flex items-center gap-2 mb-3">
            <Icon icon="mdi:asterisk" className="text-emerald-600 text-xl" />
            <h3 className="text-lg font-semibold">FAQs</h3>
          </div>
          <div className="flex flex-col gap-2 max-h-64 overflow-y-auto pr-1 scrollbar-thin">
            {currentFAQs.map((faq, index) => (
              <button
                key={index}
                onClick={() => setSelectedIndex(index)}
                className={`text-left px-4 py-3 rounded-lg border transition ${
                  selectedIndex === index
                    ? "bg-emerald-900 text-white border-emerald-900"
                    : "bg-white text-gray-800 border-gray-200 hover:border-emerald-600"
                }`}
              >
                {faq.question}
              </button>
            ))}
          </div>
        </div>

        {/* Answers */}
        <div className="flex flex-col">
          <div className="flex items-center gap-2 mb-3">
            <Icon icon="mdi:asterisk" className="text-emerald-600 text-xl" />
            <h3 className="text-lg font-semibold">Answers</h3>
          </div>
          <div className="bg-emerald-900 text-white p-5 rounded-lg leading-relaxed max-h-64 overflow-y-auto scrollbar-thin">
            {currentFAQs[selectedIndex]?.answer}
          </div>
        </div>
      </div>

      {/* Footer Section */}
     
    </section>
  );
}
