import React, { useState } from "react";
import "./BioData.css";
import { BIODATA } from "../../data.js";

import TabButton from "./TabButton.jsx";

import About from "./About.jsx";
import Contact from "./Contact.jsx";
import MyProject from "./MyProject.jsx";

function BioData() {
  const [selectedTopic, setSelectedTopic] = useState("about");
  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }
  return (
    <div>
      <div className="card">
        <div className="card-group">
          <label htmlFor="">Nama</label>
          <p>Amirul Muwahiddin Noor</p>
          <div className="button-group">
            <TabButton onSelect={() => handleSelect("about")}>About</TabButton>
            <TabButton onSelect={() => handleSelect("bio")}>Bio</TabButton>
            <TabButton onSelect={() => handleSelect("projects")}>
              My Projects
            </TabButton>
            <TabButton onSelect={() => handleSelect("contact")}>
              Contact
            </TabButton>
          </div>
        </div>
        <div className="card-props">
          <div className="card-about">
            <h2>{BIODATA[selectedTopic].title}</h2>
            <p>{BIODATA[selectedTopic].description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BioData;
