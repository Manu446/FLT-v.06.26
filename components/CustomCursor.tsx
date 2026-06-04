'use client';

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.left = e.clientX + "px";
        dotRef.current.style.top = e.clientY + "px";
      }
    };

    const onEnter = () => {
      ringRef.current?.classList.add("hover");
      dotRef.current?.classList.add("hover");
    };
    const onLeave = () => {
      ringRef.current?.classList.remove("hover");
      dotRef.current?.classList.remove("hover");
    };

    const loop = () => {
      ringPos.current.x += (pos.current.x - ringPos.current.x) * 0.15;
      ringPos.current.y += (pos.current.y - ringPos.current.y) * 0.15;
      if (ringRef.current) {
        ringRef.current.style.left = ringPos.current.x + "px";
        ringRef.current.style.top = ringPos.current.y + "px";
      }
      requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", onMove);
    document.querySelectorAll("a, button, .tilt-card, .glass-card, .btn-gold, .btn-outline").forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });
    const raf = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-gold rounded-full z-[9999] pointer-events-none mix-blend-difference transition-[width,height] duration-200" />
      <div ref={ringRef} className="cursor-ring fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-10 h-10 border border-gold/40 rounded-full z-[9999] pointer-events-none mix-blend-difference transition-[width,height,background,border-color] duration-300" />
    </>
  );
}
