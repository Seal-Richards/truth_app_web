"use client";

import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Input } from "@src/components/ui/input";
import { Button } from "@src/components/ui/button";
import { Icon } from "@iconify/react";
import Image from "next/image";
import ContactModal from "@src/components/modals/ContactModal";
import CustomNotification from "@src/components/modals/ContactModal/CustomNotification";

// Smooth scroll helper
const scrollToSection = (id: string) => {
  const target = document.querySelector(id);
  if (target) {
    const start = window.scrollY;
    const end = (target as HTMLElement).offsetTop - 80;
    const duration = 800;
    const startTime = performance.now();

    const easeOutExpo = (t: number) =>
      t === 1 ? 1 : 1 - Math.pow(2, -10 * t);

    const animate = (time: number) => {
      const elapsed = time - startTime;
      const progress = Math.min(elapsed / duration, 1);
      window.scrollTo(0, start + (end - start) * easeOutExpo(progress));
      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }
};

// Footer navigation links
const footerLinks = [
  { label: "About", href: "/about" },
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQs", href: "#faq" },
  { label: "Blog", href: "#" },
  { label: "Terms", href: "/terms" },
  { label: "Privacy", href: "/privacy-policy" },
  { label: "Contact", href: "#contact" }, // opens modal
];

export default function Footer() {
  const router = useRouter();
  const pathname = usePathname();
  const [contactOpen, setContactOpen] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  //  Unified navigation logic
  const handleNavClick = (href: string) => {
    if (href === "#contact") {
      setContactOpen(true); // open modal immediately
      return;
    }

    if (href.startsWith("#")) {
      // If user is on a different page, store target and go home
      if (pathname !== "/") {
        sessionStorage.setItem("scrollTarget", href);
        router.push("/");
      } else {
        // If already on homepage, scroll smoothly
        scrollToSection(href);
      }
    } else {
      router.push(href);
    }
  };

  // Restore smooth scroll from saved session target
  useEffect(() => {
    const hash = sessionStorage.getItem("scrollTarget");
    if (hash && document.querySelector(hash)) {
      setTimeout(() => scrollToSection(hash), 400);
      sessionStorage.removeItem("scrollTarget");
    }
  }, []);

  return (
    <>
      {/* Hero / CTA Section */}
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

      {/* Main Footer */}
      <footer className="bg-[#132C28] text-white px-6 sm:px-10 lg:px-20 py-10">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-10">
          {/* Left Section */}
          <div className="flex flex-col gap-6 max-w-md">
            <div className="flex items-center gap-2">
              <Image
                src="/assets/truthhub_icon_footer.png"
                alt="Truth Hub Logo"
                width={50}
                height={50}
                priority
                className="p-2"
              />
              <span className="text-xl font-bold">TRUTH HUB</span>
            </div>

            <p className="text-sm text-gray-300 leading-relaxed">
              Stay safe and connected anywhere, anytime with real-time support and transparency.
            </p>

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
              {footerLinks.reduce((cols: any[], link, i) => {
                const colIndex = Math.floor(i / 3);
                if (!cols[colIndex]) cols[colIndex] = [];
                cols[colIndex].push(link);
                return cols;
              }, []).map((col, i) => (
                <div key={i} className="flex flex-col gap-2">
                  {col.map((link: any) => (
                    <button
                      key={link.label}
                      onClick={() => handleNavClick(link.href)}
                      className="text-left hover:text-[#2ADABF] transition-colors"
                    >
                      {link.label}
                    </button>
                  ))}
                </div>
              ))}
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

      {/* Modals + Notifications */}
      <ContactModal
        open={contactOpen}
        onOpenChange={setContactOpen}
        onSuccess={() => setShowNotification(true)}
      />

      {showNotification && (
        <CustomNotification onClose={() => setShowNotification(false)} />
      )}
    </>
  );
}
