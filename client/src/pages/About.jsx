import React from "react";
import { FiGithub, FiTwitter, FiMail, FiLinkedin } from "react-icons/fi";
import BackButton from "../components/BackButton";

export default function AboutUsPage() {
  return (
    <div className="bg-blue-50 min-h-screen flex flex-col items-center justify-center">
      {/* Header */}
      <header className="bg-blue-500 text-white py-3 px-6 flex items-center justify-between w-full fixed top-0 z-10">
        <h1 className="text-2xl font-bold">About Us</h1>
        <BackButton />
      </header>

      {/* Main Content */}
      <main className="flex-1 w-full max-w-screen-lg flex items-center justify-center mt-20 ">
        <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-2xl transition-all duration-300 ease-in-out transform hover:scale-105">
          <h2 className="text-3xl font-bold mb-4 text-blue-900">About CodeMorph</h2>
          <p className="text-lg text-gray-700 mb-8">
            CodeMorph is a revolutionary AI-powered tool designed to enhance coding experiences by automating language conversion and providing detailed code explanations. Built with technologies like Vite, Tailwind CSS, React, and MindSDB. CodeMorph aims to simplify development processes and improve code quality.
          </p>

          <div className="flex justify-center space-x-6">
            {/* GitHub */}
            <a
              href="https://github.com/jyoti-ranjan-jena"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black-500 hover:text-blue-700 transition-transform duration-300 ease-in-out transform hover:scale-110"
            >
              <FiGithub size={30} />
            </a>
            {/* Twitter */}
            <a
              href="https://twitter.com/the_JRJ"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black-500 hover:text-blue-700 transition-transform duration-300 ease-in-out transform hover:scale-110"
            >
              <FiTwitter size={30} />
            </a>
            {/* Email */}
            <a
              href="mailto:jyotiranjanjena256504@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black-500 hover:text-blue-700 transition-transform duration-300 ease-in-out transform hover:scale-110"
            >
              <FiMail size={30} />
            </a>
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/jyoti-ranjan-jena-a6b29228b/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black-500 hover:text-blue-700 transition-transform duration-300 ease-in-out transform hover:scale-110"
            >
              <FiLinkedin size={30} />
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
