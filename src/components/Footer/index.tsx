// src/components/Footer/index.tsx
"use client";

import { Input } from "@src/components/ui/input";
import { Button } from "@src/components/ui/button";
import { Icon } from "@iconify/react";
import Image from "next/image";

export default function Footer() {
   return (
      <>
         <section className="w-full bg-white px-4 md:px-8 lg:px-16 py-12 flex flex-col items-center">
            <div className="mt-16 text-center max-w-2xl">
               <h3 className="text-3xl font-semibold mb-2">Your Safety, Your Way.</h3>
               <p className="text-gray-600 mb-4">
                  Download TruthHub app and take control of your peace of mind, whether
                  at home or on the move.
               </p>
               <div className="flex justify-center gap-3 flex-wrap">
                  <a
                     href="#"
                     className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg"
                  >
                     <Icon icon="logos:google-play-icon" className="text-xl" />
                     <span>Google Play</span>
                  </a>
                  <a
                     href="#"
                     className="flex items-center gap-2 bg-emerald-500 text-white px-4 py-2 rounded-lg"
                  >
                     <Icon icon="grommet-icons:apple-app-store" className="w-5 h-5" />
                     <span>App Store</span>
                  </a>
               </div>
            </div>
         </section>


         <footer className="bg-[#132C28] text-white px-6 sm:px-10 lg:px-20 py-10">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-10">
               {/* Left Section */}
               <div className="flex flex-col gap-6 max-w-md">
                  {/* Logo */}
                  <div className="flex items-center gap-2">
                     {/* <Image
            src="/assets/truthhub_icon.png"
            alt="Truth Hub Logo"
            width={50}
            height={50}
            priority
            className="p-2"
          /> */}
                     <Icon icon="mdi:hexagon-outline" className="w-8 h-8 text-[#4AE2C2]" />
                     <span className="text-xl font-bold">TRUTH HUB</span>
                  </div>

                  {/* Tagline */}
                  <p className="text-sm text-gray-300 leading-relaxed">
                     Stay safe and connected anywhere, anytime with real-time support and transparency.
                  </p>

                  {/* App Store Buttons */}
                  <div className="flex gap-3">
                     <Button
                        variant="outline"
                        className="bg-white text-black rounded-lg flex items-center gap-2 hover:bg-gray-100"
                     >
                        <Icon icon="logos:google-play-icon" className="w-5 h-5" />
                        Google Play
                     </Button>

                     <Button
                        variant="outline"
                        className="bg-white text-black rounded-lg flex items-center gap-2 hover:bg-gray-100"
                     >
                        <Icon icon="grommet-icons:apple-app-store" className="w-5 h-5" />
                        App Store
                     </Button>
                  </div>
               </div>

               {/* Right Section */}
               <div className="flex-1 flex flex-col justify-between gap-10">
                  {/* Newsletter */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                     <div className="flex items-center gap-2">
                        <Icon icon="dashicons:email-alt" className="w-6 h-6 text-yellow-400" />
                        <span className="font-medium">Join our Newsletter</span>
                     </div>
                     <div className="flex w-full sm:w-auto gap-2">
                        <Input
                           type="email"
                           placeholder="Enter your mail address"
                           className="bg-[#1D3C38] border-none text-white placeholder-gray-400 w-full sm:w-72"
                        />
                        <Button className="bg-[#2ADABF] hover:bg-[#21bfa7] text-white">
                           Subscribe
                        </Button>
                     </div>
                  </div>

                  {/* Links */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 text-sm text-gray-300">
                     <div className="flex flex-col gap-2">
                        <a href="#">About</a>
                        <a href="#">Features</a>
                        <a href="#">How it works</a>
                     </div>
                     <div className="flex flex-col gap-2">
                        <a href="#">Pricing</a>
                        <a href="#">FAQs</a>
                        <a href="#">Blog</a>
                     </div>
                     <div className="flex flex-col gap-2">
                        <a href="#">Terms</a>
                        <a href="#">Privacy</a>
                     </div>
                  </div>
               </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-600 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
               <p>©TruthHub 2025, All Rights Reserved.</p>
               <div className="flex gap-4">
                  <a href="#">
                     <Icon icon="streamline-logos:facebook-logo-2-block" className="w-5 h-5" />
                  </a>
                  <a href="#">
                     <Icon icon="mdi:linkedin" className="w-5 h-5" />
                  </a>
                  <a href="#">
                     <Icon icon="fa7-brands:square-x-twitter" className="w-5 h-5" />
                  </a>
               </div>
            </div>
         </footer>
      </>

   );
}
