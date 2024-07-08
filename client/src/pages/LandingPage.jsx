import React from "react";
import { Link } from "wouter";
import SVG from "../public/hero.svg";

export default function LandingPage() {
  return (
    <div className="flex flex-col gap-20">
      <main className="bg-white relative overflow-hidden">
        <header className="h-24 sm:h-30 flex items-center z-30 w-full dark:bg-blue-900">
          <div className="container mx-auto px-6 flex items-center justify-between">
            <div className="text-blue-900 font-black text-3xl">CodeMorph</div>
            <div className="flex items-center">
              <nav className="font-sen text-black text-lg lg:flex items-center hidden">
                <a
                  href="#hero"
                  className="py-2 px-6 flex hover:underline hover:text-blue-900"
                >
                  Home
                </a>
                <a
                  href="#features"
                  className="py-2 px-6 flex hover:underline hover:text-blue-900"
                >
                  Features
                </a>
                <Link
                  href="/code_converter"
                  className="py-2 px-6 flex hover:underline hover:text-blue-900"
                >
                  Code Converter
                </Link>
                <Link
                  href="/code_explainer"
                  className="py-2 px-6 flex hover:underline hover:text-blue-900"
                >
                  Code Explainer
                </Link>
                <Link
                  href="/about"
                  className="py-2 px-6 flex hover:underline hover:text-blue-900"
                >
                  Contact
                </Link>
              </nav>
              <button className="lg:hidden flex flex-col ml-4">
                <span className="w-6 h-1 bg-blue-900 mb-1"></span>
                <span className="w-6 h-1 bg-blue-900 mb-1"></span>
                <span className="w-6 h-1 bg-blue-900 mb-1"></span>
              </button>
            </div>
          </div>
        </header>
        <div
          id="hero"
          className="bg-white dark:bg-gray-800 flex flex-row  items-center justify-center relative z-20 overflow-hidden"
        >
          <div className="container mx-auto px-6 flex flex-row items-center justify-center relative py-8 mt-0">
            <div className="sm:w-2/3 lg:w-2/5 flex flex-col align-middle justify-center relative z-20 text-left px-20 h-96">
              <span className="w-24 h-3 bg-blue-900 dark:bg-blue-900 mb-8"></span>
              <h1 className="font-bebas-neue  text-5xl font-black leading-none dark:text-white text-blue-900 mb-5">
                CodeMorph
              </h1>
              <p className="text-xl sm:text-lg text-gray-700 dark:text-white mt-5">
                Explore the future of coding with CodeMorph, where artificial
                intelligence meets programming to effortlessly convert languages
                and provide insightful code explanations.
              </p>
            </div>
            <div className="hidden sm:block sm:w-1/3 lg:w-3/5 relative h-full">
              <img
                src={SVG}
                className="max-w-xs md:max-w-xl h-full m-auto"
                alt="Illustration"
              />
            </div>
          </div>
        </div>
      </main>

      {/* Why Choose Us */}
      <div className="sm:flex items-center max-w-screen-xl">
        <div className="sm:w-1/2 p-10">
          <div className="image object-center text-center">
            <img src="https://i.imgur.com/WbQnbas.png" alt="About Us Image" />
          </div>
        </div>
        <div className="sm:w-1/2 p-5">
          <div className="text">
            <h2 className="my-4 font-bold text-3xl sm:text-4xl ">
              Why Choose <span className="text-blue-600">CodeMorph</span> ?
            </h2>
            <ul className="list-disc list-inside text-gray-700 bg-blue-200 p-4 rounded-md shadow-md text-lg">
              <li className="mb-2">
                AI-Powered Efficiency: CodeMorph leverages AI to automate
                language conversion and provide in-depth code explanations,
                saving time and effort compared to traditional tools.
              </li>
              <li className="mb-2">
                Enhanced Accuracy: With advanced AI algorithms, CodeMorph
                ensures precise language translations and detailed code
                insights, reducing errors and improving code quality.
              </li>
              <li className="mb-2">
                Intuitive User Experience: Designed with user-friendly
                interfaces and intuitive features, CodeMorph offers a seamless
                experience for developers of all skill levels.
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Features */}
      <section
        id="features"
        className="container mx-auto px-4 space-y-6 bg-blue-50 py-8 md:py-12 lg:py-20"
      >
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl leading-tight text-blue-900">
              Features
            </h2>
            <p className="max-w-3xl mx-auto mt-2 text-base text-blue-600">
              Enhance your coding experience with these powerful features.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
            {/* Feature 1 */}
            <div className="relative overflow-hidden rounded-lg border border-blue-200 bg-white shadow-md transition transform duration-500 ease-in-out hover:scale-105 hover:shadow-2xl">
              <div className="p-6">
                <h3 className="font-bold text-lg text-blue-900 mb-2">
                  AI-Powered Language Conversion
                </h3>
                <p className="text-sm text-blue-700">
                  Utilize advanced AI algorithms to seamlessly convert code
                  between programming languages with high accuracy.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="relative overflow-hidden rounded-lg border border-blue-200 bg-white shadow-md transition transform duration-500 ease-in-out hover:scale-105 hover:shadow-2xl">
              <div className="p-6">
                <h3 className="font-bold text-lg text-blue-900 mb-2">
                  Code Explanation and Insights
                </h3>
                <p className="text-sm text-blue-700">
                  Gain detailed explanations and insights into code snippets,
                  enhancing understanding and improving code quality.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="relative overflow-hidden rounded-lg border border-blue-200 bg-white shadow-md transition transform duration-500 ease-in-out hover:scale-105 hover:shadow-2xl">
              <div className="p-6">
                <h3 className="font-bold text-lg text-blue-900 mb-2">
                  Intelligent Code Suggestions
                </h3>
                <p className="text-sm text-blue-700">
                  Receive intelligent suggestions for optimizing and refactoring
                  code, based on best practices and AI-driven insights.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="bg-white">
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-gray-900 text-3xl font-bold sm:text-4xl">
              Revolutionize Your Workflow with AI-driven Solutions
            </h2>
            <p className="mt-5 text-gray-700">
              Introducing CodeAI: Your personalized AI assistant that
              streamlines tasks, optimizes processes, and enhances coding
              efficiency, so you can focus on innovation and quality.
            </p>
          </div>

          <div className="flex justify-center mt-8 space-x-4">
            <a
              href="/code_converter"
              className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-full duration-150 flex items-center justify-center gap-x-1 h-12 shadow-md focus:ring ring-blue-600 focus:outline-none"
            >
              Convert Code
            </a>
            <a
              href="/code_explainer"
              className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-full duration-150 flex items-center justify-center gap-x-1 h-12 shadow-md focus:ring ring-blue-600 focus:outline-none"
            >
              Explain Code
            </a>
          </div>
        </section>
      </div>

      {/* Open Source */}
      <div className="bg-blue-200 py-6 px-8 mt-8 w-[50%] mx-auto rounded-lg shadow-md text-center">
        <p className="text-blue-900 text-lg font-semibold mb-2">
          Open Source on GitHub
        </p>
        <p className="text-blue-900 mb-4">
          Explore our code repository on GitHub to see how we build and maintain
          our app. Your contributions are welcome!
        </p>
        <a
          href="https://github.com/jyoti-ranjan-jena"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg py-3 px-6 transition duration-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          View on GitHub
        </a>
      </div>

      {/* Footer */}
      <footer id="contact" className="bg-white">
        <div className="container px-4 mx-auto">
          <p className="py-5 md:pb-10 text-md text-gray-400 font-medium text-center">
            © 2024 CodeMorph. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
