"use client";

import { useState } from "react";
import Background from "@/components/Background";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ControlsLauncher from "@/components/ControlsLauncher";

export default function BackgroundControllerClient({ children }: { children: React.ReactNode }) {
  const [tint, setTint] = useState<string>("#a3a3a3");
  const [brightness, setBrightness] = useState<number>(0.55);
  const [scale, setScale] = useState<number>(1.2);
  const [digitSize, setDigitSize] = useState<number>(1.0);
  const [timeScale, setTimeScale] = useState<number>(0.5);
  const [noiseAmp, setNoiseAmp] = useState<number>(1.0);
  const [scanlineIntensity, setScanlineIntensity] = useState<number>(0.5);
  const [curvature, setCurvature] = useState<number>(0.1);
  const [mouseStrength, setMouseStrength] = useState<number>(0.5);
  const [mouseReact, setMouseReact] = useState<boolean>(true);
  const [pageLoadAnimation, setPageLoadAnimation] = useState<boolean>(false);
  return (
    <>
      <Background
        variant="terminal"
        tint={tint}
        brightness={brightness}
        scale={scale}
        digitSize={digitSize}
        timeScale={timeScale}
        noiseAmp={noiseAmp}
        scanlineIntensity={scanlineIntensity}
        curvature={curvature}
        mouseStrength={mouseStrength}
        mouseReact={mouseReact}
        pageLoadAnimation={pageLoadAnimation}
      />
      <Header />
      <style>{`:root{--accent:${tint}}`}</style>
      {children}
      <Footer />
    
      <ControlsLauncher
        tint={tint}
        onTint={setTint}
        scale={scale}
        onScale={setScale}
        digitSize={digitSize}
        onDigitSize={setDigitSize}
        timeScale={timeScale}
        onTimeScale={setTimeScale}
        noiseAmp={noiseAmp}
        onNoiseAmp={setNoiseAmp}
        brightness={brightness}
        onBrightness={setBrightness}
        scanlineIntensity={scanlineIntensity}
        onScanline={setScanlineIntensity}
        curvature={curvature}
        onCurvature={setCurvature}
        mouseStrength={mouseStrength}
        onMouseStrength={setMouseStrength}
        mouseReact={mouseReact}
        onMouseReact={setMouseReact}
        pageLoadAnimation={pageLoadAnimation}
        onPageLoad={setPageLoadAnimation}
      />
    </>
  );
}

