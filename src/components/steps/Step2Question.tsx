import { useState, useRef, useCallback } from "react";
import { Sparkles } from "../effects/Sparkles";

interface Step2QuestionProps {
  onNext: () => void;
}

export const Step2Question = ({ onNext }: Step2QuestionProps) => {
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const [escapeCount, setEscapeCount] = useState(0);
  const noButtonRef = useRef<HTMLButtonElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const escapeMessages = [
    "😒 No",
    "😤 Are you sure?",
    "🥺 Please?",
    "😢 Pretty please?",
    "💔 You're breaking my heart!",
    "😭 Okay okay, just click Yes!",
  ];

  const handleNoHover = useCallback(() => {
    if (!containerRef.current || !noButtonRef.current) return;

    const container = containerRef.current.getBoundingClientRect();
    const button = noButtonRef.current.getBoundingClientRect();
    
    // Calculate random position within container bounds
    const maxX = container.width - button.width - 100;
    const maxY = container.height - button.height - 100;
    
    const newX = Math.random() * maxX - maxX / 2;
    const newY = Math.random() * maxY - maxY / 2;
    
    setNoButtonPosition({ x: newX, y: newY });
    setEscapeCount(prev => Math.min(prev + 1, escapeMessages.length - 1));
  }, [escapeMessages.length]);

  return (
    <div 
      ref={containerRef}
      className="min-h-screen flex items-center justify-center bg-sunset relative overflow-hidden p-6"
    >
      <Sparkles count={18} />
      {/* Background hearts */}
      {/* Background hearts */}
      <div className="absolute inset-0 opacity-10">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute text-4xl"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: `rotate(${Math.random() * 30 - 15}deg)`,
            }}
          >
            ❤
          </div>
        ))}
      </div>

      {/* Question Card */}
      <div className="card-romantic max-w-md w-full text-center z-10 animate-bounce-in">
        {/* Emoji header */}
        <div className="text-6xl mb-6">🥰</div>
        {/* Question */}
        <h2 className="text-3xl md:text-4xl font-script text-primary mb-8">
          Do you wanna see what I made??
        </h2>
        
        {/* Buttons container */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center relative min-h-[120px]">
          {/* Yes Button */}
          <button
            onClick={onNext}
            className="btn-romantic text-lg z-10"
          >
            Yes ❤️
          </button>
          
          {/* No Button - escapes! */}
          <button
            ref={noButtonRef}
            onMouseEnter={handleNoHover}
            onTouchStart={handleNoHover}
            className="btn-outline-romantic text-lg transition-all duration-200 absolute sm:relative"
            style={{
              transform: `translate(${noButtonPosition.x}px, ${noButtonPosition.y}px)`,
            }}
          >
            {escapeMessages[escapeCount]}
          </button>
        </div>
        
        {/* Teasing text */}
        {escapeCount >= 3 && (
          <p className="mt-6 text-muted-foreground text-sm animate-fade-in-up">
            Hehe, that button doesn't want to be clicked! 😜
          </p>
        )}
      </div>
    </div>
  );
};
