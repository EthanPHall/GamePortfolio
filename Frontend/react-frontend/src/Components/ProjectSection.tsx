import project from '../Classes/project';
import './ProjectSection.css';
import './Common.css';
import ProjectCard from './ProjectCard';

function ProjectSection(){
    let projects:project[] = [new project(), new project(), new project()];
    let projectCards:ProjectCard[] = [];

    return <>
        <div className='container'>
            <div className='project-grid main-section'>
                <ProjectCard></ProjectCard>
                <ProjectCard></ProjectCard>
                <ProjectCard></ProjectCard>
            </div>
        </div>
    </>;
}

export default ProjectSection;