"use client";

import { useEffect, useMemo, useState } from "react";
import Cookies from "js-cookie";
import { Card, CardContent } from "@/components/ui/Card";
import { formatTimeLeft, goToNectar } from "@/lib/utils";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

const SESSION_COOKIE_KEY = "sale_timer_start";
const DURATION_MS = 30 * 60 * 1000; // 30 minutes

function getOrInitStart(): number {
  const existing = Cookies.get(SESSION_COOKIE_KEY);
  if (existing) return Number(existing);
  const now = Date.now();
  Cookies.set(SESSION_COOKIE_KEY, String(now));
  return now;
}

export function SaleTimerCard() {
  const start = useMemo(getOrInitStart, []);
  const [now, setNow] = useState(Date.now());

  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  const timeLeft = Math.max(0, start + DURATION_MS - now);
  const { hours, minutes, seconds } = formatTimeLeft(timeLeft);

  return (
    <Card
      className="cursor-pointer overflow-hidden border border-white/10 bg-gradient-to-b from-[#291733] via-[#191228] to-[#100c1a]"
      onClick={() => goToNectar()}>
      <CardContent className="flex h-full flex-col items-center text-white">
        {/* Countdown chips */}
        <div className="mb-4 mt-4 grid w-full max-w-[220px] grid-cols-3 gap-2">
          <div className="rounded-lg bg-white/10 px-3 py-2 text-center">
            <div className="text-base font-semibold leading-none">
              {hours.toString().padStart(2, "0")}
            </div>
            <div className="mt-1 text-[10px] uppercase tracking-wide text-white/70">
              Hrs
            </div>
          </div>
          <div className="rounded-lg bg-white/10 px-3 py-2 text-center">
            <div className="text-base font-semibold leading-none">
              {minutes.toString().padStart(2, "0")}
            </div>
            <div className="mt-1 text-[10px] uppercase tracking-wide text-white/70">
              Min
            </div>
          </div>
          <div className="rounded-lg bg-white/10 px-3 py-2 text-center">
            <div className="text-base font-semibold leading-none">
              {seconds.toString().padStart(2, "0")}
            </div>
            <div className="mt-1 text-[10px] uppercase tracking-wide text-white/70">
              Sec
            </div>
          </div>
        </div>

        {/* Center promo graphic */}
        <div className="relative my-4 h-[168px] w-[196px]">
          <Image
            src="/images/sale-promo-card-graphics.png"
            alt="70% OFF"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Subtitle */}
        <div className="mt-2 text-[16px] font-extrabold uppercase tracking-widest text-white/90">
          First Subscription
        </div>

        {/* CTA */}
        <Button
          className="mt-4 w-full max-w-[100px] px-5 cursor-pointer"
          onClick={(e) => {
            e.stopPropagation();
            goToNectar();
          }}>
          Join Now
        </Button>
      </CardContent>
    </Card>
  );
}
