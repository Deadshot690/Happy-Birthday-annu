interface ProgressDotsProps {
  total: number;
  current: number;
  onDotClick?: (index: number) => void;
}

export const ProgressDots = ({ total, current, onDotClick }: ProgressDotsProps) => {
  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-40 flex gap-3">
      {Array.from({ length: total }, (_, i) => (
        <button
          key={i}
          onClick={() => onDotClick?.(i)}
          className={`
            w-3 h-3 rounded-full transition-all duration-300 
            ${i === current 
              ? "bg-primary scale-125 shadow-glow animate-progress-bounce" 
              : i < current 
                ? "bg-primary/60" 
                : "bg-rose-medium/50"
            }
            ${onDotClick ? "cursor-pointer hover:scale-110" : "cursor-default"}
          `}
          aria-label={`Step ${i + 1}`}
          disabled={!onDotClick}
        />
      ))}
    </div>
  );
};
