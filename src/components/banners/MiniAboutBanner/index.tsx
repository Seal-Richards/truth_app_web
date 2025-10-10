"use client";

import { ArrowRight } from "lucide-react";

import { Icon } from "@iconify/react";

export default function MiniAboutBanner() {
  const values = [
    "Trust",
    "Reliability",
    "Uniqueness",
    "Technology and Innovation",
    "Heritage",
  ];

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-r from-emerald-900 to-gray-900 py-6">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        {/* Left Content */}
        <div className="flex items-center gap-2 md:gap-3">
          <div className="flex items-center justify-center rounded-full flex-shrink-0 text-primary">
            <Icon icon="material-symbols:asterisk" width="48" height="48" />
          </div>
          {/* Header */}
          <h2 className="text-white text-lg md:text-xl font-semibold mb-4">
            TruthHub Core Values
          </h2>
        </div>
        {/* Auto-scrolling container */}
        <div className="relative overflow-hidden">
          <div className="flex items-center space-x-3 animate-marquee whitespace-nowrap">
            {[...values, ...values].map((value, index) => (
              <div
                key={index}
                className="flex items-center gap-2 bg-emerald-700/80 text-white font-medium px-5 py-2 rounded-full flex-shrink-0 hover:bg-emerald-600 transition-colors duration-200"
              >
                <ArrowRight className="w-4 h-4 text-emerald-200" />
                <span>{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          display: inline-flex;
          animation: marquee 25s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
