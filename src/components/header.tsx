// components/Header.js
import Link from "next/link";

export default function Header() {
    return (
        <header className="flex justify-between items-center px-8 py-4 bg-white shadow-md">
            <a href="/"><h1 className="text-2xl font-bold text-indigo-600 cursor-pointer hover:text-pink-500">Vobble Studios</h1></a>
            <nav>
                <ul className="flex space-x-6 text-gray-600">
                    <li><Link href="/" className="hover:text-indigo-600">Home</Link></li>
                    <li><Link href="/about" className="hover:text-indigo-600">About</Link></li>
                    <li><Link href="/portfolio" className="hover:text-indigo-600">Portfolio</Link></li>
                    <li><Link href="/contact" className="hover:text-indigo-600">Contact</Link></li>
                </ul>
            </nav>
        </header>
    );
}
