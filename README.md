# Birthday Serenade

A beautiful, interactive, and playful birthday web app to celebrate your favorite person! This project lets you create a personalized, animated, and multimedia-rich birthday experience for your friend, complete with custom messages, photos, videos, music, and fun effects.

---

## 🎉 Features

- **Animated Multi-Step Experience:**
  - Landing page with animated cake, balloons, sparkles, and a personalized birthday greeting.
  - Playful question step with interactive buttons and background effects.
  - Celebration step with confetti, music toggle, and typewriter text.
  - Heartfelt message step with animated paragraph reveals.
  - Memories gallery with photos and auto-playing videos, captions, and mute/unmute controls.
  - Finale step with a final message and celebratory effects.

- **Customizable Content:**
  - Change the birthday person's name, sender name, and all messages in `src/config/birthdayConfig.ts`.
  - Replace gallery images and videos with your own (see below).
  - Add your own background music.

- **Rich Animations & Effects:**
  - Balloons, sparkles, confetti, floating hearts, curtain reveals, and more.
  - Animated progress dots for navigation.
  - Typewriter and fade-in text effects.
  - Animated button and emoji interactions.

- **Memories Gallery:**
  - Supports both images and videos.
  - Videos auto-play and loop when visible in the grid.
  - Each video has a mute/unmute button; only one video can be unmuted at a time.
  - Click any item to view it in a lightbox with caption and animation.

- **Responsive & Mobile-Friendly:**
  - Looks great on all devices.
  - Touch-friendly interactions.

- **Modern Tech Stack:**
  - React + TypeScript + Vite
  - Tailwind CSS for styling
  - Modular, easy-to-edit codebase

---

## 🚀 Getting Started

1. **Clone the repository:**
   ```sh
   git clone https://github.com/Deadshot690/Happy-Birthday-annu.git
   cd birthday-serenade
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Run the development server:**
   ```sh
   npm run dev
   ```
   The app will be available at `http://localhost:5173` (or as shown in your terminal).

---

## 🖼️ Customizing Photos & Videos

- Place your images and videos in the `public/images/` folder.
- Update the `galleryImages` array in `src/config/birthdayConfig.ts`:
  ```js
  galleryImages: [
    { src: "/images/your_photo.jpg", caption: "A fun caption!" },
    { src: "/images/your_video.mp4", caption: "A video caption!" },
    // ...
  ]
  ```
- Supported formats: JPG, PNG, MP4 (for videos).
- Videos will auto-play, loop, and can be muted/unmuted individually (only one unmuted at a time).

---

## 🎵 Customizing Music

- Set the `musicUrl` in `src/config/birthdayConfig.ts` to any MP3 file URL.
- Users can toggle music on/off in the celebration step.

---

## ✏️ Customizing Messages

- Edit the `message` array in `src/config/birthdayConfig.ts` for the heartfelt message step.
- Edit the `finalMessage` for the last step.
- All text, captions, and names are fully customizable.

---

## 🪄 Animations & Effects

- **Landing:** Animated cake, balloons, sparkles, and typewriter effect for the greeting.
- **Question:** Playful button interactions and background hearts.
- **Celebration:** Confetti, curtain reveal, music toggle, and animated emojis.
- **Memories:** Animated grid, fade-in effects, and interactive lightbox for images/videos.
- **Finale:** Animated final message and celebratory visuals.

---

## 🛠️ Project Structure

```
public/
  images/           # Your photos and videos
src/
  components/
    steps/          # Each step/page of the experience
    effects/        # Animation and effect components
    ui/             # UI elements (buttons, progress dots, etc.)
  config/
    birthdayConfig.ts # All your custom content
  App.tsx           # Main app logic
  index.css         # Tailwind and custom styles
```

---

## 📝 Tips & Notes

- You can add, remove, or reorder steps by editing the components in `src/components/steps/` and the main flow in `BirthdayApp.tsx`.
- All animations are handled with CSS and React, so you can easily tweak timings and effects in `index.css`.
- The app is designed to be fun, emotional, and easy to personalize for any friend or loved one.

---

## 📦 Build & Deploy

- To build for production:
  ```sh
  npm run build
  ```
- Deploy the `dist/` folder to any static hosting (Vercel, Netlify, GitHub Pages, etc.).

---

## ❤️ Credits

- Built with React, TypeScript, and Tailwind CSS.
- Icons and emojis from open source and Unicode.
- Inspired by the joy of making friends feel special!

---

## 📬 Feedback & Contributions

Feel free to open issues or pull requests for improvements, new features, or bug fixes. Make this birthday app even more magical for everyone!

---

Enjoy making someone’s day unforgettable! 🎂🥳
