import project from '../Classes/project';
import './ProjectSection.css';
import './Common.css';
import ProjectCard from './ProjectCard';

function ProjectSection(){
    const project1 = new project(
        "https://i.imgur.com/HxspyyS.png", 
        [],
        [], 
        ["Unity", "A* Search (Pathing)", "C#", "Enemy AI", "Tutorial Design"],
        "A proof of concept dungeon crawler in which the player can find spell components and combine them into unique spells that they can use to better fight the enemies, and eventually boss, of the dungeon.", 
        "A proof of concept dungeon crawler in which the player can find spell components and combine them into unique spells that they can use to better fight the enemies, and eventually boss, of the dungeon.", 
        "https://ephhall.itch.io/spell-sculptor"
    );
    const project2 = new project(
        "https://i.imgur.com/FLHa1cu.png", 
        [],
        [], 
        ["Unity", "State Machines", "C#", "Platformer Design", "Tutorial Design"],
        "A proof of concept Metroidvania in which the player uses their grappling hook and psychic powers to explore and complete a tutorial level.", 
        "A proof of concept Metroidvania in which the player uses their psychic powers to explore and complete a tutorial level.", 
        "https://ephhall.itch.io/atlas-will-fall"
    );

    let projects:project[] = 
    [
        project1, 
        project2
    ];

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