"use client";

import CategoryProvider from "./CategoryProvider";
import { SidebarProvider } from "./SidebarProvider";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <CategoryProvider>{children}</CategoryProvider>
    </SidebarProvider>
  );
}
