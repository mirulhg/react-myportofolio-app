import React from "react";
import "./Skills.css";

function Skills() {
  return (
    <div className="card">
      <h2>Skills</h2>
      <div className="card-group-skills">
        <div className="card-skills">
          <h3>ReactJS</h3>
          <p>⭐⭐</p>
        </div>
        <div className="card-skills">
          <h3>Javascript</h3>
          <p>⭐</p>
        </div>
        <div className="card-skills">
          <h3>HTML/CSS</h3>
          <p>⭐⭐⭐</p>
        </div>
        <div className="card-skills">
          <h3>NextJS</h3>
          <p>⭐</p>
        </div>
      </div>
      <h2>Soft Skills</h2>
      <div className="card-group-skills">
        <div className="card-skills">
          <li>Kolaborasi Team</li>
          <li>Komunikasi</li>
          <li>Problem Solving</li>
          <li>Manajemen Waktu</li>
        </div>
      </div>
    </div>
  );
}

export default Skills;
