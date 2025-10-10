"use client";

import { Icon } from "@iconify/react";
import { IoShield } from "react-icons/io5";

export default function MiniBanner() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-r from-emerald-900 to-gray-900">
      {/* Inner container with max-width */}
      <div className="max-w-4xl mx-auto px-6 md:px-8 py-6 md:py-8 flex items-center justify-between relative">
        {/* Left Content */}
        <div className="flex items-center gap-2 md:gap-3">
          <div className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12">
            <IoShield className="w-12 h-12 text-green-300" />
          </div>
          <p className="text-white text-base md:text-lg font-medium leading-snug max-w-[18rem] md:max-w-none">
            Trusted by Families, Travelers, and Communities globally
          </p>
        </div>

        {/* Right Icon (Decorative) */}
        <div className="hidden sm:flex absolute right-2 md:right-5 opacity-20">
          <Icon
            icon="tabler:message-dots"
            className="w-20 h-20 md:w-28 md:h-28 text-emerald-200"
          />
        </div>
      </div>
    </section>
  );
}
