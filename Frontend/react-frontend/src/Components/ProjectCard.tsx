import React from "react";
import "./ProjectCard.css";
import "./Common.css";
import {project} from "../Classes/project";
import { useNavigate } from "react-router-dom";

interface projectCardProps{
  project: project;
}

function ProjectCard(props: projectCardProps) {
  const navigate = useNavigate();
  
  function handleNavigatingToProjectPage(){
    navigate("/project/" + props.project.$id);
  }

  return <div className="card" onClick={handleNavigatingToProjectPage}>
    <div className="image-and-description">
      <h3>{props.project.$title}</h3>
      <img src={props.project.$thumbnailLink} alt="Spell sculptor thumbnail"></img>
      <p>{props.project.$shortDescription}</p>
    </div>
    <div className="skills-area">
      <h4>Skills:</h4>
      {props.project.$skillsUsed.map((current, index) => <li key={"project-" + props.project.$id + " skill " + index}>{current}</li>)}
    </div>
  </div>;
}
  
export default ProjectCard;