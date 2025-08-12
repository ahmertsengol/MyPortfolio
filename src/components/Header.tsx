"use client";

import Link from "next/link";
import Container from "@/components/Container";
import { useEffect, useState } from "react";

export default function Header() {
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const sections = ["projects", "about", "contact"]; 
    const observers: IntersectionObserver[] = [];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) setActive(id);
          });
        },
        { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5, 1] }
      );
      io.observe(el);
      observers.push(io);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const linkCls = (id: string) =>
    `hover:opacity-80 transition-opacity ${active === id ? "text-white" : "text-foreground/80"}`;

  return (
    <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <Container className="flex items-center justify-between h-14 rounded-b-xl border-x border-b border-white/10 bg-black/20">
        <Link href="/" className="font-semibold tracking-tight">
          Ahmet Mert Sengöl
        </Link>
        <nav className="flex items-center gap-4 text-sm">
          <Link href="#projects" className={linkCls("projects")}>Projects</Link>
          <Link href="#about" className={linkCls("about")}>About</Link>
          <Link href="#contact" className={linkCls("contact")}>Contact</Link>
        </nav>
      </Container>
    </header>
  );
}

