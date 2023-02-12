import React from "react";

function Home() {
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch("My_Resume.pdf").then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        // alink.download = "Abhishek_Resume.pdf";
        alink.click();
      });
    });
  };
  return (
    <div
      name="Home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="flex flex-col justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-white font-bold text-4xl sm:text-7xl">
            Full Stack Developer
          </h2>
          <p className="text-gray-500 py-4">
            Currently persuing Btech from Silicon Institute of Technology in Electrical and Electronics Engineering.
          </p>

          <div>
            <a href="./My_Resume.pdf">
              <button
                className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
                onClick={onButtonClick}
              >
                Download CV
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
