"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@src/components/ui/card";
import { Button } from "@src/components/ui/button";
import { cn } from "@src/lib/utils";
import { Icon } from "@iconify/react";

const knockingPlans = [
  {
    name: "Silver",
    monthly: "N15,500",
    annual: "N170,300",
    features: [
      "Secure Knocking Scheduling",
      "Real-Time Visit Tracker",
      "Digital Visit Reports",
      "Emergency Alert System",
      "Identity Verification for Agents",
      "In-App Messaging",
    ],
  },
  {
    name: "Gold",
    monthly: "N22,500",
    annual: "N246,900",
    features: [
      "Secure Knocking Scheduling",
      "Real-Time Visit Tracker",
      "Digital Visit Reports",
      "Emergency Alert System",
      "Identity Verification for Agents",
      "In-App Messaging",
      "History and Archive - Infographics included",
      "Custom Knocking Preferences",
    ],
  },
  {
    name: "Platinum",
    monthly: "N27,100",
    annual: "N297,900",
    features: [
      "Secure Knocking Scheduling",
      "Real-Time Visit Tracker",
      "Digital Visit Reports",
      "Emergency Alert System",
      "Identity Verification for Agents",
      "In-App Messaging",
      "History and Archive - Infographics included",
      "Custom Knocking Preferences",
      "Live Location Tracking",
      "Multi-Family Member Access",
      "Diaspora Mode",
    ],
  },
];

const checkInPlans = [
  {
    name: "Silver",
    monthly: "N15,500",
    annual: "N170,300",
    features: [
      "Continuous Real-Time Location Tracking",
      "Secure Check-In",
      "Location History",
      "Automatic Alerts",
      "In-App Messaging",
      "Rapid Response Trigger (Panic Button)",
      "In-App Response Status Indicator Light",
    ],
  },
  {
    name: "Gold",
    monthly: "N22,500",
    annual: "N246,900",
    features: [
      "Continuous Real-Time Location Tracking",
      "Secure Check-In",
      "Location History",
      "Automatic Alerts",
      "In-App Messaging",
      "Rapid Response Trigger (Panic Button)",
      "In-App Response Status Indicator Light",
      "DND (Do Not Disturb)",
      "Tracking On/Off Toggle",
      "Live Location Tracking for a Third Party",
    ],
  },
  {
    name: "Platinum",
    monthly: "N27,100",
    annual: "N297,900",
    features: [
      "Continuous Real-Time Location Tracking",
      "Secure Check-In",
      "Location History",
      "Automatic Alerts",
      "In-App Messaging",
      "Rapid Response Trigger (Panic Button)",
      "In-App Response Status Indicator Light",
      "DND (Do Not Disturb)",
      "Tracking On/Off Toggle",
      "Live Location Tracking for a Third Party",
      "Live Location Tracking for up to 3 Third Parties",
      "Diaspora Mode",
    ],
  },
];

interface PlanStyle {
  accentDot: string;
  accentText: string;
  priceText: string;
  badgeBg: string;
  hoverShadow: string;
}

