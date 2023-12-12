import PageHeaderContent from "../../components/PageHeaderContent";
import "./About.css";
import { Animate } from "react-simple-animate";
import profileImg from "../../assets/images/profile.jpg"

// icons
import { FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { Helmet } from "react-helmet";
const About = () => {
  return (
    <div>
      <Helmet>
        <title>Billal Hossain | About</title>
      </Helmet>

      <PageHeaderContent title="About Me">
      </PageHeaderContent>

      <div className="flex lg:flex-row flex-col lg:overflow-hidden gap-10 bg-gray-800">
        <Animate
          play
          delay={0.1}
          duration={1.5}
          start={{
            transform: "translateX(-800px)",
          }}
          end={{
            transform: "translateX(0px)",
          }}
        >
          <img className="md:w-64 w-44 md:h-64 h-44 rounded-full ml-3 my-5" src={profileImg} alt="Profile Image" />
          <p className="pl-3 text-gray-400 border-b-2 border-[#38bff818] lg:max-w-[700px] lg:pb-5">
            Hi, I'm Billal Hossain, a front-end web developer dedicated to
            bringing digital ideas to life. Proficient in HTML, CSS, and
            JavaScript, I specialize in creating visually appealing and
            responsive websites. I thrive in collaborative environments, working
            closely with teams to turn concepts into seamless user experiences.
            With a passion for user-centric design, I focus on every detail to
            optimize performance and enhance accessibility. Let's collaborate
            and build something extraordinary for your digital presence!
          </p>


                    {/* Personal Info  */}
      <div className="pt-10 bg-gray-800">
      <h3 className="text-2xl text-[#38BDF8] pb-3 font-bold pl-2">
        Personal Information
      </h3>
      <div className="pl-2 text-gray-400 space-y-4 pb-10 bg-gray-800">
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

        </Animate>

        <Animate
          play
          duration={1.5}
          start={{
            transform: "translateX(700px)",
          }}
          end={{
            transform: "translateX(0)",
          }}
        >
          <div className="wrapper lg:pb-0 pb-16 lg:absolute lg:ml-0 ml-8">
            <div className="services-wrapper md:w-[300px] md:h-[300px] w-[200px] h-[200px] lg:mt-10">
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
    </div>
  );
};

export default About;
