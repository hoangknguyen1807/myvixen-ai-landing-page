import * as React from "react";
import { cn } from "@/lib/utils";

export function Badge({
  className,
  children,
  color = "pink",
}: React.PropsWithChildren<{ className?: string; color?: "pink" | "gray" }>) {
  const colorClasses =
    color === "pink"
      ? "bg-primary/20 text-white border border-primary/40"
      : "bg-white/10 text-white border border-white/20";
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium",
        colorClasses,
        className
      )}>
      {children}
    </span>
  );
}
