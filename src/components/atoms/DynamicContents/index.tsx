
"use client";

import { cn } from "@src/lib/utils";
import { Card } from "@src/components/ui/card";

interface DynamicContentsProps {
  number?: number | string;
  heading: string;
  description: string;
  className?: string;
}

export default function DynamicContents({
  number,
  heading,
  description,
  className,
}: DynamicContentsProps) {
  return (
    <section
      className={cn(
        "flex flex-col items-start gap-6 w-full md:py-10 border-b border-border container mx-auto px-4 md:px-8 lg:px-12 py-10",
        className
      )}
    >
      <Card className="flex-1 p-4 md:p-6 shadow-none border-0 bg-transparent">
        <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-3 flex items-baseline gap-2">
          {number && (
            <span className="text-primary font-bold text-2xl md:text-3xl">
              {number}.
            </span>
          )}
          {heading}
        </h2>
        {description.split("\n").map((line, idx) => (
          <p key={idx} className="text-muted-foreground text-sm md:text-base leading-relaxed mb-2">
            {line}
          </p>
        ))}

      </Card>
    </section>
  );
}
