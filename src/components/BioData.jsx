import React from "react";
import About from "./About.jsx";
import "./BioData.css";

const BioData = () => {
  return (
    <div>
      <div className="card">
        <div className="card-group">
          <label htmlFor="">Nama</label>
          <p>Amirul Muwahiddin Noor</p>
          <button>About</button>
          <button>Bio</button>
          <button>My Projects</button>
          <button>Contact</button>
          <About />
        </div>
      </div>
    </div>
  );
};

export default BioData;
