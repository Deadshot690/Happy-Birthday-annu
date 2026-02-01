import { useState, useRef, useEffect } from "react";
import { birthdayConfig } from "@/config/birthdayConfig";
import { X } from "lucide-react";

interface Step5GalleryProps {
  onNext: () => void;
}

export const Step5Gallery = ({ onNext }: Step5GalleryProps) => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [videoMuteStates, setVideoMuteStates] = useState<{ [key: number]: boolean }>({});
  const videoRefs = useRef<{ [key: number]: HTMLVideoElement | null }>({});

  // Ensure UI and video element stay in sync
  useEffect(() => {
    Object.entries(videoRefs.current).forEach(([idx, vid]) => {
      if (vid) {
        vid.muted = videoMuteStates[Number(idx)] !== false;
      }
    });
  }, [videoMuteStates]);

  // Helper to unmute only one video at a time
  const handleMuteToggle = (index: number) => {
    setVideoMuteStates(prev => {
      const newStates: { [key: number]: boolean } = {};
      Object.keys(videoRefs.current).forEach(idx => {
        newStates[Number(idx)] = true; // mute all
      });
      newStates[index] = prev[index] === false ? true : false; // toggle this one
      return newStates;
    });
  };

  return (
    <div className="min-h-screen bg-romantic py-12 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-64 h-64 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <span className="text-5xl mb-4 block">📸</span>
          <h2 className="text-4xl md:text-5xl font-script text-primary mb-4">
            Our Beautiful Memories
          </h2>
          <p className="text-muted-foreground font-body text-lg">
            Every moment with you is a treasure ✨
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-12">
          {birthdayConfig.galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative aspect-square rounded-2xl overflow-hidden shadow-card animate-fade-in-up hover:shadow-glow transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {image.src.endsWith('.mp4') ? (
                <>
                  <video
                    ref={el => (videoRefs.current[index] = el)}
                    src={image.src}
                    autoPlay
                    loop
                    muted={videoMuteStates[index] !== false}
                    playsInline
                    className="w-full h-full object-cover animate-fade-in-up"
                    style={{ background: '#222' }}
                  />
                  {/* Mute/Unmute Button */}
                  <button
                    className="absolute bottom-4 right-4 z-20 bg-black/60 text-white rounded-full p-2 hover:bg-black/80 transition-colors"
                    onClick={e => {
                      e.stopPropagation();
                      handleMuteToggle(index);
                    }}
                    aria-label={videoMuteStates[index] === false ? 'Mute' : 'Unmute'}
                  >
                    {videoMuteStates[index] === false ? (
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 9v6h4l5 5V4l-5 5H9z" />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 9v6h4l5 5V4l-5 5H9z" />
                        <line x1="4" y1="4" x2="20" y2="20" stroke="currentColor" strokeWidth="2" />
                      </svg>
                    )}
                  </button>
                </>
              ) : (
                <img
                  src={image.src}
                  alt={image.caption}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 animate-fade-in-up"
                />
              )}
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white text-sm font-body text-center">
                  {image.caption}
                </p>
              </div>
              {/* Heart icon */}
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-2xl drop-shadow-lg">❤️</span>
              </div>
            </div>
          ))}
        </div>

        {/* Continue Button */}
        <div className="text-center">
          <button
            onClick={onNext}
            className="btn-romantic text-lg"
          >
            One Last Surprise 💫
          </button>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 animate-fade-in-up"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white/80 hover:text-white p-2 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <div className="max-w-4xl max-h-[80vh] relative">
            {birthdayConfig.galleryImages[selectedImage].src.endsWith('.mp4') ? (
              <video
                src={birthdayConfig.galleryImages[selectedImage].src}
                controls
                autoPlay
                loop
                className="max-w-full max-h-[70vh] object-contain rounded-lg animate-fade-in-up"
                style={{ background: '#222' }}
              />
            ) : (
              <img
                src={birthdayConfig.galleryImages[selectedImage].src}
                alt={birthdayConfig.galleryImages[selectedImage].caption}
                className="max-w-full max-h-[70vh] object-contain rounded-lg animate-fade-in-up"
              />
            )}
            <p className="text-white text-center mt-4 text-lg font-body animate-fade-in-up">
              {birthdayConfig.galleryImages[selectedImage].caption}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
