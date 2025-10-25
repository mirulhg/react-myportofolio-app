import React from "react";
import Img from "../assets/portofolio-me.jpg";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-container">
      <div className="">
        <img src={Img} alt="foto-profil" />
        <h1>/dev.myrules/</h1>
        <h1>Welcome To My Portofolio</h1>
      </div>
      <h2>FrontEnd Developer | ReactJS Learner</h2>
    </div>
  );
};

export default Header;
