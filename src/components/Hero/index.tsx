"use client";

import Image from "next/image";
import { Button } from "@src/components/ui/button";
import { Cake, Hourglass, MapPin } from "lucide-react";
import { RiWhatsappFill } from "react-icons/ri";
import { Icon } from "@iconify/react";

export default function Hero() {
   return (
      <section className="relative w-full overflow-hidden hero-root">
         {/* Gradient background */}
         <div className="absolute inset-0 z-0 hero-gradient" aria-hidden="true" />

         {/* Slanted teal background base */}
         <div className="absolute bottom-0 left-0 w-full h-[180px] lg:h-[180px] bg-[#22ab98] clip-slant z-0 rounded" />

         {/* Star / dotted vector */}
         <div className="absolute z-5 right-4 lg:right-4 top-12 lg:top-5 pointer-events-none select-none">
            <Image
               src="/assets/hero_star_vector.svg"
               alt=""
               width={500}
               height={500}
               className="opacity-30 object-contain"
               priority
            />
         </div>

         <div className="container relative z-20 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center py-20 lg:py-28">
            {/* LEFT */}
            <div className="flex flex-col gap-6 text-center lg:text-left px-6 sm:px-0">
               <h1 className="leading-tight font-regular text-[2.25rem] text-white sm:text-4xl md:text-5xl lg:text-[56px] tracking-tight">
                  <span className="text-[hsl(var(--primary))]">Technology</span> That <br />
                  Protects, <span className="text-[hsl(var(--primary))]">Intelligence</span> <br />
                  That Empowers.
               </h1>

               <p className="text-[20px] text-[#fff] max-w-xl mx-auto lg:mx-0 font-regular">
                  Whether you're home alone, traveling abroad, <br /> or managing loved ones
                  remotely our app ensures safety, transparency, and real-time support.
               </p>

               {/* Store Buttons */}
               <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-4">
                  <Button
                     variant="outline"
                     className="rounded-xl px-5 py-4 flex items-center gap-3 bg-white text-foreground shadow-md hover:translate-y-[-2px] transition-transform"
                  >
                     <Icon icon="logos:google-play-icon" className="w-5 h-5" />
                     <span className="flex flex-col items-start text-sm">
                        <span className="font-medium">Google Play</span>
                     </span>
                  </Button>

                  <Button
                     variant="outline"
                     className="rounded-xl px-5 py-4 flex items-center gap-3 bg-white text-foreground shadow-md hover:translate-y-[-2px] transition-transform"
                  >
                     <Icon icon="grommet-icons:apple-app-store" className="w-5 h-5" />
                     <span className="flex flex-col items-start text-sm">
                        <span className="font-medium">App Store</span>
                     </span>
                  </Button>
               </div>
            </div>

            {/* RIGHT */}
            <div className="relative flex justify-center lg:justify-end px-6 sm:px-0">
               <div className="relative w-[260px] sm:w-[340px] md:w-[420px] lg:w-[520px]">
                  {/* Phone */}
                  <Image
                     src="/assets/phone-hero.png"
                     alt="App phone preview"
                     width={520}
                     height={680}
                     className="w-full h-auto relative z-20"
                     priority
                  />

                  {/* Floating Info Card */}
                  <div
                     className="
                        absolute z-[10]
                        left-[-14%] sm:left-[-12%] md:left-[-10%] lg:left-[-12%]
                        top-[26%] sm:top-[24%] md:top-[22%] lg:top-[22%]
                        w-[150px] sm:w-[200px] md:w-[220px]
                        bg-white/95 backdrop-blur-md rounded-xl shadow-xl 
                        px-3 py-2 sm:px-4 sm:py-3
                     "
                  >
                     {/* Avatar + Name */}
                     <div className="flex items-center gap-2">
                        <Image
                           src="/assets/auth_avatar.jpg"
                           alt="avatar"
                           width={28}
                           height={28}
                           className="rounded-full object-cover"
                           priority
                        />
                        <p className="text-xs sm:text-sm font-semibold text-foreground">
                           Adebola Grace
                        </p>
                     </div>

                     {/* Info List */}
                     <ul className="mt-2 sm:mt-3 space-y-1.5 sm:space-y-2">
                        <li className="flex items-center gap-2 text-[10px] sm:text-xs text-[hsl(var(--muted-foreground))]">
                           <Cake className="h-3 w-3 sm:h-4 sm:w-4 shrink-0" />
                           <span>Thu, 11th Aug 2025</span>
                        </li>
                        <li className="flex items-center gap-2 text-[10px] sm:text-xs text-[hsl(var(--muted-foreground))]">
                           <Hourglass className="h-3 w-3 sm:h-4 sm:w-4 shrink-0" />
                           <span>04:30 AM to 05:30 PM</span>
                        </li>
                        <li className="flex items-center gap-2 text-[10px] sm:text-xs text-[hsl(var(--muted-foreground))]">
                           <MapPin className="h-3 w-3 sm:h-4 sm:w-4 shrink-0" />
                           <span>No 25, Street Hills, Ibadan</span>
                        </li>
                     </ul>
                  </div>

                  {/* WhatsApp Pill */}
                  <div
                     className="
                        absolute z-[30]
                        right-[-8%] sm:right-[-6%] md:right-[-6%] lg:right-[-6%]
                        top-1/2 transform -translate-y-1/2
                        flex items-center sm:hidden
                     "
                  >
                     <button
                        className="
                           hero-whatsapp inline-flex items-center gap-2 sm:gap-3
                           rounded-full px-3 py-1.5 sm:px-4 sm:py-2
                           shadow-2xl border-[3px] border-emerald-500 bg-white
                        "
                        aria-label="Chat with us on WhatsApp"
                     >
                        <span className="bg-white rounded-full p-1 sm:p-2 flex items-center justify-center">
                           <RiWhatsappFill className="h-4 w-4 sm:h-5 sm:w-5 text-[hsl(var(--primary))]" />
                        </span>
                        <span className="text-xs sm:text-sm font-medium">
                           Chat with us on WhatsApp
                        </span>
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}
