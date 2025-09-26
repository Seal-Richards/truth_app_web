"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@src/components/ui/button";
import { Icon } from "@iconify/react";

export default function ProblemSection() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{
        backgroundColor: "hsl(var(--surface))",
        color: "hsl(var(--foreground))",
      }}
    >
      {/* Decorative string (desktop only) */}
      <div
        className="absolute inset-0 -z-10 pointer-events-none hidden lg:block"
        aria-hidden
      >
        <Image
          src="/assets/string-problem.svg"
          alt="decorative string background"
          width={1800}
          height={900}
          className="w-full h-full object-contain object-right opacity-70"
          priority
        />
      </div>

      {/* TOP: Badge + Heading + Description */}
      <div className="container mx-auto px-4 lg:px-12 pt-12">
        <div className="max-w-3xl mx-auto text-center">
          <div
            className="inline-block rounded-full px-4 py-1 mb-4"
            style={{ backgroundColor: "hsl(var(--primary) / 0.10)" }}
          >
            <span
              className="text-sm font-medium"
              style={{ color: "hsl(var(--primary))" }}
            >
              PROBLEM
            </span>
          </div>

          <h2 className="font-bold leading-tight mb-4 text-3xl sm:text-4xl lg:text-5xl">
            Safety shouldn’t be a guessing game.
          </h2>

          <p
            className="mx-auto text-base sm:text-lg leading-relaxed"
            style={{ color: "hsl(var(--muted-foreground))" }}
          >
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

      {/* BOTTOM: Card + Phone */}
      <div className="relative z-10 mt-12">
        {/* Wider container but not full width */}
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-12 px-4 lg:px-8">
          {/* LEFT: Card */}
          <div className="relative flex-1 w-full">
            <div
              className="relative h-auto rounded-2xl p-6 lg:p-10 shadow-md z-10"
              style={{
                border: "1.5px solid hsl(var(--border))",
              }}
            >
              {/* Small pill */}
              <div className="mb-4">
                <span
                  className="inline-block text-xs font-semibold px-3 py-1 rounded-full"
                  style={{
                    backgroundColor: "hsl(var(--primary) / 0.12)",
                    color: "hsl(var(--primary))",
                  }}
                >
                  OUR SOLUTION
                </span>
              </div>

              {/* Title with icon */}
              <div className="flex items-start gap-4 mb-6">
                <div
                  className="flex items-center justify-center rounded-full flex-shrink-0"
                  style={{
                    width: 52,
                    height: 52,
                    backgroundColor: "hsl(var(--primary))",
                    color: "hsl(var(--primary-foreground))",
                  }}
                >
                  <Icon icon="mdi:asterisk" className="w-6 h-6" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold leading-snug text-accent">
                  One App. <br /> Total Assurance.
                </h3>
              </div>

              {/* Benefits */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
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
                      className="rounded-full flex items-center justify-center flex-shrink-0"
                      style={{
                        width: 34,
                        height: 34,
                        backgroundColor: "hsl(var(--primary))",
                        color: "hsl(var(--primary-foreground))",
                      }}
                    >
                      <Icon icon="mdi:check" className="w-4 h-4" />
                    </div>
                    <p className="text-sm text-muted-foreground">{benefit}</p>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <Button
                variant="default"
                className="rounded-md px-6 py-3 shadow"
                style={{
                  backgroundColor: "hsl(var(--primary))",
                  color: "hsl(var(--primary-foreground))",
                }}
              >
                Explore Features
              </Button>
            </div>
          </div>

          {/* RIGHT: Phone */}
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
