"use client";

import Image from "next/image";
import { Badge } from "@src/components/ui/badge";
import { Icon } from "@iconify/react";

export default function OurServices() {
  return (
    <section className="relative overflow-hidden bg-[#0C1A17] text-white py-20 px-4 md:px-8 lg:px-16">
      {/* Decorative Backgrounds */}
      {/* Tools icon at top-left */}
      <Image
        src="/assets/tools_icon_vector.svg"
        alt="decorative tools icon"
        width={300}
        height={300}
        className="absolute top-0 left-0 w-40 md:w-56 opacity-20 pointer-events-none select-none"
      />

      {/* Hero star top-right */}
      <Image
        src="/assets/hero_star_vector.svg"
        alt="decorative star top right"
        width={300}
        height={300}
        className="absolute top-10 right-0 w-32 md:w-56 opacity-30 pointer-events-none select-none"
      />

      {/* Hero star bottom-left */}
      <Image
        src="/assets/hero_star_vector.svg"
        alt="decorative star bottom left"
        width={300}
        height={300}
        className="absolute bottom-0 left-0 w-32 md:w-56 opacity-30 pointer-events-none select-none"
      />

      {/* Section Header */}
      <div className="relative z-10 text-center max-w-3xl mx-auto">
        <Badge className="bg-emerald-600/80 text-white text-xs tracking-wide mb-4 rounded-full px-4 py-1 uppercase">
          Services / Products
        </Badge>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
        <p className="text-gray-300 leading-relaxed text-sm md:text-base">
          Whether you’re traveling, caring for family, or running a business,
          TruthHub delivers{" "}
          <span className="text-white font-semibold">
            protection, accountability,
          </span>{" "}
          and peace of mind every step of the way.
        </p>
      </div>

      {/* Services Grid */}
      <div className="relative z-10 mt-14 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* Service 1 */}
        <div className="border border-gray-700/50 rounded-2xl p-6 bg-transparent hover:bg-white/5 transition">
          <div className="flex items-start gap-2 mb-3">
            <Icon
              icon="mdi:arrow-right"
              className="text-emerald-400 mt-1 text-xl flex-shrink-0"
            />
            <h3 className="font-semibold text-lg">TruthHub Check-In</h3>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            Travel with confidence, log your routes, check in at destinations,
            and instantly alert your loved ones and authorized security agencies
            in case of emergencies.
          </p>
        </div>

        {/* Service 2 */}
        <div className="border border-gray-700/50 rounded-2xl p-6 bg-transparent hover:bg-white/5 transition">
          <div className="flex items-start gap-2 mb-3">
            <Icon
              icon="mdi:arrow-right"
              className="text-emerald-400 mt-1 text-xl flex-shrink-0"
            />
            <h3 className="font-semibold text-lg">TruthHub Knocking Service</h3>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            Give your loved ones the care they deserve. Our trained Contact
            Representatives provide scheduled onsite visits to the elderly,
            vulnerable, or those living alone, while sending you detailed reports
            after each visit.
          </p>
        </div>

        {/* Divider line */}
        <div className="hidden md:block md:col-span-2 border-t border-gray-700/40"></div>

        {/* Service 3 */}
        <div className="border border-gray-700/50 rounded-2xl p-6 bg-transparent hover:bg-white/5 transition relative">
          <div className="flex items-start gap-2 mb-3">
            <Icon
              icon="mdi:arrow-right"
              className="text-emerald-400 mt-1 text-xl flex-shrink-0"
            />
            <h3 className="font-semibold text-lg flex items-center gap-2">
              Verified by TruthHub
              <Badge className="text-[10px] bg-emerald-600/70 text-white rounded-full">
                Coming soon
              </Badge>
            </h3>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            A trusted authentication system that confirms the identity of
            individuals, businesses, and information sources—giving you peace of
            mind in every interaction.
          </p>
        </div>

        {/* Service 4 */}
        <div className="border border-gray-700/50 rounded-2xl p-6 bg-transparent hover:bg-white/5 transition relative">
          <div className="flex items-start gap-2 mb-3">
            <Icon
              icon="mdi:arrow-right"
              className="text-emerald-400 mt-1 text-xl flex-shrink-0"
            />
            <h3 className="font-semibold text-lg flex items-center gap-2">
              Secured by TruthHub
              <Badge className="text-[10px] bg-emerald-600/70 text-white rounded-full">
                Coming soon
              </Badge>
            </h3>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            An advanced protection layer designed to assure hotel/shortlet
            patrons of the safety of the establishment and to also keep touch
            with them while in that establishment, ensuring safety at all times.
          </p>
        </div>
      </div>
    </section>
  );
}
