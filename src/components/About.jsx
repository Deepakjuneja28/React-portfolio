import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className=" w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className=" max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className=" pb-8">
          <p className=" text-4xl font-bold inline border-b-4 border-gray-500">
            ABOUT ME
          </p>
        </div>

        <p className=" text-xl mt-20 ">
          As a third-year computer science student at DPG, I strongly believe in
          the potential of technology to improve people's lives. My passion for
          learning about and experimenting with new technologies is driven by my
          desire to have a positive impact on all aspects of the human
          experience. <br />
        </p>
        <p className="text-xl">
          I am confident in my ability to listen actively and learn quickly, as
          I have developed these skills throughout my academic career. As an
          individual, I am dedicated to utilizing my knowledge and skills to
          contribute to the advancement of technology for the betterment of
          society.
        </p>
      </div>
    </div>
  );
};

export default About;
