"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@src/components/ui/sheet";
import { Button } from "@src/components/ui/button";
import ContactModal from "@src/components/modals/ContactModal";
import CustomNotification from "../modals/ContactModal/CustomNotification";

//  Add a small helper for scroll behavior 
const scrollToSection = (id: string) => {
  const target = document.querySelector(id);
  if (target) {
    const start = window.scrollY;
    const end = (target as HTMLElement).offsetTop - 80; // adjust for header height
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

const hash = typeof window !== "undefined" ? window.location.hash : "";


//  Navigation items
const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQs", href: "#faq" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  //  Handle navigation + section scroll
  const handleNavClick = (href: string) => {
    setOpen(false);
    if (href.startsWith("#")) {
      // same-page smooth scroll
      scrollToSection(href);
    } else if (href.startsWith("/#")) {
      // backward compatibility
      const id = href.replace("/#", "#");
      scrollToSection(id);
    } else {
      router.push(href);
    }
  };

  //  Scroll memory enhancement
  useEffect(() => {
    const hash = sessionStorage.getItem("scrollTarget");
    if (hash && document.querySelector(hash)) {
      setTimeout(() => scrollToSection(hash), 400);
      sessionStorage.removeItem("scrollTarget");
    }
  }, []);

  return (
    <>
      <header className="w-full border-b border-border bg-background">
        {/* Top bar */}
        <div className="h-10 bg-accent" />

        <div className="container flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/assets/truthhub_icon.png"
              alt="Truth Hub Logo"
              width={32}
              height={32}
              priority
            />
            <span className="text-lg font-bold text-foreground">TRUTH HUB</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-4">
            {navLinks.map((link) => {
              const isActive =
                pathname === link.href ||
                (pathname === "/" && link.href === "/") ||
                (pathname === "/" && link.href.startsWith("#") && hash === link.href);

              return (
                <button
                  key={link.label}
                  onClick={() => {
                    if (pathname !== "/" && link.href.startsWith("#")) {
                      sessionStorage.setItem("scrollTarget", link.href);
                      router.push("/");
                    } else {
                      handleNavClick(link.href);
                    }
                  }}
                  className={`px-3 py-1 font-semibold transition-colors rounded-full ${isActive
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:bg-muted hover:text-primary"
                    }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Contact Us Button (Desktop) */}
          <div className="hidden md:block">
            <Button
             onClick={() => setContactOpen(true)}// 👈 Open modal instead of navigating
              className="bg-primary text-primary-foreground rounded-full px-5 flex items-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M20.615 4.17a4.7 4.7 0 0 0-3.33-1.38H6.705a4.71 4.71 0 0 0-4.71 4.72v6.6a4.71 4.71 0 0 0 4.71 4.72h2.34l1.94 1.94a1.34 1.34 0 0 0 1.55.32a1.1 1.1 0 0 0 .44-.3l2-2h2.34a4.73 4.73 0 0 0 3.33-1.38a4.8 4.8 0 0 0 1-1.53a4.7 4.7 0 0 0 .36-1.81v-6.6a4.7 4.7 0 0 0-1.39-3.3m-8.72 12.85a1.25 1.25 0 1 1 0-2.499a1.25 1.25 0 0 1 0 2.499m3.31-6.8a3.2 3.2 0 0 1-1.92 1.79a.65.65 0 0 0-.26.2a.6.6 0 0 0-.11.35v.57a1 1 0 1 1-2 0v-.6a2.64 2.64 0 0 1 1.69-2.41a1.22 1.22 0 0 0 .76-.68a1.2 1.2 0 0 0 .09-.49c0-.17-.038-.337-.11-.49a1.6 1.6 0 0 0-.45-.5a1.65 1.65 0 0 0-.66-.27a1.7 1.7 0 0 0-1.07.15a1.65 1.65 0 0 0-.72.76a1 1 0 1 1-1.82-.83a3.6 3.6 0 0 1 1.62-1.7a3.66 3.66 0 0 1 2.32-.35a3.51 3.51 0 0 1 2.56 1.84a3.2 3.2 0 0 1 .08 2.66"
                />
              </svg>
              Contact Us
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <button
                  aria-label="Open menu"
                  className="text-foreground hover:text-primary transition-colors"
                >
                  <Menu className="h-6 w-6" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-64 bg-background">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-lg font-semibold">Menu</span>
                </div>
                <nav className="flex flex-col gap-2">
                  {navLinks.map((link) => (
                    <button
                      key={link.label}
                      onClick={() => {
                        if (pathname !== "/" && link.href.startsWith("#")) {
                          sessionStorage.setItem("scrollTarget", link.href);
                          router.push("/");
                        } else {
                          handleNavClick(link.href);
                        }
                      }}
                      className="px-3 py-2 font-semibold text-left rounded-full hover:bg-muted hover:text-primary transition-colors"
                    >
                      {link.label}
                    </button>
                  ))}
                  <Button
                    onClick={() => {
                      setOpen(false);
                      setContactOpen(true);
                    }} // 👈 Opens modal on mobile
                    className="mt-4 bg-primary text-primary-foreground rounded-full flex items-center gap-2"
                  >
                    Contact Us
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

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
