"use client";

import { useEffect } from "react";

type Props = {
  value: string;
  onChange: (hex: string) => void;
  brightness: number;
  onBrightnessChange?: (v: number) => void;
};

export default function BackgroundPicker({ value, onChange, brightness, onBrightnessChange }: Props) {
  useEffect(() => {
    // no-op; keep API parity if parent changes
  }, [value]);

  return (
    <div className="fixed bottom-6 right-6 z-40 select-none">
      <div className="rounded-xl border border-white/15 bg-black/40 backdrop-blur p-3 shadow-lg space-y-2">
        <div className="text-xs mb-2 text-foreground/80">Arkaplan Rengi</div>
        <input
          type="color"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="h-10 w-10 rounded-full p-0 border-0 bg-transparent cursor-pointer"
          aria-label="Arkaplan rengi seç"
        />
        <label className="block text-xs text-foreground/80 mt-2">Parlaklık
          <input type="range" min={0.1} max={1} step={0.05} value={brightness} onChange={(e)=>onBrightnessChange?.(parseFloat(e.target.value))} className="mt-1 w-40" />
        </label>
      </div>
    </div>
  );
}

