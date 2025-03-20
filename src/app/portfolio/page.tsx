import React from "react";
import Image from "next/image";
import Header from "@/components/header";

const Portfolio = () => {
    return (
        <div>
            <Header />
            <section className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 px-8 py-16">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h1 className="text-4xl font-bold text-gray-800">My Portfolio</h1>

                    <p className="text-gray-600 mt-4 text-lg">
                        Here are some of the projects I&rsquo;ve worked on.
                    </p>

                    {/* Project Section */}
                    <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                        {/* Echo Chat App */}
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                            <Image
                                src="/project_1.png" // Replace with your project image
                                alt="Echo Chat App"
                                width={500}
                                height={300}
                                objectFit="cover"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-800">Echo Chat App</h3>
                                <p className="mt-2 text-gray-600">
                                    A real-time chat application that enables users to send instant messages 
                                    with a smooth and responsive UI. It features user authentication, private 
                                    and group chats, and real-time updates using WebSockets.
                                </p>
                                <p className="mt-2 text-gray-500 text-sm">
                                    <strong>Technologies Used:</strong> React, Vite, JavaScript, Socket.io, Node.js, MongoDB, Mongoose, JWT, Zustand.
                                </p>
                                <a 
                                    href="https://echo-chatting-app.onrender.com/" // Replace with actual app link
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                                >
                                    View Project
                                </a>
                            </div>
                        </div>

                        {/* Harmony Music Player */}
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                            <Image
                                src="/project_2.png"
                                alt="Harmony Music Player"
                                width={500}
                                height={300}
                                objectFit="cover"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-800">Harmony Music Player</h3>
                                <p className="mt-2 text-gray-600">
                                    A sleek and intuitive music player that allows users to stream and 
                                    manage their favorite songs seamlessly. It includes playlist 
                                    creation, real-time song updates, and a dynamic UI for an enhanced 
                                    listening experience.
                                </p>
                                <p className="mt-2 text-gray-500 text-sm">
                                    <strong>Technologies Used:</strong> React, Vite, JavaScript, Socket.io, Node.js, MongoDB, Mongoose, JWT, Zustand.
                                </p>
                                <a 
                                    href="https://harmoney-music-player.onrender.com/" // Replace with actual app link
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                                >
                                    View Project
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Portfolio;
