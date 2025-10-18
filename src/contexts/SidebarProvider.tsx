"use client";

import React, { createContext, useContext, useMemo, useState } from "react";

type SidebarContextType = {
  isSidebarOpen: boolean;
  openSidebar: () => void;
  closeSidebar: () => void;
  toggleSidebar: () => void;
};

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export function useSidebar(): SidebarContextType {
  const ctx = useContext(SidebarContext);
  if (!ctx) throw new Error("useSidebar must be used within SidebarProvider");
  return ctx;
}

export function SidebarProvider({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const value = useMemo<SidebarContextType>(
    () => ({
      isSidebarOpen,
      openSidebar: () => setIsSidebarOpen(true),
      closeSidebar: () => setIsSidebarOpen(false),
      toggleSidebar: () => setIsSidebarOpen((v) => !v),
    }),
    [isSidebarOpen]
  );

  return <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>;
}


