// Birthday Website Configuration
// Edit these values to customize your birthday message!

export const birthdayConfig = {
  // The birthday person's name
  name: "My Love",
  
  // Your name (sender)
  senderName: "Your Forever Love",
  
  // The heartfelt message (supports multiple paragraphs)
  message: [
    "Happy Birthday, you absolute legend! 🎉 If I had a rupee for every time you made me laugh, I’d probably have enough to buy us both a chai. Maybe two if we split a samosa.",
    "Thanks for being the friend who never judges my weirdness, always joins my nonsense, and somehow still answers my calls (even when you know it’s just for memes).",
    "You’re the sibling I got to choose, the therapist I never pay, and the partner-in-crime who makes every boring day a little more epic.",
    "May your year be full of good food, zero awkward small talk, and WiFi that never lags. Here’s to more inside jokes, late-night rants, and memories that make us laugh until we can’t breathe. You’re stuck with me for life, sorry not sorry! 🥳"
  ],
  
  // Gallery images - replace with your own photos!
  // You can use local paths like "/images/photo1.jpg" or URLs
  galleryImages: [
    {
      src: "/images/IMG_20260201_130421_151.jpg",
      caption: "When we tried to look normal (and failed) 😂"
    },
    {
      src: "/images/IMG_20260201_130424_740.jpg",
      caption: "Proof we can be cute and chaotic at the same time."
    },
    {
      src: "/images/IMG_20260201_130428_498.jpg",
      caption: "The day we laughed for no reason at all."
    },
    {
      src: "/images/IMG_20260201_130431_855.jpg",
      caption: "Classic us: 10% posing, 90% goofing off."
    },
    {
      src: "/images/IMG_20260201_130435_415.jpg",
      caption: "If you zoom in, you’ll see pure friendship energy."
    },
    {
      src: "/images/IMG_20260201_130438_165.jpg",
      caption: "This one deserves a frame (or a meme)."
    },
    {
      src: "/images/lv_0_20260201130817.mp4",
      caption: "Video: Our Oscar-worthy performance, part 1. 🎬"
    },
    {
      src: "/images/lv_0_20260201141152.mp4",
      caption: "Video: When we thought we could dance... emphasis on 'thought'. 💃🕺"
    },
    {
      src: "/images/lv_7382999929322523921_20260201131843.mp4",
      caption: "Video: The moment we realized we’re hilarious."
    },
    {
      src: "/images/lv_7411401429954383111_20260201132755.mp4",
      caption: "Video: Friendship level: expert. 🏆"
    }
  ],
  
  // Final romantic message
  finalMessage: "Forever & Always Yours",
  
  // Background music URL (optional)
  // You can use a URL to an MP3 file
  musicUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
  
  // Animation timings (in milliseconds)
  animations: {
    typingSpeed: 50,        // Speed of typing animation
    stepTransition: 800,    // Duration of step transitions
    curtainDuration: 1500,  // Duration of curtain reveal
  }
};

export type BirthdayConfig = typeof birthdayConfig;
