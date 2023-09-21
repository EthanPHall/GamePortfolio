import "./Common.css";
import "./ProjectPage.css";

import projects from "../Assets/projects";
import { useParams } from "react-router-dom";
import { project, section } from "../Classes/project";
import MultiImageDisplay from "./MultiImageDisplay";
import { useEffect } from "react";
import scrollToTopInstantly from "../Util/scrollToTopInstantly";

function ProjectPage() {
  useEffect(() => {
    scrollToTopInstantly();
  }, []);
  
  const params = useParams();
  const projectId = params.projectId ? params.projectId : 1;

  const project: project = projects[Number(projectId) - 1];

  return (
    <div className="App">
      <div className="container">
        <div className="main-section">
          <h1>{project.$title}</h1>
          <h3>Download from: <a href={project.$downloadLink} target="_blank">{project.$downloadLink}</a></h3>
          {project.$videosLinks.length > 0 ? <iframe src={project.$videosLinks[0]}></iframe> : <></>}
          {project.$projectPageSections.map((current: section) => {
            return (
              <div className="project-page-section">
                {current.$title != "" ? <h2 className="section-header">{current.$title}</h2> : <></>}
                {current.$mainImage != "" ? <img className="section-image" src={current.$mainImage}></img> : <></>}
                {current.$content != "" ? <p className="section-content">{current.$content}</p> : <></>}
                {current.$images.length != 0 ? <MultiImageDisplay images={current.$images} altTextBase={project.$title + " Screenshot"}></MultiImageDisplay> : <></>}
              </div>
            );
          })}
          <h2>Skills Used</h2>
          <div className="skills-section">
            {project.$skillsUsed.map((current: string, index: number) => (
              <li key={"project-" + project.$id + " skill " + index}>
                {current}
              </li>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectPage;
