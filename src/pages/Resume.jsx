import React from "react";
import { Download, Eye } from "lucide-react";

export default function Resume() {
  return (
    <section className="space-y-4">
      <h2 className="text-3xl font-serif text-black dark:text-white">
        Download the Resume!
      </h2>

      {/* Action buttons - always on top */}
      <div className="flex gap-4">
        <a
          href="/assets/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-700 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
        >
          <Eye className="w-5 h-5" />
          View
        </a>

        <a
          href="/assets/resume.pdf"
          download
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-green-500 text-white hover:bg-yellow-600 transition"
        >
          <Download className="w-5 h-5" />
          Download
        </a>
      </div>

      {/* Resume Preview - visible on both desktop & mobile */}
      <div className="w-full border rounded-xl overflow-hidden shadow-lg">
        <iframe
          src="/assets/resume.pdf"
          title="Resume"
          className="w-full h-[400px] md:h-[600px]" // smaller height on mobile
        />
      </div>
    </section>
  );
}
