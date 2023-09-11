import project from '../Classes/project';
import './ProjectSection.css';
import './Common.css';
import ProjectCard from './ProjectCard';

function ProjectSection(){
    let projects:project[] = [new project(), new project(), new project()];
    let projectCards:typeof ProjectCard[] = [];

    return <>
        <div className='container' id="projects">
            <div className='main-section'>
                <h2>Projects</h2>
                <div className='project-grid'>
                    <ProjectCard></ProjectCard>
                    <ProjectCard></ProjectCard>
                    <ProjectCard></ProjectCard>
                </div>
            </div>
        </div>
    </>;
}

export default ProjectSection;