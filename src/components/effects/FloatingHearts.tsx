import { useEffect, useState } from "react";

interface FloatingHeart {
  id: number;
  left: number;
  size: number;
  delay: number;
  duration: number;
}

export const FloatingHearts = () => {
  const [hearts, setHearts] = useState<FloatingHeart[]>([]);

  useEffect(() => {
    // Generate initial hearts
    const initialHearts: FloatingHeart[] = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: Math.random() * 20 + 15,
      delay: Math.random() * 5,
      duration: Math.random() * 4 + 6,
    }));
    setHearts(initialHearts);

    // Continuously add new hearts
    const interval = setInterval(() => {
      setHearts(prev => {
        const newHeart: FloatingHeart = {
          id: Date.now(),
          left: Math.random() * 100,
          size: Math.random() * 20 + 15,
          delay: 0,
          duration: Math.random() * 4 + 6,
        };
        // Keep only last 20 hearts to prevent memory issues
        return [...prev.slice(-19), newHeart];
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute text-heart opacity-60"
          style={{
            left: `${heart.left}%`,
            fontSize: `${heart.size}px`,
            animation: `heart-float ${heart.duration}s ease-in-out forwards`,
            animationDelay: `${heart.delay}s`,
          }}
        >
          ❤️
        </div>
      ))}
    </div>
  );
};
