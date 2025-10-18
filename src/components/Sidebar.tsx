"use client";

import Link from "next/link";
import { useSidebar } from "@/contexts/SidebarProvider";
import {
  Home,
  MessageSquare,
  Image as ImageIcon,
  Shapes,
  Zap,
  Coins,
  Crown,
  HelpCircle,
  ContactRound,
  Award,
  User2,
  X,
} from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { goToNectar } from "@/lib/utils";

export const nav = [
  { href: "/", label: "Home", icon: Home },
  { href: "/chat", label: "Chat", icon: MessageSquare },
  { href: "/collection", label: "Collection", icon: Shapes },
  { href: "/generate", label: "Generate Image", icon: ImageIcon },
  { href: "/create", label: "Create Character", icon: Zap },
  { href: "/my-ai", label: "My AI", icon: Crown },
  { href: "/buy-tokens", label: "Buy Tokens", icon: Zap },
];

export const secondary = [
  { href: "/", label: "English", image: "/images/usa-flag.png" },
  { href: "/", label: "Discord", image: "/images/discord-logo.png" },
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
        <div className="flex flex-col items-start gap-y-2 border-b border-white/10 p-4 lg:hidden">
          <Button
            variant="outline"
            size="sm"
            className="cursor-pointer gap-2"
            onClick={() => goToNectar()}>
            <Coins className="h-4 w-4" />
            Tokens 284
          </Button>
          <Button
            variant="secondary"
            size="sm"
            className="cursor-pointer gap-2"
            onClick={() => goToNectar()}>
            <User2 className="h-4 w-4" /> My Profile
          </Button>
        </div>
        {/* Mobile close button */}
        <div className="absolute right-0 top-0 flex w-full items-center justify-end pr-1 pt-2">
          <button
            type="button"
            aria-label="Close sidebar"
            onClick={closeSidebar}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-transparent text-white hover:bg-white/20">
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="flex flex-col gap-2 p-3">
          {nav.map(item => {
            const Icon = item.icon;
            return (
              <Link
                key={item.label}
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
            if (Icon) {
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={closeSidebar}
                  className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-white/60 hover:bg-white/10 hover:text-white">
                  <Icon className="h-4 w-4" /> {item.label}
                </Link>
              );
            }
            const imgSrc = item.image;
            if (imgSrc) {
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={closeSidebar}
                  className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-white/60 hover:bg-white/10 hover:text-white">
                  <Image src={imgSrc} alt={item.label} width={20} height={20} />{" "}
                  {item.label}
                </Link>
              );
            }
            return null;
          })}
        </div>
      </aside>

      {/* Desktop sidebar */}
      <aside
        className={`hidden lg:flex ${
          isSidebarOpen
            ? "border-white/10 lg:w-[220px]"
            : "border-transparent lg:w-0"
        } bg-background/90 sticky top-0 h-[calc(100dvh-81px)] shrink-0 flex-col gap-3 overflow-y-auto overflow-x-hidden border-r p-3 transition-all duration-300`}>
        <div className="flex flex-col gap-2">
          {nav.map(item => {
            const Icon = item.icon;
            return (
              <Link
                key={item.label}
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
            if (Icon) {
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-white/60 hover:bg-white/10 hover:text-white ${
                    isSidebarOpen
                      ? "opacity-100"
                      : "pointer-events-none opacity-0"
                  } transition-opacity`}>
                  <Icon className="h-4 w-4" /> {item.label}
                </Link>
              );
            }
            const imgSrc = item.image;
            if (imgSrc) {
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-white/60 hover:bg-white/10 hover:text-white ${
                    isSidebarOpen
                      ? "opacity-100"
                      : "pointer-events-none opacity-0"
                  } transition-opacity`}>
                  <Image src={imgSrc} alt={item.label} width={24} height={24} />{" "}
                  {item.label}
                </Link>
              );
            }
            return null;
          })}
        </div>
      </aside>
    </>
  );
}
