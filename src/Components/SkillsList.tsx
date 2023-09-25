import "./SkillsList.css";

interface SkillsListProps{
    skillsUsed: string[];
    projectId: number;
}

function SkillsList(props:SkillsListProps){
    return <>
        <div className="skills-section">
            {props.skillsUsed.map((current: string, index: number) => (
                <li key={"project-" + props.projectId + " skill " + index}>
                {current}
                </li>
            ))}
        </div>
    </>;
}

export default SkillsList;