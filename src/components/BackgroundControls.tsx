"use client";

import { useCallback } from "react";

type Props = {
  tint: string;
  onTint: (v: string) => void;
  scale: number;
  onScale: (v: number) => void;
  digitSize: number;
  onDigitSize: (v: number) => void;
  timeScale: number;
  onTimeScale: (v: number) => void;
  noiseAmp: number;
  onNoiseAmp: (v: number) => void;
  brightness: number;
  onBrightness: (v: number) => void;
  scanlineIntensity: number;
  onScanline: (v: number) => void;
  curvature: number;
  onCurvature: (v: number) => void;
  mouseStrength: number;
  onMouseStrength: (v: number) => void;
  mouseReact: boolean;
  onMouseReact: (v: boolean) => void;
  pageLoadAnimation: boolean;
  onPageLoad: (v: boolean) => void;
};

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-4 py-2">
      <div className="text-sm text-foreground/90 min-w-[140px]">{label}</div>
      <div className="flex-1">{children}</div>
    </div>
  );
}

export default function BackgroundControls(props: Props) {
  const onRange = useCallback(
    (fn: (v: number) => void) => (e: React.ChangeEvent<HTMLInputElement>) => fn(parseFloat(e.target.value)),
    []
  );

  return (
    <div className="w-full rounded-2xl border border-white/15 bg-black/40 backdrop-blur p-4 shadow-xl">
      <h3 className="text-xl font-semibold mb-2">Customize</h3>
      
      <Row label="Scale">
        <input type="range" min={0.6} max={2} step={0.05} value={props.scale} onChange={onRange(props.onScale)} />
      </Row>
      <Row label="Digit Size">
        <input type="range" min={0.6} max={2} step={0.05} value={props.digitSize} onChange={onRange(props.onDigitSize)} />
      </Row>
      <Row label="Speed">
        <input type="range" min={0.1} max={2} step={0.05} value={props.timeScale} onChange={onRange(props.onTimeScale)} />
      </Row>
      <Row label="Noise Amplitude">
        <input type="range" min={0} max={2} step={0.05} value={props.noiseAmp} onChange={onRange(props.onNoiseAmp)} />
      </Row>
      <Row label="Brightness">
        <input type="range" min={0.1} max={1} step={0.05} value={props.brightness} onChange={onRange(props.onBrightness)} />
      </Row>
      <Row label="Scanline Intensity">
        <input type="range" min={0} max={1.5} step={0.05} value={props.scanlineIntensity} onChange={onRange(props.onScanline)} />
      </Row>
      <Row label="Curvature">
        <input type="range" min={0} max={0.6} step={0.02} value={props.curvature} onChange={onRange(props.onCurvature)} />
      </Row>
      <Row label="Mouse Strength">
        <input type="range" min={0} max={1} step={0.05} value={props.mouseStrength} onChange={onRange(props.onMouseStrength)} />
      </Row>
      <Row label="Mouse React">
        <input type="checkbox" checked={props.mouseReact} onChange={(e)=>props.onMouseReact(e.target.checked)} />
      </Row>
      <Row label="Page Load Animation">
        <input type="checkbox" checked={props.pageLoadAnimation} onChange={(e)=>props.onPageLoad(e.target.checked)} />
      </Row>
    </div>
  );
}

