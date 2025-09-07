import React from "react";
import { useParams } from "react-router-dom";

export default function ProjectDetail() {
  const { id } = useParams();

  const renderProject = () => {
    switch (id) {
      case "hotel-booking":
        return (
          <article className="max-w-6xl mx-auto">
            <h1 className="text-3xl font-bold mb-6 text-black dark:text-white">
              🏨 Hotel Booking Web Application
            </h1>
            <p className="text-lg leading-relaxed text-black dark:text-white mb-6">
              I developed a comprehensive hotel booking web application designed
              to simplify and digitize the process of room reservations for both
              customers and administrators. This full-stack solution enables
              users to seamlessly browse available rooms, filter based on
              requirements like room type, price, and availability, and securely
              book rooms through integrated Stripe payment processing.
            </p>
            <p className="text-lg leading-relaxed text-black dark:text-white mb-6">
              The frontend was built using HTML, CSS, and JavaScript, while the
              backend utilizes Node.js and Express.js for handling APIs and
              server-side logic. MongoDB was used for storing user data, room
              listings, and booking records. The application features a user
              authentication system for secure login and registration,
              role-based access for admin and customer users, and an intuitive
              admin dashboard where hotel staff can manage bookings, rooms, and
              view revenue reports.
            </p>
            <p className="text-lg leading-relaxed text-black dark:text-white mb-6">
              The booking system includes real-time availability checks,
              confirmation pages, and email notifications for successful
              bookings. By replacing manual methods with a fully automated
              process, this application enhances the overall customer
              experience, reduces operational errors, and increases efficiency
              in hotel management. The system is scalable and adaptable for use
              by any hotel business aiming to modernize its services. This
              project highlights my ability to create end-to-end web solutions
              with a focus on performance, security, and usability.
            </p>

            <img
              src="/images/hotel-booking.png"
              alt="Hotel Booking Screenshot"
              className="rounded-xl shadow-lg w-full mb-6"
            />
          </article>
        );

      case "portfolio":
        return (
          <article className="max-w-6xl mx-auto">
            <h1 className="text-3xl font-bold mb-6 text-black dark:text-white">
              💼 Personal Portfolio Website
            </h1>
            <p className="text-lg leading-relaxed text-black dark:text-white mb-6">
              I designed and developed a personal portfolio website using
              React.js and Tailwind CSS to represent my skills, achievements,
              and professional identity in a clean, interactive, and visually
              engaging manner. The portfolio includes sections like Hero, About
              Me, Skills, Projects, Resume, and Contact, each optimized for
              responsiveness and user experience.
            </p>
            <p className="text-lg leading-relaxed text-black dark:text-white mb-6">
              A key highlight of this project is its deployment using Zoho
              Catalyst, a serverless cloud platform that allowed me to host the
              site efficiently with backend scalability and reliability. This
              deployment experience also exposed me to cloud functions and
              serverless architecture.
            </p>
            <p className="text-lg leading-relaxed text-black dark:text-white mb-6">
              The portfolio not only serves as a personal branding tool but also
              reflects my design philosophy, technical capabilities, and ability
              to deliver polished, real-world web applications.
            </p>

            {/* ✅ Portfolio Link placed ABOVE image */}
            <div className="mb-6">
              <a
                href="https://portjs-me-60029313614.development.catalystserverless.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
              >
                🌐 Live Portfolio
              </a>
            </div>

            <img
              src="/images/portfolio.png"
              alt="Portfolio Screenshot"
              className="rounded-xl shadow-lg w-full mb-6"
            />
          </article>
        );

      case "data-science":
        return (
          <article className="max-w-6xl mx-auto">
            <h1 className="text-3xl font-bold mb-6 text-black dark:text-white">
              📊 Data Science Project
            </h1>
            <p className="text-lg text-black dark:text-white">
              Details not available yet.
            </p>
          </article>
        );

      default:
        return (
          <article className="max-w-5xl mx-auto">
            <h1 className="text-3xl font-bold mb-4 text-black dark:text-white">
              Project: {id}
            </h1>
            <p className="text-lg text-black dark:text-white">
              Details about this project will be added soon.
            </p>
          </article>
        );
    }
  };

  return <div className="p-6">{renderProject()}</div>;
}
