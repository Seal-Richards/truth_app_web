"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, } from "lucide-react";
import { usePathname } from "next/navigation";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@src/components/ui/sheet";
import { Button } from "@src/components/ui/button";
import { TbMessageCircleQuestion } from "react-icons/tb";
const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/features", label: "Features" },
  { href: "/pricing", label: "Pricing" },
  { href: "/faqs", label: "FAQs" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
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
          <span className="text-lg font-bold text-foreground">
            TRUTH HUB
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-4">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-1 font-semibold transition-colors rounded-full ${isActive
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:bg-muted hover:text-primary"
                  }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Contact Us Button (Desktop) */}
        <div className="hidden md:block">
          <Button
            asChild
            className="bg-primary text-primary-foreground rounded-full px-5 flex items-center gap-2"
          >
            <Link href="/contact">
              <TbMessageCircleQuestion className="h-5 w-5" />
              Contact Us
            </Link>
          </Button>
        </div>

        {/* Mobile Menu Trigger */}
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
                {/*  */}
              </div>
              <nav className="flex flex-col gap-2">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={`px-3 py-2 font-semibold transition-colors rounded-full ${isActive
                          ? "bg-primary text-primary-foreground"
                          : "text-foreground hover:bg-muted hover:text-primary"
                        }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
                <Button
                  asChild
                  className="mt-4 bg-primary text-primary-foreground rounded-full flex items-center gap-2"
                >
                  <Link href="/contact">
                    <TbMessageCircleQuestion className="h-5 w-5" />
                    Contact Us
                  </Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
