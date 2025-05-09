"use client";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Sun, Moon } from "lucide-react";
import homeimage from "@/app/images/home page picture.jpg"

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? "min-h-screen bg-gray-900 text-white" : "min-h-screen bg-white text-gray-900"}>
      {/* Navbar */}
      <nav className="flex justify-between items-center p-6 max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold">NeoLearn</h1>
        <ul className="flex space-x-6">
          <li><a href="#" className="hover:text-blue-400 text-xl">Home</a></li>
          <li><a href="#" className="hover:text-blue-400 text-xl">Courses</a></li>
          <li><a href="#" className="hover:text-blue-400 text-xl">About</a></li>
          <li><a href="#" className="hover:text-blue-400 text-xl">Policy</a></li>
          <li><a href="#" className="hover:text-blue-400 text-xl">FAQ</a></li>
        </ul>
        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
        </button>
      </nav>
      
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center p-8 max-w-6xl mx-auto md:flex-row gap-10">
        <div className="w-full md:w-1/2 flex justify-center">
          <Image src={homeimage} alt="Learning Illustration" width={500} height={500} />
        </div>
        <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold">
            Improve Your Online Learning Experience Better Instantly
          </h1>
          <p className="text-gray-400">
            We have 20k+ online courses & 500k+ registered students. Find your desired courses here.
          </p>
          <div className="flex items-center space-x-2">
            <Input className="flex-1 bg-gray-800 text-white" placeholder="Search Courses..." />
            <Button className="bg-blue-500">🔍</Button>
          </div>
          <p className="text-gray-400 flex items-center space-x-2">
            <span>500k+ People already trusted us.</span>
            <a href="#" className="text-green-400 underline">View Courses</a>
          </p>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-6">
        <div className="bg-white shadow-lg p-6 rounded-lg text-center text-gray-900">
          <div className="text-blue-500 text-5xl">🎓</div>
          <h2 className="text-xl font-semibold mt-4">Learn From Experts</h2>
          <p className="text-gray-600 mt-2">Unparalleled expertise from industry leaders, ensuring you receive top-tier knowledge.</p>
        </div>
        <div className="bg-white shadow-lg p-6 rounded-lg text-center text-gray-900">
          <div className="text-red-500 text-5xl">🏅</div>
          <h2 className="text-xl font-semibold mt-4">Earn a Certificate</h2>
          <p className="text-gray-600 mt-2">Earn a prestigious certificate, validating your expertise and dedication to continuous learning.</p>
        </div>
        <div className="bg-white shadow-lg p-6 rounded-lg text-center text-gray-900">
          <div className="text-green-500 text-5xl">📚</div>
          <h2 className="text-xl font-semibold mt-4">Engaging Courses</h2>
          <p className="text-gray-600 mt-2">Extensive courses, covering a wide array of subjects, to find the perfect learning journey just for you.</p>
        </div>
      </div>
    </div>
  );
}
