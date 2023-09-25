import { useState } from "react";
import "./Common.css";
import "./SideBar.css";

function SideBar(){
    const[collapseLinks, setCollapseLinks] = useState<Boolean>(true);
    
    const linksButtonCollapsedText:String = 'Links \u2191';
    const linksButtonOpenText:String = 'Links \u2193';

    function onLinksButtonClicked(){
        setCollapseLinks(!collapseLinks);
    }

    return <ul className="nav-list side-bar-ul">
        <li className="side-bar-li"><a className="side-bar-a" href="#about">About</a></li>
        <li className="side-bar-li"><a className="side-bar-a" href="#projects">Projects</a></li>
        <li className="side-bar-li"><a className="side-bar-a" href="#contact">Contact</a></li>
        <li className="side-bar-li">
            <button className="side-bar-button" onClick={onLinksButtonClicked}>
                {collapseLinks ? linksButtonCollapsedText : linksButtonOpenText}
            </button>
            {collapseLinks ? <></> : 
                <ul className="links-list side-bar-ul">
                    <li className="side-bar-li"><a className="side-bar-a" href="https://www.linkedin.com/in/ethan-hall-706224188" target="_blank">LinkedIn</a></li>
                    <li className="side-bar-li"><a className="side-bar-a" href="https://github.com/EthanPHall" target="_blank">GitHub</a></li>
                    <li className="side-bar-li"><a className="side-bar-a" href="https://itch.io/profile/ephhall" target="_blank">Itch.io</a></li>
                    <li className="side-bar-li"><a className="side-bar-a" href="https://drive.google.com/file/d/1LDa8_q48tfz7wZ2V0OsO29Eif7Sze43U/view?usp=sharing" target="_blank">Resume</a></li>
                </ul>
            }
        </li>
    </ul>
}

export default SideBar;