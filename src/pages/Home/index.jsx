import "./Home.css";
import Headshot from "../../assets/images/edited.png";
import { TypeAnimation } from "react-type-animation";
import ResumePDF from "../../assets/resume/resume.pdf"

import { useEffect } from 'react';
import M from 'materialize-css';

const Home = () => {
  useEffect(() => {
    const elems = document.querySelectorAll('.parallax');
    M.Parallax.init(elems);
  }, []);
  return (
    <div className="flex flex-col px-6 py-8 md:pb-0 md:grid md:grid-rows-3 md:grid-cols-3 gap-4 md:justify-items-center">
      <div className="headshot-container md:row-start-1 md:row-span-4 ">
        <img className="headshot drop-shadow-xl" src={Headshot} alt="" />
      </div>
      <div className="about-me margin-lr z-depth-5  bg-gradient-to-bl opacity-85 border-double shadow-lg from-black to-black rounded-3xl text-white px-6 py-8 flex flex-col justify-center space-y-6 md:row-start-2 md:row-span-2 md:col-span-1">
        <div>
        <h1 className=" ctr text-center text-4xl">
          -Hi, my name is <br /><span className="font-extrabold text-6xl text-orange-600">Ackeem Smith</span>.
        </h1>
      </div>
      <div>
        <h3 className="text-center font-bold uppercase   text-xl">
          <TypeAnimation
            sequence={[
                "I'm a Software Engineer",
                1500,
              "I'm a Full Stack Developer",
              1500,
              "I'm a Frontend Developer",
              1500,
              "I'm a Backend Developer",
              1500,
            ]}
            speed={50}
            repeat={Infinity}
            style={{ fontSize: "1.5em" }}
          />
        </h3>
      </div>
      <div>
        <p className=" text-center text-xl">
          Step into my creative sanctuary, where my mind orchestrates, and my
          fingers dance across the keyboard, crafting inventive solutions one
          keystroke at a time.
        </p>
      </div>
      <div className="flex justify-center">
      <a href={ResumePDF} className="" download='AckeemSmith_Resume_FullStackEngineer' target='_blank' rel='noreferrer'>
                        <button className='teal accent-4 hover:animate-pulse text-slate-800 font-bold py-2 px-4 rounded-xl inline-flex items-center'>
                        <svg className="z-depth-5 hover:animate-bounce fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>

                            Download CV</button>
                        </a>
      </div>
      </div>
    </div>
  );
};

export default Home;
