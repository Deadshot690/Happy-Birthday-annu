import { useState, useRef, useEffect } from "react";
import { Confetti } from "../effects/Confetti";
import { Sparkles } from "../effects/Sparkles";
import { birthdayConfig } from "@/config/birthdayConfig";
import { Volume2, VolumeX } from "lucide-react";

interface Step3CelebrationProps {
  onNext: () => void;
}

export const Step3Celebration = ({ onNext }: Step3CelebrationProps) => {
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [popped, setPopped] = useState([false, false, false]);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Show content with a slight delay for dramatic effect
    const timer = setTimeout(() => setShowContent(true), 300);
    
    // Initialize audio
    audioRef.current = new Audio(birthdayConfig.musicUrl);
    audioRef.current.loop = true;
    audioRef.current.volume = 0.5;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
      clearTimeout(timer);
    };
  }, []);

  const toggleMusic = () => {
    if (!audioRef.current) return;
    
    if (isMusicPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(console.error);
    }
    setIsMusicPlaying(!isMusicPlaying);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-romantic relative overflow-hidden">
      <Sparkles count={24} />
      <Confetti active={true} />
      {/* Curtain Reveal */}
      {!showContent && (
        <div className="absolute inset-0 bg-white z-30 animate-curtain-reveal" />
      )}

      {/* Music Toggle */}
      <button
        onClick={toggleMusic}
        className="absolute top-6 right-6 z-20 bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-soft hover:shadow-glow transition-all hover:scale-110"
        aria-label={isMusicPlaying ? "Pause music" : "Play music"}
      >
        {isMusicPlaying ? (
          <Volume2 className="w-6 h-6 text-primary" />
        ) : (
          <VolumeX className="w-6 h-6 text-muted-foreground" />
        )}
      </button>

      {/* Main Content */}
      {showContent && (
        <div className="z-10 text-center px-6 max-w-2xl">
          {/* Balloons - interactive pop and drift */}
          <div className="flex justify-center gap-4 mb-8">
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className={`text-6xl ${popped[i] ? "animate-pop" : "animate-balloon-drift"}`}
                style={{ animationDelay: `${i * 0.5}s`, cursor: "pointer" }}
                onClick={() => setPopped((prev) => prev.map((p, idx) => (idx === i ? true : p)))}
                role="img"
                aria-label="Balloon"
              >
                🎈
              </span>
            ))}
          </div>

          {/* Cake with candle flicker */}
          <div className="relative flex justify-center mb-8 animate-bounce-in" style={{ animationDelay: "0.2s" }}>
            <span className="text-9xl">🎂</span>
            <span className="absolute top-2 left-1/2 -translate-x-1/2 text-2xl animate-candle-flicker" style={{ color: '#FFD700' }} role="img" aria-label="Candle Flame">🕯️</span>
          </div>

          {/* Happy Birthday Text with typewriter */}
          <h1
            className="text-5xl md:text-7xl font-script text-primary mb-4 animate-typewriter border-r-2 border-primary"
            style={{ animationDelay: "0.4s" }}
          >
            Happy Birthday!
          </h1>

          <p
            className="text-xl md:text-2xl text-muted-foreground mb-8 font-body animate-fade-in-up"
            style={{ animationDelay: "0.6s" }}
          >
            🎉 Make a wish and blow out the candles! <span className="animate-candle-flicker">🕯️</span>
          </p>

          {/* Party emojis with bounce */}
          <div
            className="flex justify-center gap-3 mb-12 animate-fade-in-up"
            style={{ animationDelay: "0.8s" }}
          >
            <span className="text-3xl animate-bounce">🥳</span>
            <span className="text-3xl animate-bounce" style={{ animationDelay: "0.2s" }}>🎊</span>
            <span className="text-3xl animate-bounce" style={{ animationDelay: "0.4s" }}>🎁</span>
            <span className="text-3xl animate-bounce" style={{ animationDelay: "0.6s" }}>🎊</span>
            <span className="text-3xl animate-bounce" style={{ animationDelay: "0.8s" }}>🥳</span>
          </div>

          {/* Continue Button with extra glow */}
          <button
            onClick={onNext}
            className="btn-romantic text-lg animate-fade-in-up shadow-glow hover:scale-110 hover:shadow-glow"
            style={{ animationDelay: "1s" }}
          >
            Continue to My Message 💌
          </button>
        </div>
      )}

      {/* Decorative bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" className="w-full h-24 fill-rose-medium/30">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"></path>
        </svg>
      </div>
    </div>
  );
};
