'use client';

import { useRef, useState } from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function TiltCard({ children, className = "" }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState({});

  const onMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const rx = ((y - cy) / cy) * -8;
    const ry = ((x - cx) / cx) * 8;
    setStyle({ transform: `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg) scale3d(1.02,1.02,1.02)` });
  };

  const onLeave = () => setStyle({ transform: "perspective(1000px) rotateX(0) rotateY(0) scale3d(1,1,1)" });

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ transformStyle: "preserve-3d", transition: "transform 0.15s linear", ...style }}
      className={className}
    >
      {children}
    </div>
  );
}
