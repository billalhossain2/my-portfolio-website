import { Link } from "react-router-dom";
import profileImg from "../../../assets/images/profile.jpg";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import Hamburger from 'hamburger-react'
const navLinks = [
  {
    label: "Home",
    to: "/",
  },
  {
    label: "About",
    to: "/about",
  },
  {
    label: "Contact",
    to: "/contact",
  },
  {
    label: "Skills",
    to: "/skills",
  },
  {
    label: "Projects",
    to: "/projects",
  },
];

const Navbar = () => {
    // const [isShow, setIsShow] = useState(false);
    const [isOpen, setOpen] = useState(false)

  return (
    <div>
      <div className="md:flex hidden justify-between items-center px-5 py-2 bg-gray-700 text-white text-[20px]">
        <div>
          <img
            className="w-12 h-12 rounded-full"
            src={profileImg}
            alt="Profile Image"
          />
        </div>
        <ul className="flex gap-10">
          {navLinks.map((item, key) => (
            <li key={key}>
              <Link to={item.to}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu  */}
      <div className="md:hidden text-gray-200 text-[20px] relative">
        <div className="bg-gray-900 flex justify-between items-center p-3 border-b-[1px] border-gray-600">
        <div>
          <img
            className="w-12 h-12 rounded-full"
            src={profileImg}
            alt="Profile Image"
          />
        </div>
        <div>
            {/* {isShow ?  <RxCross2 /> : <FiMenu />} */}
            <Hamburger toggled={isOpen} toggle={setOpen} />
            </div>
        </div>
      <ul className={`flex flex-col items-center gap-5 w-full absolute h-screen bg-gray-800 pt-10 duration-300 ${isOpen ? 'left-0':'left-[-110%]'}`}>
          {navLinks.map((item, key) => (
            <li key={key}>
              <Link to={item.to}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
