"use client";

import { useEffect, useRef } from "react";

type MatrixRainProps = {
  opacity?: number;
};

export function MatrixRain({ opacity = 0.25 }: MatrixRainProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let lastTime = 0;
    const frameIntervalMs = 35; // Paced to ~18 FPS for a calmer, slower matrix fall speed

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    // Matrix character set: Katakana, numbers, uppercase hex
    const chars = "0123456789ABCDEFｦｱｳｴｵｶｷｹｺｻｼｽｾｿﾀﾂﾃﾅﾆﾇﾈﾊﾋﾎﾏﾐﾑﾒﾓﾔﾕﾗﾘﾜ";
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    const drops: number[] = Array(columns).fill(1);

    const draw = (currentTime: number) => {
      animationFrameId = requestAnimationFrame(draw);

      // Throttle fall rate for slower rain
      const delta = currentTime - lastTime;
      if (delta < frameIntervalMs) return;
      lastTime = currentTime - (delta % frameIntervalMs);

      // Trail effect with dark background fade
      ctx.fillStyle = "rgba(10, 8, 0, 0.12)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${fontSize}px var(--font-mono), monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        const isGreen = Math.random() > 0.85;

        // Phosphor green (#39ff14) highlights + Glowing Amber (#ffb000) main drops
        ctx.fillStyle = isGreen ? "#39ff14" : "#ffb000";
        ctx.shadowColor = isGreen ? "rgba(57, 255, 20, 0.6)" : "rgba(255, 176, 0, 0.6)";
        ctx.shadowBlur = 4;

        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    animationFrameId = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-500"
      style={{ opacity }}
    />
  );
}