const plansStyle: PlanStyle[] = [
  {
    accentDot: "bg-emerald-400",
    accentText: "text-emerald-400",
    priceText: "text-emerald-600",
    badgeBg: "bg-emerald-500",
    hoverShadow: "hover:shadow-[0_20px_60px_rgba(16,185,129,0.12)]",
  },
  {
    accentDot: "bg-amber-400",
    accentText: "text-amber-400",
    priceText: "text-amber-600",
    badgeBg: "bg-amber-500",
    hoverShadow: "hover:shadow-[0_20px_60px_rgba(245,158,11,0.14)]",
  },
  {
    accentDot: "bg-blue-400",
    accentText: "text-blue-400",
    priceText: "text-blue-600",
    badgeBg: "bg-blue-500",
    hoverShadow: "hover:shadow-[0_20px_60px_rgba(59,130,246,0.14)]",
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

  const getPlans = () => {
    if (selectedCategory === "Knocking Service") return knockingPlans;
    if (selectedCategory === "Check-in Service") return checkInPlans;
    if (selectedCategory === "Verified By" || selectedCategory === "Secured By") {
      // Coming soon placeholder plans
      return [
        { name: "Silver", monthly: "Coming soon", annual: "Coming soon", features: [] },
        { name: "Gold", monthly: "Coming soon", annual: "Coming soon", features: [] },
        { name: "Platinum", monthly: "Coming soon", annual: "Coming soon", features: [] },
      ];
    }
    return [];
  };

  const plansToRender = getPlans();

  return (
    <section className="relative w-full py-16 bg-gradient-to-b from-emerald-900/80 via-emerald-800 to-emerald-900 text-white overflow-hidden">
      {/* Decorative gradient glows */}
      <div aria-hidden className="absolute -top-28 -left-36 w-96 h-96 rounded-full blur-3xl bg-emerald-600/30" />
      <div aria-hidden className="absolute top-20 left-10 w-80 h-80 rounded-full blur-2xl bg-emerald-400/20" />
      <div aria-hidden className="absolute -right-8 bottom-6 w-[30rem] h-[30rem] rounded-full blur-3xl bg-blue-600/18" />

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

        <h3 className="text-center justify-center flex uppercase mb-4">Choose your plan</h3>

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

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plansToRender.map((plan, i) => {
            const style = plansStyle[i] ?? plansStyle[0]!;

            const isComingSoon =
              selectedCategory === "Verified By" || selectedCategory === "Secured By";

            return (
              <div key={plan.name} className="h-full">
                <Card
                  className={cn(
                    "relative h-full flex flex-col rounded-2xl overflow-hidden border border-white/20 bg-white/8 backdrop-blur-xl transition-transform duration-300",
                    style.hoverShadow
                  )}
                >
                  {/* Badge */}
                  <span
                    className={cn(
                      "absolute top-4 right-4 inline-flex items-center justify-center px-3 py-1 rounded-full text-xs font-medium",
                      style.badgeBg,
                      "text-white"
                    )}
                  >
                    {billingCycle.toUpperCase()}
                  </span>

                  <CardHeader className="flex items-left justify-start px-6 pt-6 pb-2">
                    <CardTitle className="flex items-center gap-3 text-lg md:text-xl font-semibold">
                      <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white/10">
                        <Icon icon="mdi:crown" className={cn("w-5 h-5", style.accentText)} />
                      </span>
                      <span className="text-white/95">{plan.name}</span>
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="flex flex-col flex-1 px-6 pb-6 pt-2">
                    <h3 className="text-2xl font-semibold mb-6 text-left text-white">
                      Features
                    </h3>

                    {isComingSoon ? (
                      <div className="flex flex-col items-start justify-center flex-1 text-start">
                        <div className="flex items-center gap-2 mb-6">
                          <Icon
                            icon="mdi:check-circle"
                            className={cn("w-5 h-5", style.accentText)}
                          />
                          <p className="text-sm text-white/90">Coming soon</p>
                        </div>

                        <Button
                          variant="outline"
                          className="rounded-full bg-white text-emerald-900 hover:bg-emerald-50 px-8 py-2 font-medium"
                          onClick={() => setSelectedCategory("Knocking Service")}
                        >
                          Explore other services
                        </Button>
                      </div>

                    ) : (
                      <>
                        <ul className="space-y-4 text-left">
                          {plan.features.map((feature) => (
                            <li key={feature} className="flex items-start gap-3">
                              <span className="mt-1 shrink-0">
                                <Icon
                                  icon="mdi:check-circle"
                                  className={cn("w-5 h-5", style.accentText)}
                                />
                              </span>
                              <p className="text-sm text-white/90 leading-tight">{feature}</p>
                            </li>
                          ))}
                        </ul>

                        {/* Price */}
                        <div className="mt-auto pt-6 flex justify-center">
                          <div className="inline-flex items-baseline gap-3 bg-white px-6 py-3 rounded-full shadow-sm">
                            <span className={cn("text-2xl font-extrabold", style.priceText)}>
                              {billingCycle === "Monthly"
                                ? plan.monthly
                                : plan.annual}
                            </span>
                            <span className="text-sm font-medium text-slate-800/90">
                              / {billingCycle.toUpperCase()}
                            </span>
                          </div>
                        </div>
                      </>
                    )}
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
