import React from "react";

function Home() {
  return (
    <div className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800">
      <div className="flex flex-col justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-white font-bold text-4xl sm:text-7xl">
            Full Stack Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            Currently. I am persuing btech from Silicon Institute of Technology.
            I love to work on web application using technologies like React,
            Tailwind CSS, Node.js, Express.js, MongoDB, and Firebase.
          </p>

          <div>
            <button className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
              Download CV
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
