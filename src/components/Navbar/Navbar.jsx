import React from "react";
import logo from "../../assets/logo.png";
import { Link, useLocation } from 'react-router-dom'; // Make sure to import useLocation from react-router-dom

function Navbar() {
  const LinkNavigation = [
    {
      title: "Accueil",
      path: "/",
      cName: "link",
    },
    {
      title: "À propos",
      path: "/about",
      cName: "link",
    },
  ];

  // Get the current location using useLocation()
  const currentLocation = useLocation().pathname;

  return (
    <nav className="navbar_header">
      <img src={logo} alt="logo" className="img_logo"></img>
      <ul className="ul_links">
        {LinkNavigation.map((item, index) => {
          // Check if the current path matches the link's path
          const isActive = currentLocation === item.path;

          return (
            <li key={index} className={item.cName}>
              <Link to={item.path} className={isActive ? "active" : ""}>
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navbar;
