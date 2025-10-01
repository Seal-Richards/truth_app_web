// src/components/sections/PricingPlans/index.tsx
"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@src/components/ui/card";
import { Button } from "@src/components/ui/button";
import { cn } from "@src/lib/utils";
import { Icon } from "@iconify/react";



const plans = [
  {
    name: "Silver",
    monthly: "N15,500",
    annual: "N155,000",
    // classes used directly in JSX (explicit so Tailwind picks them up)
    accentDot: "bg-emerald-400",
    accentText: "text-emerald-400",
    priceText: "text-emerald-600",
    badgeBg: "bg-emerald-500",
    // hover shadow (arbitrary value — Tailwind JIT)
    hoverShadow: "hover:shadow-[0_20px_60px_rgba(16,185,129,0.12)]",
    // bullet icon (colored)
    bulletIcon: "mdi:check-circle",
  },
  {
    name: "Gold",
    monthly: "N22,500",
    annual: "N225,000",
    accentDot: "bg-amber-400",
    accentText: "text-amber-400",
    priceText: "text-amber-600",
    badgeBg: "bg-amber-500",
    hoverShadow: "hover:shadow-[0_20px_60px_rgba(245,158,11,0.14)]",
    bulletIcon: "mdi:check-circle",
  },
  {
    name: "Platinum",
    monthly: "N27,100",
    annual: "N271,000",
    accentDot: "bg-blue-400",
    accentText: "text-blue-400",
    priceText: "text-blue-600",
    badgeBg: "bg-blue-500",
    hoverShadow: "hover:shadow-[0_20px_60px_rgba(59,130,246,0.14)]",
    bulletIcon: "mdi:check-circle",
  },
];

const categories = [
  "Knocking Service",
  "Check-in Service",
  "Verified By",
  "Secured By",
];

export default function PricingPlans() {
  const [selectedCategory, setSelectedCategory] = useState("Knocking Service");
  const [billingCycle, setBillingCycle] = useState<"Monthly" | "Annual">("Monthly");

  return (
    <section className="relative w-full py-16 bg-gradient-to-b from-emerald-900/80 via-emerald-800 to-emerald-900 text-white overflow-hidden">
      {/* Decorative gradient ellipses (emulate your screenshot eclipse glows) */}
      <div
        aria-hidden
        className="absolute -top-28 -left-36 w-96 h-96 rounded-full blur-3xl bg-emerald-600/30"
      />
      <div
        aria-hidden
        className="absolute top-20 left-10 w-80 h-80 rounded-full blur-2xl bg-emerald-400/20"
      />
      <div
        aria-hidden
        className="absolute -right-8 bottom-6 w-[30rem] h-[30rem] rounded-full blur-3xl bg-blue-600/18"
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-6">
          <span className="inline-block px-4 py-1 rounded-md bg-emerald-600 text-sm font-semibold">
            SUBSCRIPTION PLAN
          </span>
        </div>

        <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-6">
          Flexible Plans for Every Need.
        </h2>

        {/* Category buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-6">
          {categories.map((cat) => (
            <Button
              key={cat}
              variant={selectedCategory === cat ? "default" : "outline"}
              className={cn(
                "rounded-md px-6 text-sm font-medium transition",
                selectedCategory === cat
                  ? "bg-emerald-900 text-white"
                  : "bg-white text-black hover:bg-emerald-700"
              )}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat.toUpperCase()}
            </Button>
          ))}
        </div>

        <h3 className="text-center justify-center flex uppercase">Choose your plan</h3>
        {/* Billing toggle */}
        <div className="flex justify-center mb-12">

          <div className="bg-white rounded-md p-1 inline-flex items-center">
            {(["Monthly", "Annual"] as const).map((cycle) => (
              <button
                key={cycle}
                onClick={() => setBillingCycle(cycle)}
                className={cn(
                  "rounded-md px-5 py-2 text-sm font-medium transition",
                  billingCycle === cycle
                    ? "bg-emerald-900 text-white"
                    : "bg-transparent text-emerald-900 hover:bg-white/10"
                )}
              >
                {cycle.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        {/* Pricing Plans grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan) => (
            <div key={plan.name} className="h-full">
              <Card
                className={cn(
                  "relative h-full flex flex-col rounded-2xl overflow-hidden border border-white/20 bg-white/8 backdrop-blur-xl transition-transform duration-300",
                  plan.hoverShadow
                )}
              >
                {/* Top-right pill badge */}
                <span
                  className={cn(
                    "absolute top-4 right-4 inline-flex items-center justify-center px-3 py-1 rounded-full text-xs font-medium",
                    plan.badgeBg,
                    "text-white"
                  )}
                >
                  {billingCycle.toUpperCase()}
                </span>

                {/* Header: left crown circle + plan name */}
                <CardHeader className="flex items-left justify-start px-6 pt-6 pb-2">
                  <CardTitle className="flex items-center gap-3 text-lg md:text-xl font-semibold">
                    <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white/10">
                      <Icon icon="mdi:crown" className={cn("w-5 h-5", plan.accentText)} />
                    </span>
                    <span className="text-white/95">{plan.name}</span>
                  </CardTitle>
                </CardHeader>


                {/* Card content: features list (flex-1 so price pill sits at bottom) */}
                <CardContent className="flex flex-col flex-1 px-6 pb-6 pt-2">
                  <div>
                    <h3 className="text-2xl font-semibold mb-6 text-left text-white">Features</h3>

                    <ul className="space-y-4 text-left">
                      {/* NOTE: Using same bullet icon for each plan but colored by plan.accentText */}
                      {[
                        "Secure Knocking Scheduling",
                        "Real-Time Visit Tracker",
                        "Digital Visit Reports",
                        "Emergency Alert System",
                        "Identity Verification for Agents",
                        "In-App Messaging",
                        // add the extra platinum features only for Platinum plan
                      ]
                        .concat(plan.name === "Gold" ? ["History and Archive", "Custom Knocking Preferences"] : [])
                        .concat(plan.name === "Platinum" ? ["History and Archive", "Custom Knocking Preferences", "Live Location Tracking", "Multi-Family Member Access", "Diaspora Mode"] : [])
                        .map((feature) => (
                          <li key={feature} className="flex items-start gap-3">
                            <span className={cn("mt-1 shrink-0")}>
                              <Icon icon={plan.bulletIcon} className={cn("w-5 h-5", plan.accentText)} />
                            </span>
                            <p className="text-sm text-white/90 leading-tight">{feature}</p>
                          </li>
                        ))}
                    </ul>
                  </div>

                  {/* Price pill pinned to bottom of card content */}
                  <div className="mt-auto pt-6">
                    <div className="flex justify-center">
                      <div className="inline-flex items-baseline gap-3 bg-white px-6 py-3 rounded-full shadow-sm">
                        <span className={cn("text-2xl font-extrabold", plan.priceText)}>
                          {billingCycle === "Monthly" ? plan.monthly : plan.annual}
                        </span>
                        <span className="text-sm font-medium text-slate-800/90">
                          / {billingCycle.toUpperCase()}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
