import PageHeaderContent from "../../components/PageHeaderContent";
import "./About.css";
import { Animate } from "react-simple-animate";

// icons
import { FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
const About = () => {
  return (
    <div>
      <PageHeaderContent title="About Me"></PageHeaderContent>
      <div className="flex lg:flex-row flex-col lg:overflow-hidden gap-10 bg-gray-800">
        <Animate
          play
          duration={1}
          start={{
            transform: "translateX(-1900px)",
          }}
          end={{
            transform: "translateX(0px)",
          }}
        >
          <p className="p-5 text-gray-400 border-b-2 border-[#38bff818] lg:max-w-[700px] lg:py-14">
            Hi, I'm Billal Hossain, a front-end web developer dedicated to
            bringing digital ideas to life. Proficient in HTML, CSS, and
            JavaScript, I specialize in creating visually appealing and
            responsive websites. I thrive in collaborative environments, working
            closely with teams to turn concepts into seamless user experiences.
            With a passion for user-centric design, I focus on every detail to
            optimize performance and enhance accessibility. Let's collaborate
            and build something extraordinary for your digital presence!
          </p>

        </Animate>

        <Animate
          play
          duration={1}
          start={{
            transform: "translateX(1200px)",
          }}
          end={{
            transform: "translateX(0)",
          }}
        >
          <div className="wrapper mt-8 lg:absolute lg:ml-0 ml-8">
            <div className="services-wrapper md:w-[200px] md:h-[200px] w-[170px] h-[170px]">
              <div>
                <FaReact></FaReact>
              </div>
              <div>
                <FaNodeJs></FaNodeJs>
              </div>
              <div>
                <FaDatabase></FaDatabase>
              </div>
              <div>
                <SiRedux></SiRedux>
              </div>
            </div>
          </div>
        </Animate>
      </div>


             {/* Personal Info  */}
      <div className="pt-10 bg-gray-800">
      <h3 className="text-2xl text-[#38BDF8] pb-3 font-bold pl-5">
        Personal Information
      </h3>
      <div className="pl-5 text-gray-400 space-y-4 pb-10 bg-gray-800">
        <p>
          <span className="border-b-2 border-[#38BDF8] pb-1">Name</span>: Billal
          Hossain
        </p>
        <p>
          <span className="border-b-2 border-[#38BDF8] pb-1">Age</span>: 27
        </p>
        <p>
          <span className="border-b-2 border-[#38BDF8] pb-1">Address</span>:
          Comilla, Bangladesh
        </p>
        <p>
          <span className="border-b-2 border-[#38BDF8] pb-1">Email</span>:
          billalhossain.webdev@gmail.com
        </p>
        <p>
          <span className="border-b-2 border-[#38BDF8] pb-1">Contact No</span>:
          +8801311123533
        </p>
      </div>
      </div>
    </div>
  );
};

export default About;
