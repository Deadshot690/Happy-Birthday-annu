import { useState } from "react";
import { CurtainReveal } from "../effects/CurtainReveal";
import { birthdayConfig } from "@/config/birthdayConfig";

export const Step6Finale = () => {
  const [showCurtain, setShowCurtain] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const handleCurtainComplete = () => {
    setShowCurtain(false);
    setTimeout(() => setShowContent(true), 200);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-rose-light via-background to-blush relative overflow-hidden">
      {/* Curtain Reveal */}
      {showCurtain && (
        <CurtainReveal 
          onComplete={handleCurtainComplete}
          duration={birthdayConfig.animations.curtainDuration}
        />
      )}

      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating hearts */}
        {showContent && Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="absolute text-3xl opacity-20 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          >
            ❤
          </div>
        ))}
        
        {/* Sparkles */}
        {showContent && Array.from({ length: 20 }).map((_, i) => (
          <div
            key={`sparkle-${i}`}
            className="absolute text-xl animate-sparkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          >
            ✨
          </div>
        ))}
      </div>

      {/* Main Content */}
      {showContent && (
        <div className="text-center px-6 z-10">
          {/* Heart decoration */}
          <div className="mb-8 animate-bounce-in">
            <span className="text-8xl drop-shadow-lg">💕</span>
          </div>

          {/* Final Message */}
          <h1 
            className="text-5xl md:text-7xl lg:text-8xl font-script text-primary mb-6 animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            {birthdayConfig.finalMessage}
          </h1>

          {/* Sender name */}
          <p 
            className="text-2xl md:text-3xl font-script text-heart animate-fade-in-up"
            style={{ animationDelay: "0.6s" }}
          >
            — {birthdayConfig.senderName}
          </p>

          {/* Decorative line */}
          <div 
            className="w-32 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-8 mb-8 animate-fade-in-up"
            style={{ animationDelay: "0.9s" }}
          />

          {/* Final emojis */}
          <div 
            className="flex justify-center gap-4 animate-fade-in-up"
            style={{ animationDelay: "1.2s" }}
          >
            <span className="text-4xl animate-pulse-soft">💖</span>
            <span className="text-4xl animate-pulse-soft" style={{ animationDelay: "0.2s" }}>🌹</span>
            <span className="text-4xl animate-pulse-soft" style={{ animationDelay: "0.4s" }}>💖</span>
          </div>

          {/* Replay hint */}
          <p 
            className="mt-12 text-muted-foreground text-sm font-body animate-fade-in-up"
            style={{ animationDelay: "1.5s" }}
          >
            Made with all my love for you 💕
          </p>
        </div>
      )}

      {/* Glowing orbs */}
      <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute -top-32 -right-32 w-64 h-64 bg-accent/20 rounded-full blur-3xl" />
    </div>
  );
};
