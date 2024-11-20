// components/Hero.js
import Image from 'next/image';

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 flex items-center px-8"
    >
      {/* Left Section */}
      <div className="w-full md:w-1/2">
        <h1 className="text-5xl font-extrabold text-gray-800">
          Hello! <br />
          I'm <span className="text-indigo-600">Abhishek Kumar Jha</span>
        </h1>
        <p className="text-lg text-gray-600 mt-4">
          Freelance web developer and graphics designer.
        </p>
        <button className="mt-6 bg-pink-500 text-white px-6 py-3 rounded-lg shadow hover:bg-indigo-600 transition-transform transform hover:scale-105">
          Hire Me
        </button>
        <a href="/resume.pdf" className="mt-6 ml-2 bg-indigo-600 text-white px-6 py-3 rounded-lg shadow hover:bg-pink-500 transition-transform transform hover:scale-105" download>
          Resume
        </a>
      </div>

      {/* Right Section */}
      <div className="relative w-full md:w-1/2 flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-tr from-pink-500 to-indigo-600 rounded-lg transform rotate-12"></div>
        <div className="relative w-64 h-64">
          <Image
            src="/profile.png"
            alt="Profile Picture"
            layout="fill"
            className="rounded-full"
          />
        </div>
      </div>
    </section>
  );
}
