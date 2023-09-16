import React from "react";
import "./ProjectCard.css";
import "./Common.css";
import project from "../Classes/project";

interface projectCardProps{
  project: project;
}

function ProjectCard(props: projectCardProps) {
  console.log(props.project);

  return <div className="card">
    <div className="image-and-description">
      <img src={props.project.$thumbnailLink} alt="Spell sculptor thumbnail"></img>
      <p>{props.project.$shortDescription}</p>
    </div>
    <div className="skills-area">
      <h4>Skills:</h4>
      {props.project.$skillsUsed.map(current => <li>{current}</li>)}
    </div>
  </div>;
}
  
export default ProjectCard;