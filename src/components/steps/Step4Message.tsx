import { useState, useEffect } from "react";
import { birthdayConfig } from "@/config/birthdayConfig";

interface Step4MessageProps {
  onNext: () => void;
}

export const Step4Message = ({ onNext }: Step4MessageProps) => {
  const [visibleParagraphs, setVisibleParagraphs] = useState<number[]>([]);
  const [typingComplete, setTypingComplete] = useState(false);

  useEffect(() => {
    // Reveal paragraphs one by one with typing-like effect
    birthdayConfig.message.forEach((_, index) => {
      setTimeout(() => {
        setVisibleParagraphs(prev => [...prev, index]);
        
        // Mark typing as complete after last paragraph
        if (index === birthdayConfig.message.length - 1) {
          setTimeout(() => setTypingComplete(true), 800);
        }
      }, index * 1200); // Stagger each paragraph
    });
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-sunset relative overflow-hidden py-12 px-4">
      {/* Decorative elements */}
      <div className="absolute top-8 left-8 text-5xl opacity-30 animate-float">💌</div>
      <div className="absolute top-16 right-12 text-4xl opacity-30 animate-float" style={{ animationDelay: "1s" }}>✨</div>
      <div className="absolute bottom-24 left-16 text-4xl opacity-30 animate-float" style={{ animationDelay: "2s" }}>💕</div>
      <div className="absolute bottom-16 right-8 text-5xl opacity-30 animate-float" style={{ animationDelay: "1.5s" }}>💌</div>

      {/* Message Card */}
      <div className="card-message max-w-2xl w-full z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <span className="text-5xl mb-4 block">💝</span>
          <h2 className="text-4xl md:text-5xl font-script text-primary">
            Happy Birthday Annu Bavri 🍻🍺🥂
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-4" />
        </div>

        {/* Message paragraphs */}
        <div className="space-y-6 text-lg text-foreground leading-relaxed font-body">
          {birthdayConfig.message.map((paragraph, index) => (
            <p
              key={index}
              className={`transition-all duration-700 ${
                visibleParagraphs.includes(index)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              {paragraph}
            </p>
          ))}
        </div>

        {/* Typing indicator or continue button */}
        <div className="text-center mt-10">
          {!typingComplete ? (
            <div className="flex justify-center gap-1">
              <span className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "0s" }} />
              <span className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "0.2s" }} />
              <span className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "0.4s" }} />
            </div>
          ) : (
            <button
              onClick={onNext}
              className="btn-romantic text-lg animate-bounce-in"
            >
              See Our Memories 📸
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
