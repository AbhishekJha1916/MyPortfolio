'use client';

import { useState, FormEvent } from "react";
import Header from "@/components/header";

const Contact = () => {
    // State for form fields
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        // Handle form submission (e.g., send form data to an API or email)
        console.log(formData);
    };

    return (
        <div>
            <Header />
            <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 px-8 py-16">
                <div className="max-w-7xl mx-auto px-6">
                    <h1 className="text-3xl font-bold text-center text-gray-800">Contact Me</h1>
                    <p className="text-center text-lg mt-4 text-gray-600">
                        I'd love to hear from you. Please fill out the form below to get in touch!
                    </p>

                    <div className="mt-10 max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
                        <form onSubmit={handleSubmit}>
                            {/* Name Input */}
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
                                />
                            </div>

                            {/* Email Input */}
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
                                />
                            </div>

                            {/* Message Input */}
                            <div className="mb-4">
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={4}
                                    className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
                                />
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full py-3 px-6 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 focus:outline-none"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
