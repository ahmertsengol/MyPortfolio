"use client";

import { useState } from "react";
import Background from "@/components/Background";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackgroundPicker from "@/components/BackgroundPicker";

export default function BackgroundControllerClient({ children }: { children: React.ReactNode }) {
  const [tint, setTint] = useState<string>("#a3a3a3");
  const [brightness, setBrightness] = useState<number>(0.55);
  return (
    <>
      <Background variant="terminal" tint={tint} brightness={brightness} />
      <Header />
      {children}
      <Footer />
      <BackgroundPicker onChange={setTint} onBrightnessChange={setBrightness} initial={tint} initialBrightness={brightness} />
    </>
  );
}

