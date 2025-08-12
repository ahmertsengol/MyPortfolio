"use client";

import { useEffect, useState } from "react";

type Props = {
  onChange: (hex: string) => void;
  onBrightnessChange?: (v: number) => void;
  initial?: string;
  initialBrightness?: number;
};

export default function BackgroundPicker({ onChange, onBrightnessChange, initial = "#a3a3a3", initialBrightness = 0.35 }: Props) {
  const [color, setColor] = useState(initial);
  const [brightness, setBrightness] = useState(initialBrightness);

  useEffect(() => {
    onChange(color);
  }, [color, onChange]);

  useEffect(() => {
    onBrightnessChange?.(brightness);
  }, [brightness, onBrightnessChange]);

  return (
    <div className="fixed bottom-6 right-6 z-40 select-none">
      <div className="rounded-xl border border-white/15 bg-black/40 backdrop-blur p-3 shadow-lg space-y-2">
        <div className="text-xs mb-2 text-foreground/80">Arkaplan Rengi</div>
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          className="h-10 w-10 rounded-full p-0 border-0 bg-transparent cursor-pointer"
          aria-label="Arkaplan rengi seç"
        />
        <label className="block text-xs text-foreground/80 mt-2">Parlaklık
          <input type="range" min={0.1} max={1} step={0.05} value={brightness} onChange={(e)=>setBrightness(parseFloat(e.target.value))} className="mt-1 w-40" />
        </label>
      </div>
    </div>
  );
}

