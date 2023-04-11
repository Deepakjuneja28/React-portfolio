import React from 'react'
// import HeroImage from "../assets/HeroImage.png" 
import {MdKeyboardArrowRight} from 'react-icons/md'
import {Link} from 'react-scroll';

const Home = () => {
  return (
    <div name="home" className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800">
        <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
            <div className="flex flex-col justify-center h-full">
                <h2 className="text-3xl sm:text-7xl font-bold text-white">Hi.. <br /> Welcome to Our Portfolio</h2>
                <p className="text-gray-500 py-4 max-w-md">
                Web development and programable stuff are our areas of interest as a computer science students. <br />
                Contact us through our social media links and let's connect.
                </p>
                <div>
                    <Link to='portfolio' smooth duration={600} className= "group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer ">
                        Portfolio
                        <span className="group-hover:rotate-90 duration-300 group-hover:scale-100 ">
                            <MdKeyboardArrowRight size={25} className="ml-1"/></span>
                    </Link>
                </div>
            </div>
            <div>
                {/* <img src={HeroImage} alt="My profile" className="rounded-2xl mx-auto w-1/3 md:w-full " /> */}
            </div>
        </div>
    </div>
  )
}

export default Home