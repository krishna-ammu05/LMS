import Image from "next/image";
//import { Input } from "@/components/ui/input";
//import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-8">
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-10">
        <div className="w-full md:w-1/2 flex justify-center">
          <Image src="/hero-image.png" alt="Learning Illustration" width={500} height={500} />
        </div>
        <div className="w-full md:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold">
            Improve Your Online Learning Experience Better Instantly
          </h1>
          <p className="text-gray-400">
            We have 20k+ online courses & 500k+ registered students. Find your desired courses here.
          </p>
          <div className="flex items-center space-x-2">
            {/* <Input className="flex-1 bg-gray-800 text-white" placeholder="Search Courses..." /> */}
            {/* <Button className="bg-blue-500">🔍</Button> */}
          </div>
          <p className="text-gray-400 flex items-center space-x-2">
            <span>500k+ People already trusted us.</span>
            <a href="#" className="text-green-400 underline">View Courses</a>
          </p>
        </div>
      </div>
    </div>
  );
}
