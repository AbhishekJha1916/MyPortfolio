import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
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
          Freelance web developer and graphics designer.
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

      {/* Right Section */}
      <div className="relative w-full md:w-1/2 min-h-screen flex items-center justify-center bg-gradient-to-tr from-pink-500 to-indigo-600">
        <div className="absolute inset-0 z-0">
          <Image
            src="/profile.jpg" // Your profile image
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
