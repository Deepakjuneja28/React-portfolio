import React from "react";

const About = () => {
  return (
    <div name="about" className=" w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
      <div className=" max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className=" pb-8">
          <p className=" text-4xl font-bold inline border-b-4 border-gray-500">About Us</p>
        </div>

        <p className=" text-xl mt-20 ">
          We think it's possible to use technology to improve people's lives. we
          have a love for learning about and experimenting with new technologies
          in order to have a beneficial influence on all aspect of the human
          experience. <br /> 
        </p>
        <p className="text-xl">
        We are currently a third-year computer science students. a
        technology institute called DPG. We will attest to the fact that We are
        good listener and fast learner.
        </p>
      </div>
    </div>
  );
};

export default About;
