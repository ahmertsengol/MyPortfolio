"use client";

import dynamic from "next/dynamic";

export type BackgroundVariant = "radial-grid" | "aurora" | "plain" | "terminal";

type BackgroundProps = {
  variant?: BackgroundVariant;
  tint?: string;
  brightness?: number;
  scale?: number;
  digitSize?: number;
  timeScale?: number;
  noiseAmp?: number;
  scanlineIntensity?: number;
  curvature?: number;
  mouseStrength?: number;
  mouseReact?: boolean;
  pageLoadAnimation?: boolean;
};

export default function Background({
  variant = "radial-grid",
  tint,
  brightness,
  scale,
  digitSize,
  timeScale,
  noiseAmp,
  scanlineIntensity,
  curvature,
  mouseStrength,
  mouseReact,
  pageLoadAnimation,
}: BackgroundProps) {
  if (variant === "plain") {
    return null;
  }

  if (variant === "terminal") {
    const FaultyTerminal = dynamic(() => import("@/components/FaultyTerminal"), { ssr: false });
    return (
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
        <FaultyTerminal
          className="w-full h-full"
          scale={scale ?? 1.2}
          gridMul={[1.5, 1]}
          digitSize={digitSize ?? 1.0}
          timeScale={timeScale ?? 0.6}
          pause={false}
          scanlineIntensity={scanlineIntensity ?? 0.6}
          glitchAmount={0.6}
          flickerAmount={0.5}
          noiseAmp={noiseAmp ?? 0.7}
          chromaticAberration={0}
          dither={0}
          curvature={curvature ?? 0}
          tint={tint ?? "#a3a3a3"}
          mouseReact={mouseReact ?? true}
          mouseStrength={mouseStrength ?? 0.35}
          pageLoadAnimation={pageLoadAnimation ?? false}
          brightness={brightness ?? 0.35}
        />
        {/* Softer overlays so tint is visible */}
        <div className="absolute inset-0 bg-background/20" />
        <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_35%,transparent_70%)] bg-background/10" />
      </div>
    );
  }

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
      {/* Soft radial glow from top */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.14),transparent_55%)] dark:bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.18),transparent_55%)]" />

      {/* Dotted grid with radial mask */}
      {variant === "radial-grid" && (
        <div className="absolute inset-0 opacity-15 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)] bg-[radial-gradient(currentColor_0.6px,transparent_0.6px)] dark:text-white text-black bg-[size:24px_24px]" />
      )}

      {/* Aurora blur sweep */}
      {(variant === "radial-grid" || variant === "aurora") && (
        <div className="absolute inset-x-0 top-[-15%] h-[50vh] blur-3xl opacity-45 bg-[conic-gradient(from_180deg_at_50%_50%,rgba(56,189,248,0.22),rgba(217,70,239,0.22),rgba(16,185,129,0.22),rgba(56,189,248,0.22))]" />
      )}
    </div>
  );
}

