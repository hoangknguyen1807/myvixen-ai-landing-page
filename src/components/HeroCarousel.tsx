"use client";

import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useRef } from "react";
import { goToNectar } from "@/lib/utils";

const slides = [
  {
    id: 1,
    title: "Create your own AI Girlfriend",
    cta: "Create Now",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Chat with stunning AI models",
    cta: "Start Chatting",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Unlock premium content",
    cta: "Explore",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1600&auto=format&fit=crop",
  },
];

export function HeroCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollByAmount = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = Math.round(el.clientWidth * 0.5);
    el.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  return (
    <div className="relative w-full">
      <button
        aria-label="Scroll left"
        onClick={() => scrollByAmount("left")}
        className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/40 p-2 text-white shadow hover:bg-black/60 cursor-pointer"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        aria-label="Scroll right"
        onClick={() => scrollByAmount("right")}
        className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/40 p-2 text-white shadow hover:bg-black/60 cursor-pointer"
      >
        <ChevronRight className="h-5 w-5" />
      </button>
      <div ref={scrollRef} className="w-full overflow-x-auto scrollbar-none">
        <div className="flex gap-4 min-w-0">
        {slides.map((slide, index) => (
          <motion.div
            key={slide.id}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className="group relative h-40 sm:h-52 md:h-56 lg:h-60 flex-none min-w-[320px] sm:min-w-[560px] md:min-w-[680px] lg:min-w-[820px] max-w-full rounded-2xl overflow-hidden border border-white/10 cursor-pointer"
            onClick={() => goToNectar()}
            aria-label="Open nectar.ai"
            
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/20" />
            {/* Hover overlay */}
            <div className="pointer-events-none absolute inset-0 bg-black/60 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
            <div className="absolute inset-0 p-6 flex items-center">
              <div className="max-w-xl">
                <h3 className="text-white text-2xl md:text-3xl font-semibold">
                  {slide.title}
                </h3>
                  <Button
                    className="mt-4 gap-2 cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation();
                      goToNectar();
                    }}
                  >
                  <Sparkles className="h-4 w-4" /> {slide.cta}
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        ))}
        </div>
      </div>
    </div>
  );
}


