import { Link, NavLink } from "react-router-dom";
import profileImg from "../../../assets/images/profile.jpg";
import { useState } from "react";
import Hamburger from 'hamburger-react'
import "./Navbar.css"
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
    <div className="">
      <div className="md:flex hidden justify-between items-center px-5 py-2 bg-gray-700 text-[#38BDF8] font-bold text-[20px] z-50 sticky">
        <div>
          <Link to="/">
          <img
            className="w-12 h-12 rounded-full border-2 border-[#38BDF8]"
            src={profileImg}
            alt="Profile Image"
          />
          </Link>
        </div>
        <ul className="flex gap-10 navLinks">
          {navLinks.map((item, key) => (
            <li key={key}>
              <NavLink to={item.to}>{item.label}</NavLink>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu  */}
      <div className="md:hidden text-[#38BDF8] text-[20px] relative z-50">
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
      <ul className={`flex flex-col items-center gap-5 w-full navLinks absolute h-screen bg-gray-800 pt-10 duration-300 ${isOpen ? 'left-0':'left-[-110%]'}`}>
          {navLinks.map((item, key) => (
            <li key={key}>
              <NavLink to={item.to}>{item.label}</NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
