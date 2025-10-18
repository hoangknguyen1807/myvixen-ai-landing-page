"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Heart } from "lucide-react";
import { Fantasy } from "@/types/fantasy";
import { ellipsizeText, goToNectar } from "@/lib/utils";

interface FantasyCardProps {
  fantasy: Fantasy;
}

export function FantasyCard({ fantasy }: FantasyCardProps) {
  return (
    <Card
      className="group cursor-pointer overflow-hidden"
      onClick={() => goToNectar()}>
      <div className="relative h-[400px] max-w-[600px]">
        <Image
          src={fantasy.thumbnail_image_url}
          alt={fantasy.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
        {fantasy.is_nsfw && (
          <Badge className="absolute right-2 top-2">
            <span className="text-primary">New</span>
          </Badge>
        )}
        <button className="absolute bottom-2 right-2 inline-flex items-center gap-1 rounded-full bg-white/10 px-2 py-1 text-xs text-white backdrop-blur hover:bg-white/20">
          <Heart className="h-3.5 w-3.5" /> Like
        </button>
        <CardContent className="absolute bottom-4 flex flex-col gap-y-[6px] text-white/90">
          <div className="flex w-full items-center justify-start gap-x-3">
            <div className="font-semibold">
              {ellipsizeText(fantasy.title, 16)}
            </div>
            <div className="font-semibold">
              {Math.floor(19 + Math.random() * 11)}
            </div>
          </div>
          <div className="line-clamp-2 text-xs text-white/60">
            {ellipsizeText(fantasy.description, 68)}
          </div>
        </CardContent>
      </div>
    </Card>
  );
}
