import React from "react";

function About() {
  return (
    <div
      name="About"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 flex flex-col justify-center w-full h-full mx-auto">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl text-gray-400">
          Hi there! I'm Abhishek Kumar Mandal, a Btech undergrad. I've had the opportunity to work on a variety of exciting projects and collaborate with talented individuals.
          <br /><br />
          My passion for web development started in my 2nd year of college, and since then I've been dedicated to continuously improving my skills and staying up-to-date with industry advancements.
          <br /><br />
          Whether it's designing a website, developing a software application, or solving a complex problem, I approach each project with a creative and analytical mindset. I'm always striving to deliver high-quality results that exceed my clients' expectations.
        </p>
      </div>
    </div>
  );
}

export default About;
