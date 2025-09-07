import React from "react";
import { Eye, Download } from "lucide-react";

export default function Journal() {
  const pdfUrl = "/assets/journal.pdf"; // PDF path

  return (
    <section className="space-y-6">
      {/* Heading */}
      <h2 className="text-3xl font-serif tracking-wide text-black dark:text-white">
        Journal Publication
      </h2>

      {/* Subheading */}
      <h3 className="text-xl text-black dark:text-white">
        Hotel Booking Web Application System — IJRPR, Volume 5, Issue 12, December 2024.
      </h3>

      {/* Description */}
      <p className="leading-relaxed text-black dark:text-white">
        My research paper titled{" "}
        <span className="font-semibold">"Hotel Booking Web Application System"</span>{" "}
        has been published in the International Journal of Research Publication and Reviews (IJRPR), 
        Volume 5, Issue 12, December 2024 🎉
      </p>

      <p className="leading-relaxed text-black dark:text-white">
        🔍 This paper presents a modern, secure, and fully automated hotel booking system developed 
        using <span className="font-medium">HTML, CSS, JavaScript, MongoDB, and Stripe</span> integration, 
        aimed at enhancing the guest experience and streamlining hotel operations.
      </p>

      {/* Highlights */}
      <ul className="list-disc pl-6 space-y-1 text-black dark:text-white">
        <li>Real-time room availability & booking</li>
        <li>Secure online payment with Stripe</li>
        <li>Scalable MongoDB backend</li>
        <li>Admin dashboard for hotel management</li>
        <li>Improved efficiency & guest satisfaction</li>
      </ul>

      {/* Read more link */}
      <p className="underline text-blue-700 dark:text-blue-400">
        📖 Read more:{" "}
        <a href="https://www.ijrpr.com" target="_blank" rel="noreferrer">
          www.ijrpr.com
        </a>
      </p>

      {/* PDF Buttons */}
      <div className="flex flex-wrap gap-3">
        {/* Download button */}
        <a
          href={pdfUrl}
          download
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-green-600 text-white hover:bg-blue-700 transition"
        >
          <Download className="w-5 h-5" /> Download
        </a>

        {/* Eye button */}
        <a
          href={pdfUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-700 text-white hover:bg-gray-800 transition"
        >
          <Eye className="w-5 h-5" /> View Full
        </a>
      </div>

      {/* PDF Preview */}
      <div className="w-full border rounded-xl overflow-hidden shadow-lg">
        <div className="w-full h-[350px] sm:h-[500px] lg:h-[600px]">
          <iframe
            src={pdfUrl}
            title="Journal PDF"
            className="w-full h-full"
          />
        </div>
      </div>
    </section>
  );
}
