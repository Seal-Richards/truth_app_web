"use client";

import Image from "next/image";
import { cn } from "@src/lib/utils";
import { Button } from "@src/components/ui/button";
import { ReactNode } from "react";

interface BannerButton {
  label: string;
  icon?: ReactNode;
  variant?: string;
  className?: string;
  onClick?: () => void;
}

interface DynamicBannerProps {
  title: string;
  highlight?: string;
  description?: string;
  buttons?: BannerButton[];
  showVectors?: boolean;
  className?: string;
}

export default function DynamicBanner({
  title,
  highlight,
  description,
  buttons = [],
  showVectors = true,
  className = "",
}: DynamicBannerProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden bg-gradient-to-r from-emerald-950 via-emerald-900 to-emerald-950 text-white py-20 px-4 md:px-8 flex flex-col items-center justify-center text-center",
        className
      )}
    >
      {/* Decorative vectors */}
      {showVectors && (
        <>
          <Image
            src="/assets/hero_star_vector.svg"
            alt="decorative star"
            width={300}
            height={300}
            className="absolute top-40 left-0 w-40 md:w-56 opacity-30 pointer-events-none select-none"
          />
          <Image
            src="/assets/hero_star_vector.svg"
            alt="decorative star"
            width={300}
            height={300}
            className="absolute bottom-40 right-0 w-40 md:w-56 opacity-30 pointer-events-none select-none"
          />
        </>
      )}

      <div className="max-w-4xl mx-auto relative z-10">
        <h1 className="text-3xl md:text-6xl font-extrabold mb-4 leading-tight tracking-tight">
          {highlight ? (
            <>
              <span className="text-emerald-400">{highlight}</span>{" "}
              <span className="text-white">{title}</span>
            </>
          ) : (
            <span className="text-white">{title}</span>
          )}
        </h1>

        {description && (
          <p className="text-base md:text-lg text-gray-200 max-w-3xl mx-auto mb-10 leading-relaxed">
            {description}
          </p>
        )}

        {buttons.length > 0 && (
          <div className="flex flex-wrap justify-center gap-4">
            {buttons.map((btn, idx) => (
              <Button
                key={idx}
                onClick={btn.onClick}
                variant={(btn.variant as any) || "outline"}
                className={cn(
                  "rounded-xl px-6 py-3 md:px-8 md:py-4 font-semibold text-base md:text-lg transition",
                  btn.className
                )}
              >
                {btn.icon && <span className="mr-2 inline-flex items-center">{btn.icon}</span>}
                {btn.label}
              </Button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
