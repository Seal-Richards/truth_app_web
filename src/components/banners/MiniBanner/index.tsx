"use client";

import { Icon } from "@iconify/react";
import Image from "next/image";
import { IoShield } from "react-icons/io5";

export default function MiniBanner() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-r from-emerald-900 to-gray-900">
      {/* Inner container with max-width */}
      <div className="max-w-6xl mx-auto px-6 md:px-8 py-16 md:py-18 flex items-center justify-between relative">
        {/* Left Content */}
        <div className="flex items-center gap-2 md:gap-3">
          <div className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12">
            <Image
              src="/assets/sheild.svg"
              alt="Shield Icon"
              width={48}
              height={48}
              className="w-12 h-12"
              priority
            />
          </div>


          <h2
            className="text-white text-[35px] md:text-[35px] font-medium max-w-[48rem] md:max-w-none"
            style={{ lineHeight: "1" }}
          >
            Trusted by Families, Travelers,<br />and Communities globally
          </h2>

        </div>

        {/* Right Icon (Decorative) */}
        <div className="hidden sm:flex absolute right-2 md:right-5 opacity-40">
          <Image
            src="/assets/chat_icon.svg"
            alt="Shield Icon"
            width={150}
            height={150}
            priority
          />
        </div>
      </div>
    </section>
  );
}
