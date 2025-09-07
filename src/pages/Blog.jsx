import React from 'react'
import { Link } from 'react-router-dom'

const posts = [
  {
    id: 'about-me',
    title: "I'm Manoj",
    summary: 'Know more about me, my journey, and interests.',
  },
  {
    id: 'start-ds',
    title: 'Getting Started with My Data Science Journey',
    summary: 'Why I chose DS and how I’m learning.',
  },
  {
    id: 'photography',
    title: 'Photography',
    summary: 'How my interest in photography helps me think about data.',
  },
]

export default function Blog() {
  return (
    <section className="space-y-6">
      {/* Heading */}
      <h2 className="text-3xl font-bold text-left text-black dark:text-white">
        Explore the Blog !
      </h2>

      <ul className="space-y-4">
        {posts.map((p) => (
          <li
            key={p.id}
            className="p-4 border rounded-xl"
          >
            {/* Title in serif font */}
            <h3 className="font-serif font-semibold text-2xl text-black dark:text-white">
              {p.title}
            </h3>
            <p className="text-sm text-black dark:text-white opacity-80">
              {p.summary}
            </p>
            <Link
              to={`/blog/${p.id}`}
              className="underline mt-2 inline-block text-blue-600 dark:text-blue-400 hover:opacity-80"
            >
              Read more →
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
