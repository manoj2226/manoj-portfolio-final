import React, { useEffect } from "react";

export default function Preloader({ onFinish }) {
  useEffect(() => {
    const t = setTimeout(() => onFinish && onFinish(), 1500); // ⏳ delay 1.5s
    return () => clearTimeout(t);
  }, [onFinish]);

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-white dark:bg-black">
      {/* Loader container */}
      <div className="flex flex-col items-center gap-4 animate-fade-in">
        {/* Animated gradient ring */}
        <div className="relative w-20 h-20">
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-blue-500 border-r-yellow-500 animate-spin"></div>
          <div className="absolute inset-3 rounded-full bg-gradient-to-tr from-green-500 to-purple-500 opacity-20 animate-pulse"></div>
        </div>

        {/* Loading text */}
        <p className="text-base font-semibold text-gray-700 dark:text-gray-200 tracking-wide">
          Loading<span className="animate-pulse">...</span>
        </p>
      </div>
    </div>
  );
}
