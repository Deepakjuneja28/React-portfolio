import React from "react";

const About = () => {
  return (
    <div name="about" className=" w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
      <div className=" max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className=" pb-8">
          <p className=" text-4xl font-bold inline border-b-4 border-gray-500">About</p>
        </div>

        <p className=" text-xl mt-20 ">
          I think it's possible to use technology to improve people's lives. I
          have a love for learning about and experimenting with new technologies
          in order to have a beneficial influence on all aspect of the human
          experience. <br /> 
          Playing mobile games, watching cricket, and reading blogs are some of my favourite things to do in my own time.
        </p>
        <p className="text-xl">
        I am currently a third-year computer science student. a
        technology institute called DPG. I'll attest to the fact that I'm a
        good listener and fast learner.
        </p>
      </div>
    </div>
  );
};

export default About;
