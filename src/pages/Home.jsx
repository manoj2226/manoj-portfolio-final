import React from "react";
import { Typewriter } from "react-simple-typewriter";

export default function Home() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen text-center px-4">
      {/* Wrapper for title + typewriter */}
      <div className="mt-12 max-w-3xl">
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-black dark:text-white tracking-tight leading-snug">
          👋 Hello, I’m <span className="text-yellow-500">Manoj</span>
        </h1>

        {/* Typewriter text */}
        <div
          className="mt-4 text-base sm:text-lg md:text-xl text-black dark:text-white leading-relaxed select-none" 
          // 👆 select-none prevents long-press highlighting on mobile
          style={{
            height: "60px", // keeps height constant
            display: "flex",
            alignItems: "center", // vertically centers text
          }}
        >
          <Typewriter
            words={[
              "Nice to meet you 🌟 — this portfolio highlights my work, skills, and experiences 🚀",
            ]}
            loop={0}          // only one time
            typeSpeed={50}
            deleteSpeed={0}   // no deleting
            delaySpeed={15000} // pause for 15s after typing
          />
        </div>
      </div>
    </section>
  );
}
