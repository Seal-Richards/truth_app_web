"use client";

import Image from "next/image";
import { Button } from "@src/components/ui/button";
import { Cake, CircleUserRound, Hourglass, MapPin } from "lucide-react";
import { RiWhatsappFill } from "react-icons/ri";
import { FaAppStoreIos, FaGooglePlay } from "react-icons/fa6";


export default function Hero() {
   return (
      <section className="relative w-full overflow-hidden hero-root">
         {/* Gradient background */}
         <div className="absolute inset-0 z-0 hero-gradient" aria-hidden="true" />

         {/* Slanted teal background base */}
         <div className="absolute bottom-0 left-0 w-full h-[180px] lg:h-[180px] bg-[#22ab98] clip-slant z-0 rounded" />

         {/* Star / dotted vector behind the right side (kept behind content, high from bottom so it doesn't touch the slanted teal) */}
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
            {/* LEFT - untouched */}
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
               {/* Store Buttons */}
               <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-4">
                  {/* Google Play */}
                  <Button
                     variant="outline"
                     className="rounded-xl px-5 py-4 flex items-center gap-3 bg-white text-foreground shadow-md hover:translate-y-[-2px] transition-transform"
                  >
                     {/* Official Google Play logo */}
                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <g fill="none">
                           <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                           <path fill="currentColor" d="m12 13.414l2.947 2.947l-9.697 5.598a1.49 1.49 0 0 1-1.568-.041l-.108-.078zm-9-9L10.586 12L3 19.586zm13.74 4.26l3.51 2.027c1 .577 1 2.02 0 2.598l-3.51 2.027L13.414 12zM5.25 2.041l9.697 5.598L12 10.586L3.574 2.159a1.49 1.49 0 0 1 1.676-.118" />
                        </g>
                     </svg>

                     <span className="flex flex-col items-start text-sm">
                        <span className="font-medium">Google Play</span>
                     </span>
                  </Button>

                  {/* App Store */}
                  <Button
                     variant="outline"
                     className="rounded-xl px-5 py-4 flex items-center gap-3 bg-white text-foreground shadow-md hover:translate-y-[-2px] transition-transform"
                  >
                     {/* Official Apple logo */}
                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M3 17a1 1 0 0 1 0-2h10.5c1 0 2 2 1.5 2zm14 0a1 1 0 0 1 0-2h4a1 1 0 0 1 0 2zM12.633 3.501a1 1 0 0 1 1.734.998L7.46 16.495a1 1 0 0 1-1.734-.997zM4 18.5c.5-1 3.5-2 2.5-.28A853 853 0 0 1 4.867 21a1 1 0 0 1-1.734-.998zM9.133 4.499a1 1 0 1 1 1.734-.998L12.61 6.53a1 1 0 1 1-1.733.998zM13 11.5c-.898-1.5 0-4.5.716-3.004L20.366 20a1 1 0 0 1-1.733.998z" />
                     </svg>
                     <span className="flex flex-col items-start text-sm">
                        <span className="font-medium">App Store</span>
                     </span>
                  </Button>
               </div>

            </div>

            {/* RIGHT - phone + floating card + whatsapp */}
            <div className="relative flex justify-center lg:justify-end px-6 sm:px-0">
               {/* PHONE WRAPPER: all floating elements are positioned relative to this container
              This ensures the floating card + whatsapp stay "hugging" the phone on all screens. */}
               <div className="relative w-[260px] sm:w-[340px] md:w-[420px] lg:w-[520px]">
                  {/* Phone (kept as you had it) */}
                  <Image
                     src="/assets/phone-hero.png"
                     alt="App phone preview"
                     width={520}
                     height={680}
                     className="w-full h-auto relative z-20"
                     priority
                  />

                  {/* Floating Info Card - behind the phone (z lower than the phone)
                Positioned using small arbitrary offsets so it hugs the phone edge responsively */}
                  <div
                     className="
    absolute z-[10]
    left-[-14%] sm:left-[-12%] md:left-[-10%] lg:left-[-12%]
    top-[26%] sm:top-[24%] md:top-[22%] lg:top-[22%]
    w-[190px] sm:w-[200px] md:w-[220px]
    bg-white/95 backdrop-blur-md rounded-xl shadow-xl px-4 py-3
  "
                  >
                     {/* Avatar + Name row */}
                     <div className="flex items-center gap-2">
                        <Image
                           src="/assets/auth_avatar.jpg"
                           alt="avatar"
                           width={30}
                           height={30}
                           className="rounded-full object-cover"
                           priority
                        />
                        <p className="text-sm font-semibold text-foreground">Adebola Grace</p>
                     </div>

                     {/* List with icons */}
                     <ul className="mt-3 space-y-2">
                        <li className="flex items-center gap-2 text-xs text-[hsl(var(--muted-foreground))]">
                           <Cake className="h-4 w-4 shrink-0" />
                           <span>Thu, 11th Aug 2025</span>
                        </li>
                        <li className="flex items-center gap-2 text-xs text-[hsl(var(--muted-foreground))]">
                           <Hourglass className="h-4 w-4 shrink-0" />
                           <span>04:30 AM to 05:30 PM</span>
                        </li>
                        <li className="flex items-center gap-2 text-xs text-[hsl(var(--muted-foreground))]">
                           <MapPin className="h-4 w-4 shrink-0" />
                           <span>No 25, Street Hills, Ibadan</span>
                        </li>
                     </ul>
                  </div>
                  {/* WhatsApp pill - in front of the phone (higher z), hugging the right edge of the phone */}
                  <div
                     className="
                absolute z-[30]
                right-[-8%] sm:right-[-6%] md:right-[-6%] lg:right-[-6%]
                top-1/2 transform -translate-y-1/2
                flex items-center
              "
                  >
                     <button
                        className="hero-whatsapp inline-flex items-center gap-3 rounded-full px-4 py-2 shadow-2xl border-[3px] border-emerald-500 bg-white"
                        aria-label="Chat with us on WhatsApp"
                     >
                        <span className="bg-white rounded-full p-2 flex items-center justify-center">
                           <RiWhatsappFill className="h-5 w-5 text-[hsl(var(--primary))]" />
                        </span>
                        <span className="text-sm font-medium">Chat with us on WhatsApp</span>
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}
