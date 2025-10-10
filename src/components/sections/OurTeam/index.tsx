"use client";

import { Card, CardContent } from "@src/components/ui/card";
import { Icon } from "@iconify/react";
import Image from "next/image";
import { Heading3 } from "lucide-react";

export default function OurTeam() {
  return (
    <section className="w-full py-10 px-6 md:px-10 flex justify-center">
      <Card className="max-w-6xl w-full rounded-2xl border border-gray-200 bg-gradient-to-b from-white to-emerald-50/40 shadow-sm">
        <CardContent className="p-6 md:p-10">
          {/* Header */}
          <div className="flex items-center gap-2 mb-6">
          <Icon icon="material-symbols:asterisk" width="48" height="48" className="text-accent" />
            <h2 className="text-lg md:text-xl font-semibold text-gray-900">
              Our Team
            </h2>
          </div>
          {/* Content */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10">
            {/* Left image placeholder */}
            <div className="mt-8 md:mt-0 w-full md:w-[50%] flex justify-center">
               <div className="rounded-xl overflow-hidden shadow-lg border border-accent">
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
            {/* Text content */}
            <h3 className="w-full md:w-2/3 text-accent text-[15px] md:text-[20px]">
              At the heart of Truth Hub is a team of innovators, strategists,
              and visionaries committed to building a safer world. Our strength
              lies in diversity — a unique combination of voices and expertise
              from across generations. From seasoned professionals with decades
              of experience to fresh thinkers bringing new perspectives, we are
              united by one mission: to redefine how people and organizations
              establish trust, protect their interests, and engage with
              confidence.
            </h3>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
