import React from "react";
import { Link } from "react-router-dom";

const projects = [
  {
    id: "hotel-booking",
    title: "🏨 Hotel Booking Web Application",
    summary:
      "A full-stack hotel booking app with Stripe integration, real-time availability, and an admin dashboard.",
  },
  {
    id: "portfolio",
    title: "💼 Personal Portfolio Website",
    summary:
      "A React + Tailwind portfolio showcasing my skills, projects, and resume.",
  },
  {
    id: "data-science",
    title: "📊 Data Science Project",
    summary:
      "Data science project involving data cleaning, visualization, and predictions.",
  },
];

export default function Projects() {
  return (
    <section className="space-y-6 p-10">
      <h2 className="text-3xl font-semibold text-left text-black dark:text-white">
            These are my Projects 🚀!
      </h2>
      <ul className="space-y-4">
        {projects.map((p) => (
          <li
            key={p.id}
            className="p-4 border rounded-xl bg-transparent hover:bg-black/10 dark:hover:bg-white/10 transition"
          >
            <h3 className="font-serif font-semibold text-2xl text-black dark:text-white">
              {p.title}
            </h3>
            <p className="text-sm text-black dark:text-white">
              {p.summary}
            </p>
            <Link
              to={`/projects/${p.id}`}
              className="underline mt-2 inline-block text-blue-600 dark:text-blue-400 hover:opacity-80"
            >
              Read more →
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
