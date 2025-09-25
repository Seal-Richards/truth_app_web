"use client";

import BreadCrumb from "@src/components/atoms/BreadCrumb";

interface PageHeaderProps {
  title: string;
  description: string;
  dynamicLabels?: Record<string, string>;
}

export default function PageHeader({
  title,
  description,
  dynamicLabels,
}: PageHeaderProps) {
  return (
    <div>
      <h1 className="text-xl font-semibold text-foreground">{title}</h1>
      <p className="text-sm text-muted-foreground">{description}</p>

      <div className="mt-2 mb-2">
        <BreadCrumb dynamicLabels={dynamicLabels} />
      </div>
    </div>
  );
}
