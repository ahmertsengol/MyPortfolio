"use client";

import { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      if (!res.ok) throw new Error("failed");
      setStatus("sent");
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="mt-6 grid gap-3 max-w-xl">
      <div className="grid gap-1">
        <label className="text-sm text-foreground/80">Name</label>
        <input value={name} onChange={(e)=>setName(e.target.value)} className="h-10 rounded-md border border-white/15 bg-black/20 px-3 outline-none focus:ring-2 focus:ring-white/20" />
      </div>
      <div className="grid gap-1">
        <label className="text-sm text-foreground/80">Email</label>
        <input type="email" required value={email} onChange={(e)=>setEmail(e.target.value)} className="h-10 rounded-md border border-white/15 bg-black/20 px-3 outline-none focus:ring-2 focus:ring-white/20" />
      </div>
      <div className="grid gap-1">
        <label className="text-sm text-foreground/80">Message</label>
        <textarea required rows={4} value={message} onChange={(e)=>setMessage(e.target.value)} className="rounded-md border border-white/15 bg-black/20 px-3 py-2 outline-none focus:ring-2 focus:ring-white/20" />
      </div>
      <div className="flex items-center gap-3">
        <button disabled={status==="sending"} className="inline-flex items-center rounded-full border px-4 h-10 text-sm hover:bg-foreground hover:text-background transition-colors disabled:opacity-60">
          {status === "sending" ? "Sending..." : status === "sent" ? "Sent" : "Send"}
        </button>
        {status === "error" && <span className="text-sm text-red-400">Failed to send, try again.</span>}
      </div>
    </form>
  );
}

