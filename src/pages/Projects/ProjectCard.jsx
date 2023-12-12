import React from "react";
import { Link } from "react-router-dom";
import { MdRemoveRedEye } from "react-icons/md";
import { FaCode } from "react-icons/fa";
const ProjectCard = ({ item }) => {
  const {
    image,
    name,
    type,
    features,
    technologies,
    liveLink,
    clientRepoLink,
    serverRepoLink,
  } = item;
  return (
    <div className="text-white flex lg:flex-row flex-col md:mb-10 mb-24 gap-10 lg:items-center">
      <img
        className="lg:w-[400px] w-full md:h-[300px] h-[200px]"
        src={image}
        alt="Project image"
      />
      <div className="space-y-2 bg-gray-900 p-5 shadow-lg">
        <h3 className="text-4xl">{name}</h3>
        <h2 className="text-2xl">{type}</h2>
        <ul className="list-disc list-inside">
          {features.map((feature, key) => (
            <li key={key}>{feature}</li>
          ))}
        </ul>

        <div className="flex md:flex-row flex-col md:gap-5 gap-3 pt-3">
          <Link
            className="border-[1px] border-[#38BDF8] p-2 text-[#38BDF8] hover:bg-[#38BDF8] hover:text-white duration-300 flex items-center gap-1"
            to={liveLink}
          >
            <MdRemoveRedEye className="text-2xl"></MdRemoveRedEye>
            <span>Live site</span>
          </Link>
          <Link
            className="border-[1px] border-[#38BDF8] p-2 text-[#38BDF8] hover:bg-[#38BDF8] hover:text-white duration-300 flex items-center gap-1"
            to={clientRepoLink}
          >
            <FaCode className="text-2xl "></FaCode>
            <span>Client side code</span>
          </Link>
          <Link
            className="border-[1px] border-[#38BDF8] p-2 text-[#38BDF8] hover:bg-[#38BDF8] hover:text-white duration-300 flex items-center gap-1"
            to={serverRepoLink}
          >
            <FaCode className="text-2xl "></FaCode>
            <span>Server side code</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
