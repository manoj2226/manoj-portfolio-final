import React from "react";

export default function Contact() {
  return (
    <section className="space-y-6 p-6">
      {/* Contact heading always yellow */}
      <h2 className="text-2xl font-text-left text-black dark:text-white">
  Contact
</h2>


      {/* Normal text black in light, white in dark */}
      <ul className="space-y-3 text-gray-900 dark:text-white">
        <li>
          Email:{" "}
          <a
            className="underline text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
            href="mailto:manojvellingiri748@gmail.com"
          >
            manojvellingiri748@gmail.com
          </a>
        </li>
        <li>
          LinkedIn:{" "}
          <a
            className="underline text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
            href="https://www.linkedin.com/in/manoj2212/"
            target="_blank"
            rel="noreferrer"
          >
            v-manoj2226
          </a>
        </li>
        <li>
          GitHub:{" "}
          <a
            className="underline text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
            href="https://github.com/manoj2226"
            target="_blank"
            rel="noreferrer"
          >
            @manoj2226
          </a>
        </li>
        <li>
          Instagram:{" "}
          <a
            className="underline text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
            href="https://www.instagram.com/___jerry.________/"
            target="_blank"
            rel="noreferrer"
          >
            ___jerry.________
          </a>
        </li>
      </ul>
    </section>
  );
}
