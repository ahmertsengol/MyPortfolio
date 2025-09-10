"use client";

import { useEffect } from "react";

type Props = {
  value: string;
  onChange: (hex: string) => void;
  brightness: number;
  onBrightnessChange?: (v: number) => void;
};
