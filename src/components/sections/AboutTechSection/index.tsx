"use client";

import React from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";

export default function AboutTechSection() {
   return (
      <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#f8fdfa] to-[#eefaf7] py-6 mt-4">
         {/* Background SVG Lines */}
         <div
            className="absolute top-1/2 right-0 -translate-y-1/2 w-[700px] z-0 pointer-events-none opacity-100"
            aria-hidden
         >
            <SvgLines />
         </div>
         <div
            className="absolute top-1/2 left-0 -translate-y-1/2 w-[700px] z-0 pointer-events-none opacity-100 scale-x-[-1]"
            aria-hidden
         >
            <SvgLines />
         </div>

         {/* Content Section */}
         <div className="relative z-10 mx-auto max-w-6xl px-10 py-20 bg-white/60 backdrop-blur-md border border-[#c7ebe3] rounded-2xl shadow-sm flex flex-col md:flex-row items-center justify-between">
            {/* Left Text */}
            <div className="flex flex-col items-start gap-3 text-left w-full md:w-1/2">
               <div className="flex items-center gap-2">
                  <Icon
                     icon="material-symbols:asterisk"
                     className="text-accent"
                     width={28}
                     height={28}
                  />
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-accent">
                     Technology That Protects.
                     <br />
                     Intelligence That Empowers
                  </h2>
               </div>
            </div>

            {/* Right Image */}
            <div className="mt-8 md:mt-0 w-full md:w-[50%] flex justify-center">
               <div className="rounded-xl overflow-hidden shadow-lg border border-[#22ab98]/20">
                  <Image
                     src="/assets/tech-image.png"
                     alt="Technology illustration"
                     width={500}
                     height={500}
                     className="object-cover w-auto h-auto"
                     priority
                  />
               </div>
            </div>
         </div>

      </section>
   );
}

/* ---------------- SVG LINES BACKGROUND ---------------- */
function SvgLines() {
   return (
      <svg
         width="800"
         height="700"
         viewBox="0 0 800 700"
         fill="none"
         xmlns="http://www.w3.org/2000/svg"
      >
         <g filter="url(#filter0_d_3097_5436)">
            <path
               d="M40 373.419C556.925 373.419 556.925 705.838 1073.85 705.838M40 373.419C556.925 373.419 556.925 456.523 1073.85 456.523M40 373.419C556.925 373.419 556.925 41 1073.85 41M40 373.419C556.925 373.419 556.925 124.105 1073.85 124.105M40 373.419H1073.85M40 373.419C556.925 373.419 556.925 622.733 1073.85 622.733M40 373.419C556.925 373.419 556.925 539.628 1073.85 539.628M40 373.419C556.925 373.419 556.925 290.314 1073.85 290.314M40 373.419C556.925 373.419 556.925 207.209 1073.85 207.209"
               stroke="url(#paint0_linear_3097_5436)"
               strokeOpacity="0.7"
               strokeLinecap="round"
               strokeLinejoin="bevel"
               shapeRendering="crispEdges"
            />
         </g>
         <defs>
            <filter
               id="filter0_d_3097_5436"
               x="0"
               y="0.5"
               width="1114.35"
               height="745.837"
               filterUnits="userSpaceOnUse"
               colorInterpolationFilters="sRGB"
            >
               <feFlood floodOpacity="0" result="BackgroundImageFix" />
               <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
               />
               <feOffset />
               <feGaussianBlur stdDeviation="20" />
               <feComposite in2="hardAlpha" operator="out" />
               <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.133333 0 0 0 0 0.670588 0 0 0 0 0.596078 0 0 0 1 0"
               />
               <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_3097_5436"
               />
               <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_3097_5436"
                  result="shape"
               />
            </filter>
            <linearGradient
               id="paint0_linear_3097_5436"
               x1="40"
               y1="373.419"
               x2="1073.85"
               y2="373.419"
               gradientUnits="userSpaceOnUse"
            >
               <stop stopColor="#A8D7D1" />
               <stop offset="1" stopColor="#22AB98" />
            </linearGradient>
         </defs>
      </svg>
   );
}
