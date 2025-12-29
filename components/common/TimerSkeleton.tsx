"use client";

import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";

export default function TimerSkeleton() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (mounted) return null; // client render geldiğinde gerçek timer gösterilecek

  return (
    <div className="flex justify-center items-center gap-2 ">
      <Skeleton className="h-24 w-12   rounded-full" />
      <Skeleton className="h-24 w-12   rounded-full" />

      <span className="text-7xl sm:text-8xl font-bold  tracking-widest text-primary select-none">
        :
      </span>
      <Skeleton className="h-24 w-12   rounded-full" />

      <Skeleton className="h-24 w-12  rounded-full" />
    </div>
  );
}
