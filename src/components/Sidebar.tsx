"use client";

import Link from "next/link";
import { useSidebar } from "@/contexts/SidebarProvider";
import {
  Home,
  MessageSquare,
  Image as ImageIcon,
  Shapes,
  Zap,
  Crown,
  HelpCircle,
  ContactRound,
  Award,
} from "lucide-react";

export const nav = [
  { href: "/", label: "Home", icon: Home },
  { href: "/chat", label: "Chat", icon: MessageSquare },
  { href: "/collection", label: "Collection", icon: Shapes },
  { href: "/generate", label: "Generate Image", icon: ImageIcon },
  { href: "/create", label: "Create Character", icon: Zap },
  { href: "/my-ai", label: "My Ai", icon: Crown },
  { href: "/buy-tokens", label: "Buy Tokens", icon: Zap },
];

export const secondary = [
  { href: "/help", label: "Help Center", icon: HelpCircle },
  { href: "/contact", label: "Contact Us", icon: ContactRound },
  { href: "/achievements", label: "Achievements", icon: Award },
];

export function Sidebar() {
  const { isSidebarOpen, closeSidebar } = useSidebar();

  return (
    <>
      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/60 transition-opacity lg:hidden ${
          isSidebarOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={closeSidebar}
      />
      {/* Mobile drawer */}
      <aside
        className={`bg-background/95 fixed left-0 top-0 z-50 h-full w-[260px] transform backdrop-blur transition-transform lg:hidden ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}>
        <div className="flex flex-col gap-2 p-3">
          {nav.map(item => {
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeSidebar}
                className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-white/80 hover:bg-white/10 hover:text-white">
                <Icon className="h-4 w-4" /> {item.label}
              </Link>
            );
          })}
        </div>
        <div className="mt-auto flex flex-col gap-2 p-3">
          {secondary.map(item => {
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeSidebar}
                className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-white/60 hover:bg-white/10 hover:text-white">
                <Icon className="h-4 w-4" /> {item.label}
              </Link>
            );
          })}
        </div>
      </aside>

      {/* Desktop sidebar */}
      <aside
        className={`hidden lg:flex ${
          isSidebarOpen
            ? "border-white/10 lg:w-[220px]"
            : "border-transparent lg:w-0"
        } bg-background/90 sticky top-14 h-[calc(100dvh-81px)] shrink-0 flex-col gap-3 overflow-y-auto overflow-x-hidden border-r p-3 transition-all duration-300`}>
        <div className="flex flex-col gap-2">
          {nav.map(item => {
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-white/80 hover:bg-white/10 hover:text-white ${
                  isSidebarOpen
                    ? "opacity-100"
                    : "pointer-events-none opacity-0"
                } transition-opacity`}>
                <Icon className="h-4 w-4" /> {item.label}
              </Link>
            );
          })}
        </div>
        <div className="mt-auto flex flex-col gap-2">
          {secondary.map(item => {
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-white/60 hover:bg-white/10 hover:text-white ${
                  isSidebarOpen
                    ? "opacity-100"
                    : "pointer-events-none opacity-0"
                } transition-opacity`}>
                <Icon className="h-4 w-4" /> {item.label}
              </Link>
            );
          })}
        </div>
      </aside>
    </>
  );
}
