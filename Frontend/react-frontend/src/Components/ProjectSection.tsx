import {project} from '../Classes/project';
import './ProjectSection.css';
import './Common.css';
import ProjectCard from './ProjectCard';
import projects from '../Assets/projects';

function ProjectSection(){
    return <>
        <div className='container' id="projects">
            <div className='main-section'>
                <h2>Projects</h2>
                <div className='project-grid'>
                    {projects.map(current => <ProjectCard project={current}></ProjectCard>)}
                </div>
            </div>
        </div>
    </>;
}

export default ProjectSection;