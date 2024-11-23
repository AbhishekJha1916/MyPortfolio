"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [textIndex, setTextIndex] = useState(0);
  const [isErasing, setIsErasing] = useState(false);
  const [displayedText, setDisplayedText] = useState("");

  const phrases = [
    "Web Developer",
    "Graphic Designer",
    "Video Editor",
    "Data Analyst",
  ];

  useEffect(() => {
    let timeout;
    const currentPhrase = phrases[textIndex];

    // Control typing and erasing logic with pauses
    if (!isErasing) {
      // Typing Effect
      timeout = setTimeout(() => {
        setDisplayedText(currentPhrase.slice(0, displayedText.length + 1));
      }, 100); // Speed of typing

      // Once the whole phrase is typed, pause for a short time, then start erasing
      if (displayedText === currentPhrase) {
        setTimeout(() => {
          setIsErasing(true);
        }, 1000); // Pause before erasing
      }
    } else {
      // Erasing Effect
      timeout = setTimeout(() => {
        setDisplayedText(currentPhrase.slice(0, displayedText.length - 1));
      }, 100); // Speed of erasing

      // Once all text is erased, move to the next phrase
      if (displayedText === "") {
        setIsErasing(false);
        setTextIndex((prevIndex) => (prevIndex + 1) % phrases.length); // Go to next phrase
      }
    }

    return () => clearTimeout(timeout); // Clear the timeout when component unmounts
  }, [displayedText, isErasing, textIndex]);


  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 flex flex-col md:flex-row items-center justify-center px-8 md:px-16"
    >
      {/* Left Section */}
      <div className="w-full md:w-1/2 mb-6 md:mb-0 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800">
          Hello! <br />
          I&rsquo;m <span className="text-indigo-600">Abhishek Kumar Jha</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mt-4">
          <span className="typing-text">I am a {displayedText}</span>
        </p>
        <div className="mt-6">
          <button className="bg-pink-500 text-white px-6 py-3 rounded-lg shadow hover:bg-indigo-600 transition-transform transform hover:scale-105">
            Hire Me
          </button>
          <Link
            href="/resume.pdf"
            className="mt-4 ml-2 bg-indigo-600 text-white px-6 py-3 rounded-lg shadow hover:bg-pink-500 transition-transform transform hover:scale-105"
            download
          >
            Resume
          </Link>
        </div>
      </div>

      {/* Right Section (Hidden on small screens) */}
      <div className="relative w-full md:w-1/2 min-h-screen items-center justify-center bg-gradient-to-tr from-pink-500 to-indigo-600 hidden md:block">
        <div className="absolute inset-0 z-0">
          <Image
            src="/profile.jpg"
            alt="Profile Picture"
            layout="fill"
            objectFit="contain"
            className="rounded-none"
          />
        </div>
      </div>
    </section>
  );
}
