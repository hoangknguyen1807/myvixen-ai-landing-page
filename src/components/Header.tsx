"use client";

import Link from "next/link";
import { Coins, User2, Mars, VenetianMask, Venus, Menu } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import { useCategory } from "@/contexts/CategoryProvider";
import { cn, goToNectar } from "@/lib/utils";
import { useSidebar } from "@/contexts/SidebarProvider";

export function Header() {
  const { selectedCategory, setSelectedCategory } = useCategory();
  const { toggleSidebar } = useSidebar();

  return (
    <header className="bg-background/80 sticky top-0 z-40 w-full border-b border-white/10 backdrop-blur">
      <div className="container-page flex h-[80px] items-center justify-between px-4">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <button
              aria-label="Open menu"
              className="mr-2 inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-md text-white"
              onClick={toggleSidebar}>
              <Menu className="h-5 w-5" />
            </button>
            <Link href="/" className="text-lg font-semibold text-white">
              <Image
                src="/images/logo.png"
                alt="MyVixenAI Logo"
                width={50}
                height={50}
              />
            </Link>
            <Link href="/" className="">
              <Image
                src="/images/brand-name.png"
                alt="MyVixenAI"
                width={128}
                height={50}
              />
            </Link>
          </div>
          <nav className="ml-8 h-full items-center gap-6 text-sm text-white/70 md:flex">
            <div className="relative inline-flex flex-col items-center justify-between">
              <span
                className={cn(
                  "flex cursor-pointer items-center gap-2 hover:text-white",
                  selectedCategory === "female" ? "text-[#ff7cab]" : ""
                )}
                onClick={() => setSelectedCategory("female")}>
                <Venus className="h-4 w-4" /> Girls
              </span>
              {selectedCategory === "female" && (
                <span className="absolute -bottom-7 h-[3px] w-full rounded bg-[#ff7cab]" />
              )}
            </div>
            <div className="relative inline-flex h-full flex-col items-center justify-between">
              <span
                className={cn(
                  "flex cursor-pointer items-center gap-2 hover:text-white",
                  selectedCategory === "anime" ? "text-[#ff7cab]" : ""
                )}
                onClick={() => setSelectedCategory("anime")}>
                <VenetianMask className="h-4 w-4" /> Anime
              </span>
              {selectedCategory === "anime" && (
                <span className="absolute -bottom-7 h-[3px] w-full rounded bg-[#ff7cab]" />
              )}
            </div>
            <div className="relative inline-flex h-full flex-col items-center justify-between">
              <span
                className={cn(
                  "flex cursor-pointer items-center gap-2 hover:text-white",
                  selectedCategory === "male" ? "text-[#ff7cab]" : ""
                )}
                onClick={() => setSelectedCategory("male")}>
                <Mars className="h-4 w-4" /> Guys
              </span>
              {selectedCategory === "male" && (
                <span className="absolute -bottom-7 h-[3px] w-full rounded bg-[#ff7cab]" />
              )}
            </div>
          </nav>
        </div>
        <div className="flex items-center gap-2">
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
      </div>
    </header>
  );
}
