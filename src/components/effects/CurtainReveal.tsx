import { useState, useEffect } from "react";

interface CurtainRevealProps {
  onComplete: () => void;
  duration?: number;
}

export const CurtainReveal = ({ onComplete, duration = 1500 }: CurtainRevealProps) => {
  const [isRevealing, setIsRevealing] = useState(false);

  useEffect(() => {
    // Start reveal animation after a brief delay
    const startTimer = setTimeout(() => {
      setIsRevealing(true);
    }, 500);

    // Trigger completion callback
    const completeTimer = setTimeout(() => {
      onComplete();
    }, duration + 500);

    return () => {
      clearTimeout(startTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete, duration]);

  return (
    <div className="fixed inset-0 z-50 pointer-events-none">
      {/* Left curtain */}
      <div
        className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-rose-deep to-primary"
        style={{
          transform: isRevealing ? "translateX(-100%)" : "translateX(0)",
          transition: `transform ${duration}ms cubic-bezier(0.65, 0, 0.35, 1)`,
        }}
      >
        <div className="absolute inset-0 flex items-center justify-end pr-8">
          <div className="text-white/20 text-9xl font-script">❤</div>
        </div>
        {/* Curtain folds effect */}
        <div className="absolute right-0 top-0 w-8 h-full bg-gradient-to-r from-transparent to-black/10" />
      </div>

      {/* Right curtain */}
      <div
        className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-rose-deep to-primary"
        style={{
          transform: isRevealing ? "translateX(100%)" : "translateX(0)",
          transition: `transform ${duration}ms cubic-bezier(0.65, 0, 0.35, 1)`,
        }}
      >
        <div className="absolute inset-0 flex items-center justify-start pl-8">
          <div className="text-white/20 text-9xl font-script">❤</div>
        </div>
        {/* Curtain folds effect */}
        <div className="absolute left-0 top-0 w-8 h-full bg-gradient-to-l from-transparent to-black/10" />
      </div>

      {/* Center line sparkle */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-full bg-gold"
        style={{
          opacity: isRevealing ? 0 : 1,
          transition: `opacity ${duration / 2}ms ease-out`,
        }}
      />
    </div>
  );
};
