import React from "react";
import "./ProjectCard.css";
import "./Common.css";
import {project} from "../Classes/project";
import { useNavigate } from "react-router-dom";
import SkillsList from "./SkillsList";

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
      <img className="project-card-img" src={props.project.$thumbnailLink} alt="Spell sculptor thumbnail"></img>
      <p className="project-card-p">{props.project.$shortDescription}</p>
    </div>
    <div className="skills-area">
      <h4>Skills:</h4>
      <SkillsList skillsUsed={props.project.$skillsUsed} projectId={props.project.$id}></SkillsList>
      {/* {props.project.$skillsUsed.map((current, index) => <li key={"project-" + props.project.$id + " skill " + index}>{current}</li>)} */}
    </div>
  </div>;
}
  
export default ProjectCard;