import { FloatingHearts } from "../effects/FloatingHearts";
import { Sparkles } from "../effects/Sparkles";
import { birthdayConfig } from "@/config/birthdayConfig";

interface Step1LandingProps {
  onNext: () => void;
}

export const Step1Landing = ({ onNext }: Step1LandingProps) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative bg-romantic overflow-hidden">
      <Sparkles count={18} />
      <FloatingHearts />
      {/* Decorative elements with more animation */}
      <div className="absolute top-10 left-10 text-6xl animate-balloon-drift opacity-60">🎈</div>
      <div className="absolute top-20 right-16 text-5xl animate-balloon-drift" style={{ animationDelay: "1s" }}>🎈</div>
      <div className="absolute bottom-32 left-20 text-4xl animate-sparkle-move" style={{ animationDelay: "2s" }}>✨</div>
      <div className="absolute bottom-40 right-24 text-5xl animate-bounce" style={{ animationDelay: "1.5s" }}>🎀</div>
      {/* Main content */}
      <div className="z-10 text-center px-6 animate-fade-in-up">
        {/* Cake emoji with bounce */}
        <div className="text-8xl mb-8 animate-bounce" style={{ animationDelay: "0.3s" }}>
          🎂
        </div>
        {/* Main heading with typewriter */}
        <h1 className="text-5xl md:text-7xl font-script text-primary mb-2 drop-shadow-lg animate-typewriter border-r-2 border-primary">
          Happy Birthday
        </h1>
        <h2 className="text-4xl md:text-6xl font-script mb-8 drop-shadow-lg text-foreground dark:text-rose-deep animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          Annu Bavri 🍻🍺🥂
        </h2>
        {/* Sparkle decoration with movement */}
        <div className="flex justify-center gap-4 mb-12">
          <span className="text-2xl animate-sparkle-move">✨</span>
          <span className="text-2xl animate-sparkle-move" style={{ animationDelay: "0.3s" }}>💖</span>
          <span className="text-2xl animate-sparkle-move" style={{ animationDelay: "0.6s" }}>✨</span>
        </div>
        {/* CTA Button with bounce and glow */}
        <button
          onClick={onNext}
          className="btn-romantic text-lg md:text-xl group shadow-glow animate-bounce"
        >
          <span className="flex items-center gap-2">
            Let's Celebrate
            <span className="group-hover:animate-wiggle inline-block">🎉</span>
          </span>
        </button>
      </div>
      {/* Bottom decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-rose-medium/30 to-transparent" />
    </div>
  );
};
