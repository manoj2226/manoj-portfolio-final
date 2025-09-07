import React from "react";
import { useParams } from "react-router-dom";

const entries = {
  "about-me": {
    title: "Good day, Look who it is!",
    image: "/assets/profile.jpg",
    body: [
      `My name is Manoj, and I am from Coimbatore, Tamil Nadu. I am currently pursuing a Data Science course and looking forward to starting my career in this field. My interest in Data Science comes from the idea that data is everywhere, and when used properly, it can tell meaningful stories and help solve real problems. I am learning Python, SQL, Machine Learning, and visualization tools like Power BI and Tableau to build a solid foundation.`,
      `Apart from academics, I enjoy traveling. Traveling has given me the opportunity to meet new people, experience different cultures, and see life from different perspectives. These journeys have taught me patience, observation, and the importance of keeping an open mind. I especially enjoy visiting hill stations, historic places, and coastal towns. Each trip has helped me learn something new—whether it’s trying a local cuisine, understanding a region’s history, or simply appreciating nature’s beauty. Travel refreshes my mind and inspires creativity.`,
      `As I move forward, my aim is to combine the skills I am learning in Data Science with the experiences I gain from life and travel. I want to start my career in Data Science, grow step by step, and contribute to work that is both useful and meaningful.`,
    ],
  },
  "start-ds": {
    title: "Getting Started My Data Science Journey",
    body: [
      `I am Manoj, a fresher currently pursuing a Data Science course, and I am passionate about starting my career in this exciting field. My learning journey has begun with core tools such as Python, SQL, and Machine Learning, which I am eager to apply to real-world projects. I enjoy working with data to uncover insights and believe that effective storytelling through visualizations is a powerful way to drive decisions. Tools like Power BI and Tableau help me turn raw data into clear, actionable stories.`,
      `As I continue to strengthen my technical and analytical skills, my focus is on building a solid foundation in data handling, modeling, and visualization. My ultimate goal is to grow into a data professional who can contribute to solving business problems through data-driven solutions.`,
    ],
  },
  photography: {
    title: "Photography",
    body: [
      `Photography has always been one of my passions 📸. It trains me to notice composition, light, and small details that others might overlook. Interestingly, this habit connects deeply with Data Science — where instead of light and shadows, I look at distributions, patterns, and outliers.`,
      `When I capture an image, I try to tell a story through visuals. Similarly, with data, I aim to tell stories through visualizations, turning raw information into meaningful insights.`,
      `Here are some of my favorite shots:`,
    ],
    images: [
      "/assets/photos/photo1.jpg",
      "/assets/photos/photo2.jpg",
      "/assets/photos/photo3.jpg",
      "/assets/photos/photo4.jpg",
      "/assets/photos/photo5.jpg",
      "/assets/photos/photo6.jpg",
    ],
  },
};

export default function BlogDetail() {
  const { id } = useParams();
  const post = entries[id];

  if (!post) return <p>Post not found.</p>;

  const titleClass =
    id === "about-me"
      ? "text-2xl md:text-3xl"
      : "text-2xl md:text-3xl";

  return (
    <article className="max-w-none">
      {/* Title */}
      <h1
        className={`font-serif font-extrabold text-center mb-10 ${titleClass} text-black dark:text-white`}
      >
        {post.title}
      </h1>

      {/* About Me Layout */}
      {post.image ? (
        <div className="flex flex-col md:flex-row items-stretch gap-8">
          {/* Profile picture */}
          <div className="md:w-1/3 h-full">
            <img
              src={post.image}
              alt="Manoj"
              
              className="w-full h-72 md:h-full object-cover rounded-xl shadow-lg border"
            />
          </div>

          {/* Text */}
          <div className="flex-1 flex flex-col justify-center">
            {post.body.map((para, idx) => (
              <p
                key={idx}
                className="text-lg leading-relaxed mb-4 text-justify text-black dark:text-white"
              >
                {para}
              </p>
            ))}
          </div>
        </div>
      ) : (
        // Default layout
        post.body.map((para, idx) => (
          <p
            key={idx}
            className="text-lg leading-relaxed mb-4 text-justify text-black dark:text-white"
          >
            {para}
          </p>
        ))
      )}

      {/* Photography gallery */}
      {post.images && (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-10">
          {post.images.map((src, idx) => (
            <div
              key={idx}
              className="overflow-hidden rounded-xl shadow-md border"
            >
              <img
                src={src}
                alt={`Photography ${idx + 1}`}
                className="w-full h-40 md:h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      )}
    </article>
  );
}
