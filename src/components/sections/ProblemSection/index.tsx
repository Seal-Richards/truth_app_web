"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@src/components/ui/button";
import { Icon } from "@iconify/react";
import { HiArrowUpRight } from "react-icons/hi2";

export default function ProblemSection() {
   return (
      <section
         className="relative w-full overflow-hidden"
         style={{
            backgroundColor: "hsl(var(--surface))",
            color: "hsl(var(--foreground))",
         }}
      >
         {/* Background string graphic - RIGHT */}
         <div
            className="absolute top-[65%] right-0 -translate-y-1/2 w-[600px] z-0 pointer-events-none animate-[pulse_1.6s_ease-in-out_1_forwards]"
            aria-hidden
         >
            <SvgLines />
         </div>

         {/* Background string graphic - LEFT (mirrored) */}
         <div
            className="absolute top-[65%] left-0 -translate-y-1/2 w-[600px] z-0 pointer-events-none scale-x-[-1] animate-[pulse_1.6s_ease-in-out_1_forwards]"
            aria-hidden
         >
            <SvgLines />
         </div>

         {/* Top content */}
         <div className="container mx-auto px-4 lg:px-12 pt-12">
            <div className="max-w-3xl mx-auto text-center">
               <div className="inline-block rounded-md px-4 py-1 mb-4 bg-teal-600">
                  <span className="text-sm font-medium text-white">PROBLEM</span>
               </div>

               <h2 className="font-bold mb-4 text-3xl sm:text-3xl lg:text-3xl">
                  Safety shouldn’t be a guessing game.
               </h2>

               <p className="mx-auto sm:text-[20px] text-[10px] text-muted-foreground">
                  The world is becoming increasingly unpredictable. Every day,
                  individuals and businesses face fraud, safety risks, and uncertainty
                  because there’s no simple way to verify people, vendors, or
                  environments. Loved ones are left vulnerable, transactions lack
                  transparency, and accountability is often missing. The absence of
                  trust costs not only money but also peace of mind and, at times,
                  lives.
               </p>
            </div>
         </div>

         {/* Card + Phone (always above both SVGs) */}
         <div className="relative z-10 mt-12">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-2 px-4 lg:px-16">
               {/* Card */}
               <div className="relative flex-1 w-full bg-white">
                  <div
                     className="relative h-auto rounded-2xl p-6 lg:p-10 shadow-md border-teal-700"
                     style={{ border: "2px solid" }}
                  >
                     <div className="mb-4">
                        <span className="inline-block text-xs font-semibold px-3 py-1 rounded-md bg-teal-600 text-white">
                           OUR SOLUTION
                        </span>
                     </div>

                     <div className="flex items-start gap-4 mb-6">
                        <div className="flex items-center justify-center rounded-full flex-shrink-0 text-teal-900">
                           <Icon icon="material-symbols:asterisk" width="48" height="48" />
                        </div>
                        <h3 className="text-2xl sm:text-3xl font-bold text-teal-800">
                           One App. <br /> Total Assurance.
                        </h3>
                     </div>

                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                        {[
                           "Verified agent visits with digital report",
                           "Real-time GPS tracking for travelers",
                           "Emergency alerts with instant escalation",
                           "Tiered subscriptions for every lifestyle",
                           "Multi-family support",
                           "Risk profiling and panic protocols",
                           "Admin dashboards for oversight",
                           "Downloadable Reports",
                        ].map((benefit, idx) => (
                           <div key={idx} className="flex items-start gap-3">
                              <div
                                 className="rounded-full flex items-center justify-center flex-shrink-0 bg-teal-600 text-white"
                                 style={{ width: 20, height: 20 }}
                              >
                                 <Icon icon="mdi:check" className="w-4 h-4" />
                              </div>
                              <p className="text-sm text-muted-foreground">{benefit}</p>
                           </div>
                        ))}
                     </div>

                     <Button
                        variant="default"
                        className="rounded-md px-6 py-6 shadow bg-teal-600 text-white flex items-center gap-2"
                     >
                        Explore Features
                        <HiArrowUpRight className="w-6 h-6" />
                     </Button>

                  </div>
               </div>

               {/* Phone */}
               <div className="relative flex-shrink-0 w-auto mt-10 lg:mt-0 lg:-ml-16">
                  <Image
                     src="/assets/phone-problem.png"
                     alt="phone mockup"
                     width={420}
                     height={720}
                     className="w-[260px] sm:w-[320px] lg:w-[400px] xl:w-[420px] h-auto drop-shadow-2xl"
                     priority
                  />
               </div>
            </div>
         </div>
      </section>
   );
}

function SvgLines() {
   return (
      <svg
         width="800"
         height="700"
         viewBox="0 0 800 700"
         fill="none"
         xmlns="http://www.w3.org/2000/svg"
         className="opacity-100"
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
