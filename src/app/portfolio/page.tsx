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
                            Here are some of the projects I've worked on.
                        </p>

                        {/* Project Section */}
                        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                            {/* Example Project */}
                            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                                <Image
                                    src="/project1.jpg" // Replace with your project image
                                    alt="Project 1"
                                    width={500}
                                    height={300}
                                    objectFit="cover"
                                />
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-gray-800">Project Title 1</h3>
                                    <p className="mt-2 text-gray-600">
                                        A brief description of the project. Highlight key features, technologies used, etc.
                                    </p>
                                </div>
                            </div>

                            {/* Add more projects below */}
                            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                                <Image
                                    src="/project2.jpg"
                                    alt="Project 2"
                                    width={500}
                                    height={300}
                                    objectFit="cover"
                                />
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-gray-800">Project Title 2</h3>
                                    <p className="mt-2 text-gray-600">
                                        A brief description of the project. Highlight key features, technologies used, etc.
                                    </p>
                                </div>
                            </div>

                            {/* More Projects */}
                            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                                <Image
                                    src="/project3.jpg"
                                    alt="Project 3"
                                    width={500}
                                    height={300}
                                    objectFit="cover"
                                />
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-gray-800">Project Title 3</h3>
                                    <p className="mt-2 text-gray-600">
                                        A brief description of the project. Highlight key features, technologies used, etc.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
            </section>
        </div>
    );
};

export default Portfolio;
