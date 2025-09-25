"use client";

import { useEffect, useState } from "react";

type Options<T> = {
  fetcher: (id: string) => Promise<T>; // how to fetch entity
  field: keyof T; // which field to display (e.g. "name", "title")
};

export default function useBreadcrumbLabel<T>(
  id: string | undefined,
  { fetcher, field }: Options<T>
) {
  const [label, setLabel] = useState<string>("Loading...");

  useEffect(() => {
    if (!id) return;
    let active = true;

    fetcher(id)
      .then((data) => {
        if (active && data && data[field]) {
          setLabel(String(data[field]));
        }
      })
      .catch(() => {
        if (active) setLabel("Not found");
      });

    return () => {
      active = false;
    };
  }, [id, fetcher, field]);

  return label;
}
