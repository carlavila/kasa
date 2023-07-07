import React from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

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

  return (
    <nav className="navbar_header">
      <img src={logo} alt="logo" className="img_logo"></img>
      <ul className="ul_links">
        {LinkNavigation.map((item, index) => {
          return (
            <li key={index} className={item.cName}>
              <Link to={item.path}>{item.title}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navbar;
