"use client";

import React from "react";
import { Card } from "@src/components/ui/card";
import { Icon } from "@iconify/react";

export default function HowItWorks() {
   return (
      <section className="w-full bg-[#E6F8F8] py-16 px-4 sm:px-8 lg:px-16">
         <div className="max-w-6xl mx-auto text-center">
            {/* Top label */}
            <span className="inline-block mb-4 px-4 py-1 rounded-md bg-primary text-white text-xs sm:text-sm font-medium">
               HOW IT WORKS
            </span>

            {/* Title */}
            <h2 className="text-[40px] sm:text-[40px] lg:text-[40px] font-bold text-accent mb-10">
               Simple Steps to <span className="text-primary">Stay Secure.</span>
            </h2>

            <div className="bg-gradient-to-r from-emerald-600/80 via-emerald-800 to-emerald-900/80 text-white rounded-2xl p-6 sm:p-10 shadow-lg relative overflow-visible">
               {/* === First Row (Download & Preferences) === */}
               <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-20 relative">
                  <div className="relative flex flex-col items-center">
                     <Card className="px-6 py-3 bg-white text-gray-800 rounded-xl shadow-sm text-sm sm:text-base font-medium z-10">
                        Download & Onboard
                     </Card>

                     {/* Mobile vertical line → Onboard → Preferences */}
                     <div className="sm:hidden absolute left-1/2 bottom-0 translate-x-[-50%] translate-y-full">
                        <div className="w-0.5 h-6 bg-muted" />
                     </div>
                  </div>

                  {/* Horizontal connector (desktop) */}
                  <div className="hidden sm:flex items-center">
                     <div className="h-0.5 w-16 bg-muted" />
                  </div>

                  <div className="relative flex flex-col items-center">
                     <Card className="px-6 py-3 bg-primary text-white rounded-xl shadow-sm text-sm sm:text-base font-medium">
                        + Set Preferences (Knocks, Trips, Alerts)
                     </Card>

                     {/* Mobile vertical line → Preferences → Track */}
                     <div className="sm:hidden absolute left-1/2 bottom-0 translate-x-[-50%] translate-y-full">
                        <div className="w-0.5 h-20 bg-muted" />
                     </div>

                     {/* Solid L-connector: down then left (desktop only) */}
                     <div className="hidden lg:block absolute top-full left-1/2 transform -translate-x-1/2">
                        {/* Vertical line */}
                        <div className="w-0.5 h-11 bg-muted mx-auto" />
                        {/* Horizontal line leftward into Track */}
                        <div className="h-0.5 w-[455px] bg-muted -ml-[450px]" />
                        {/* Vertical drop into Track */}
                        <div className="absolute left-0 top-full -ml-[450px]">
                           <div className="w-0.5 h-8 bg-muted" />
                        </div>
                     </div>
                  </div>
               </div>

               {/* === Second Row (Main Flow) === */}
               <div className="flex flex-col sm:flex-row justify-center lg:justify-center items-center gap-6 mb-10 relative">
                  {["Track", "Verify", "Communicate", "Respond Instantly When Needed"].map(
                     (step, i, arr) => (
                        <div key={step} className="relative flex flex-col items-center">
                           <Card className="px-6 py-3 bg-transparent text-white border border-muted rounded-xl text-sm sm:text-base font-medium z-10">
                              {step}
                           </Card>

                           {/* Horizontal connectors (desktop, centered to card middle) */}
                           {i < arr.length - 1 && (
                              <div className="hidden sm:flex absolute top-1/2 right-0 translate-x-full">
                                 <div className="h-0.5 w-6 bg-muted" />
                              </div>
                           )}

                           {/* Vertical connectors (mobile stacked, centered bottom → top) */}
                           {i < arr.length - 1 && (
                              <div className="sm:hidden absolute left-1/2 bottom-0 translate-x-[-50%] translate-y-full">
                                 <div className="w-0.5 h-6 bg-muted" />
                              </div>
                           )}
                        </div>
                     )
                  )}
               </div>

               {/* Store buttons */}
               <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                  <button className="flex items-center gap-2 px-6 py-3 bg-gray-900 border border-gray-700 rounded-xl text-white font-medium hover:bg-gray-800 transition">
                     <Icon icon="logos:google-play-icon" className="w-5 h-5" />
                     Google Play
                  </button>
                  <button className="flex items-center gap-2 px-6 py-3 bg-gray-900 border border-gray-700 rounded-xl text-white font-medium hover:bg-gray-800 transition">
                     <Icon icon="grommet-icons:apple-app-store" className="w-5 h-5" />
                     App Store
                  </button>
               </div>
            </div>
         </div>
      </section>
   );
}
