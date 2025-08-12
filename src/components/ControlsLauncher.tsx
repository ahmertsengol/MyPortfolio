"use client";

import { useState } from "react";
import BackgroundControls from "@/components/BackgroundControls";
import { IconSettings } from "@/components/Icons";

type Props = React.ComponentProps<typeof BackgroundControls>;

export default function ControlsLauncher(props: Props) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        aria-label="Open customization"
        onClick={() => setOpen(true)}
        className="fixed bottom-6 left-6 z-40 h-12 w-12 rounded-full border border-white/20 bg-black/40 backdrop-blur hover:bg-black/50 grid place-items-center"
      >
        <IconSettings />
      </button>

      {open && (
        <div className="fixed inset-0 z-50">
          <div className="absolute inset-0 bg-black/50" onClick={() => setOpen(false)} />
          <div className="absolute right-0 top-0 h-full w-full max-w-md bg-black/60 backdrop-blur border-l border-white/15 p-4 overflow-y-auto">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xl font-semibold">Customize</h3>
              <button onClick={() => setOpen(false)} className="rounded px-3 py-1 text-sm bg-white/10 hover:bg-white/15">Kapat</button>
            </div>
            <BackgroundControls {...props} />
          </div>
        </div>
      )}
    </>
  );
}

