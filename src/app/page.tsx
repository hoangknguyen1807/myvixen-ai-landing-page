"use client";

import { Sidebar } from "@/components/Sidebar";
import { HeroCarousel } from "@/components/HeroCarousel";
import { SaleTimerCard } from "@/components/SaleTimerCard";
import { FantasyCard } from "@/components/FantasyCard";

import { useEffect, useState } from "react";
import { useCategory } from "@/contexts/CategoryProvider";
import { fetchFantasies } from "@/api/fantasies";
import { capitalizeFirstLetter, cn } from "@/lib/utils";
import { Fantasy } from "@/types/fantasy";
import { FileLock, Grid2x2, Loader } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function Home() {
  const { selectedCategory } = useCategory();
  const [fantasies, setFantasies] = useState<Fantasy[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isAllModels, setIsAllModels] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetchFantasies({
      allowNsfw: true,
      allowImageNsfw: true,
      includeTags: capitalizeFirstLetter(selectedCategory),
      page: 1,
      pageSize: 16,
      sortBy: "messages",
    })
      .then(res => setFantasies(res))
      .catch(err => {
        console.log("fetchFantasies error:", err);
      })
      .finally(() => setIsLoading(false));
  }, [selectedCategory]);

  return (
    <main className="container-page flex h-[calc(100dvh-81px)] items-start gap-6 overflow-x-hidden px-1 py-1">
      <Sidebar />
      <div className="mt-4 flex min-w-0 flex-1 flex-col gap-6">
        <HeroCarousel />
        <div className={cn("pl-2 flex flex-col gap-y-3 lg:pl-0 lg:flex-row items-center justify-between pr-2")}>
          <h2 className="text-xl font-semibold text-white">
            <span className="text-primary">MyVixen AI</span> Characters
          </h2>
          <div className="flex justify-center items-end gap-x-2">
            <Button
              variant="outline"
              className={cn("cursor-pointer", isAllModels ? "bg-white/10" : "")}
              onClick={() => setIsAllModels(true)}>
              <div className="flex items-center gap-x-2">
                <Grid2x2 />
                All Models
              </div>
            </Button>
            <Button
              variant="outline"
              className={cn("cursor-pointer", isAllModels ? "" : "bg-white/10")}
              onClick={() => setIsAllModels(false)}>
              <div className="flex items-center gap-x-2">
                <FileLock />
                Private Content
              </div>
            </Button>
          </div>
        </div>
        {isLoading ? (
          <div className="flex h-full items-center justify-center">
            <Loader className="text-primary h-8 w-8 animate-spin" />
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <SaleTimerCard />
            {fantasies.map(fts => (
              <FantasyCard key={fts.id} fantasy={fts} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
