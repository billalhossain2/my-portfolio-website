import { Helmet } from "react-helmet";
import PageHeaderContent from "../../components/PageHeaderContent";
import "./Projects.css";
import ProjectCard from "./ProjectCard";
const projectDetails = [
  {
    image: "https://i.ibb.co/jyJ9cQ4/fitness-Hub.png",
    name: "Fitness Hub",
    type: "Full-stack MERN Project",
    features: [
      "Users must authenticate to access their dashboards and features.",
      "Each role has a dashboard with features to their needs and responsibilities.",
      "Users can pay for the services they book directly through the platform.",
    ],
    technologies: [
      "React",
      "Express",
      "Mongodb",
      "Tailwind CSS",
      "JWT",
      "Firebase Auth",
      "",
      "",
    ],
    liveLink: "https://fitnesshub-3f0fd.web.app/",
    clientRepoLink: "https://github.com/billalhossain2/fitnessHub-client",
    serverRepoLink: "https://github.com/billalhossain2/fitnessHub-server",
  },

  {
    image: "https://i.ibb.co/VpyVWtF/Job-Fusion.png",
    name: "Job Fusion",
    type: "Full-stack MERN Project",
    features: [
      "Employers can review and manage bid requests from job seekers.",
      "Job seekers can submit bids for job opportunities.",
      "Employers can post job listing with details.",
    ],
    technologies: [
      "React",
      "Tailwind CSS",
      "Express",
      "Mongodb",
      "JWT",
      "Firebase Auth",
    ],
    liveLink: "https://jobfusiononline.web.app/",
    clientRepoLink:
      "https://github.com/billalhossain2/crud-with-auth-client-side",
    serverRepoLink:
      "https://github.com/billalhossain2/client-with-auth-server-side",
  },

  {
    image: "https://i.ibb.co/tbFYt1j/event-management-project.png",
    name: "Event Masters",
    type: "Front End Project",
    features: [
      "Users can view event services, helping them make informed decisions.",
      "Users can create accounts and log in using their email and password.",
      "Booking and Blog are protected which can be accessed after login.",
    ],
    technologies: ["React", "Tailwind CSS", "Firebase Auth"],
    liveLink: "https://eventmastershub.web.app",
    clientRepoLink: "https://github.com/billalhossain2/event-management",
    serverRepoLink: "",
  },
];
const Projects = () => {
  return (
    <div className="h-[100%] bg-gray-800">
      <Helmet>
        <title>Billal Hossain | Projects</title>
      </Helmet>
      <PageHeaderContent title="Projects"></PageHeaderContent>

      <div className="pt-5 pb-10 w-[80%] mx-auto">
        {
          projectDetails.map((item, key) => (<ProjectCard key={key} item={item}></ProjectCard>))
        }
      </div>
    </div>
  );
};

export default Projects;
