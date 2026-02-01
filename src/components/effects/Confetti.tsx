import { useEffect, useState } from "react";

interface ConfettiPiece {
  id: number;
  left: number;
  color: string;
  size: number;
  delay: number;
  duration: number;
  rotation: number;
}

const CONFETTI_COLORS = [
  "#FFB6C1", // Light pink
  "#FFD700", // Gold
  "#FF69B4", // Hot pink
  "#FFA07A", // Light salmon
  "#DDA0DD", // Plum
  "#F0E68C", // Khaki
  "#98FB98", // Pale green
  "#87CEEB", // Sky blue
];

export const Confetti = ({ active = true }: { active?: boolean }) => {
  const [pieces, setPieces] = useState<ConfettiPiece[]>([]);

  useEffect(() => {
    if (!active) return;

    // Generate confetti burst
    const generateBurst = () => {
      const newPieces: ConfettiPiece[] = Array.from({ length: 50 }, (_, i) => ({
        id: Date.now() + i,
        left: Math.random() * 100,
        color: CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)],
        size: Math.random() * 10 + 5,
        delay: Math.random() * 2,
        duration: Math.random() * 3 + 3,
        rotation: Math.random() * 360,
      }));
      setPieces(prev => [...prev, ...newPieces]);

      // Clean up old pieces
      setTimeout(() => {
        setPieces(prev => prev.slice(-100));
      }, 6000);
    };

    // Initial burst
    generateBurst();

    // Continuous confetti
    const interval = setInterval(generateBurst, 4000);

    return () => clearInterval(interval);
  }, [active]);

  if (!active) return null;

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
      {pieces.map((piece) => (
        <div
          key={piece.id}
          className="absolute"
          style={{
            left: `${piece.left}%`,
            top: "-20px",
            width: `${piece.size}px`,
            height: `${piece.size}px`,
            backgroundColor: piece.color,
            borderRadius: Math.random() > 0.5 ? "50%" : "2px",
            transform: `rotate(${piece.rotation}deg)`,
            animation: `confetti-fall ${piece.duration}s linear forwards`,
            animationDelay: `${piece.delay}s`,
          }}
        />
      ))}
    </div>
  );
};
