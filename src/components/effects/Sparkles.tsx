import { useEffect, useRef } from "react";

export const Sparkles = ({ count = 30 }: { count?: number }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    container.innerHTML = "";
    for (let i = 0; i < count; i++) {
      const sparkle = document.createElement("div");
      sparkle.className = "fixed pointer-events-none animate-sparkle-move";
      sparkle.style.left = Math.random() * 100 + "%";
      sparkle.style.top = Math.random() * 100 + "%";
      sparkle.style.zIndex = "1";
      sparkle.style.fontSize = `${Math.random() * 18 + 12}px`;
      sparkle.style.opacity = `${Math.random() * 0.5 + 0.5}`;
      sparkle.textContent = ["✨", "💖", "⭐", "🌟"][Math.floor(Math.random() * 4)];
      container.appendChild(sparkle);
    }
    return () => { container.innerHTML = ""; };
  }, [count]);

  return <div ref={containerRef} />;
};
