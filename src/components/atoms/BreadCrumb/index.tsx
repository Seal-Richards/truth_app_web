"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, ChevronRight } from "lucide-react";
import { menuItems } from "@src/constants/menuItems";

function findLabel(path: string): string | null {
  for (const item of menuItems) {
    if (item.href === path) return item.name;
  }
  return null;
}

export default function BreadCrumb({
  dynamicLabels = {},
}: {
  dynamicLabels?: Record<string, string>;
}) {
  const pathname = usePathname();

  if (pathname === "/dashboard") {
    return (
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <Home className="h-4 w-4" />
        <span>Dashboard</span>
      </div>
    );
  }

  const segments = pathname.split("/").filter(Boolean);
  const paths = segments.map(
    (_, idx) => "/" + segments.slice(0, idx + 1).join("/")
  );

  return (
    <nav className="flex items-center gap-1 text-sm text-muted-foreground">
      <Link
        href="/dashboard"
        className="flex items-center gap-1 hover:text-foreground"
      >
        <Home className="h-4 w-4" />
      </Link>
      <ChevronRight className="h-4 w-4" />
      <Link href="/dashboard" className="hover:text-foreground">
        Dashboard
      </Link>

      {paths.map((path, idx) => {
        if (path === "/dashboard") return null;

        const label =
          dynamicLabels[path] ?? findLabel(path) ?? segments[idx];
        const isLast = idx === paths.length - 1;

        return (
          <div key={path} className="flex items-center gap-1">
            <ChevronRight className="h-4 w-4" />
            {isLast ? (
              <span className="font-medium text-foreground">{label}</span>
            ) : (
              <Link href={path} className="hover:text-foreground">
                {label}
              </Link>
            )}
          </div>
        );
      })}
    </nav>
  );
}
