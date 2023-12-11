import { Link } from "react-router-dom";
import "./Home.css";
import ParticlesCustom from "./ParticlesCustom";
import { FaLinkedin, FaTwitterSquare, FaFacebook } from "react-icons/fa";
import { Animate } from "react-simple-animate";
const Home = () => {
  return (
    <div className="relative">
      <ParticlesCustom></ParticlesCustom>
      <div className="absolute flex justify-center items-center w-full h-screen pl-1">
        <div>
          <div className="md:text-5xl text-2xl text-[#38BDF8] font-bold space-y-5 name-and-designation">
            <h1>Hello, I am Billal Hossain.</h1>
            <h1>Front End Developer</h1>
          </div>
          {/* Animation  */}
          <Animate
          play
          delay={0.2}
          duration={1}
          start={{
            transform:'translateY(400px)'
          }}
          end={{
            transform:'translateY(0)'
          }}
          >
            <div className="mt-7 flex md:flex-row flex-col md:gap-2 gap-5">
              <button className="border-[1px] border-[#38BDF8] px-4 py-2 rounded-md text-[#38BDF8] font-bold hover:bg-[#38BDF8] hover:text-white duration-200 w-[200px]">
                Hire Me
              </button>
              <button className="border-[1px] border-[#38BDF8] px-4 py-2 rounded-md text-[#38BDF8] font-bold hover:bg-[#38BDF8] hover:text-white duration-200 w-[200px]">
                Download Resume
              </button>
            </div>
            <div className="mt-3 text-[#38BDF8] flex gap-2 text-3xl">
              <Link>
                <FaLinkedin />
              </Link>
              <Link>
                <FaTwitterSquare />
              </Link>
              <Link>
                <FaFacebook />
              </Link>
            </div>
          </Animate>
        </div>
      </div>
    </div>
  );
};

export default Home;
