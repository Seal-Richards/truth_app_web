"use client";

import { Icon } from "@iconify/react";
import { Button } from "@src/components/ui/button";

export default function MiniPublicBanner() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-r from-emerald-900 to-gray-900">
      {/* Responsive inner container */}
      <div
        className="
          max-w-3xl mx-auto px-6 md:px-8 py-10 md:py-12
          flex flex-col lg:flex-row items-center justify-between
          gap-8 text-center lg:text-left
        "
      >
        {/* Left Section */}
        <div
          className="
            flex flex-col sm:flex-row items-center lg:items-center
            gap-3 text-white
          "
        >
          <div className="flex items-center justify-center w-12 h-12 text-emerald-400 shrink-0">
            <Icon icon="material-symbols:asterisk" width="48" height="48" />
          </div>
          <p className="text-lg md:text-xl font-medium leading-snug">
            Download Truthhub app on
          </p>
        </div>

        {/* Right Section - Buttons */}
        <div
          className="
            flex flex-col sm:flex-row
            items-center justify-center lg:justify-start
            gap-4
          "
        >
          <Button
            variant="outline"
            className="
              rounded-xl px-5 py-4 flex items-center gap-3
              bg-white text-foreground shadow-md
              hover:translate-y-[-2px] transition-transform
            "
          >
            <Icon icon="logos:google-play-icon" className="w-5 h-5" />
            <span className="flex flex-col items-start text-sm">
              <span className="font-medium">Google Play</span>
            </span>
          </Button>

          <Button
            variant="outline"
            className="
              rounded-xl px-5 py-4 flex items-center gap-3
              bg-white text-foreground shadow-md
              hover:translate-y-[-2px] transition-transform
            "
          >
            <Icon icon="grommet-icons:apple-app-store" className="w-5 h-5" />
            <span className="flex flex-col items-start text-sm">
              <span className="font-medium">App Store</span>
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
}
