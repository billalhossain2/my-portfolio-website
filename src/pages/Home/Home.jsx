import { Link } from "react-router-dom";
import "./Home.css";
import ParticlesCustom from "./ParticlesCustom";
import { FaLinkedin, FaTwitterSquare, FaFacebook } from "react-icons/fa";
const Home = () => {
  return (
    <div className="relative">
      <ParticlesCustom></ParticlesCustom>
      <div className="absolute flex justify-center items-center w-full h-screen pl-5">
        <div>
          <div className="md:text-5xl text-3xl text-[#38BDF8] font-bold space-y-5">
          <h3>Hello, I am Billal Hossain.</h3>
          <h3>Front End Developer</h3>
          </div>
          <div className="mt-7 flex md:flex-row flex-col md:gap-2 gap-5">
          <button className="border-[1px] border-[#38BDF8] px-4 py-2 rounded-md text-[#38BDF8] font-bold hover:bg-[#38BDF8] hover:text-white duration-200 w-[200px]">Hire Me</button>
          <button className="border-[1px] border-[#38BDF8] px-4 py-2 rounded-md text-[#38BDF8] font-bold hover:bg-[#38BDF8] hover:text-white duration-200 w-[200px]">Download Resume</button>
          </div>
          <div className="mt-3 text-[#38BDF8] flex gap-2 text-3xl">
          <Link><FaLinkedin /></Link>
          <Link><FaTwitterSquare /></Link>
          <Link><FaFacebook /></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
