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

    return <ul className="nav-list">
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
        <li>
            <button onClick={onLinksButtonClicked}>
                {collapseLinks ? linksButtonCollapsedText : linksButtonOpenText}
            </button>
            {collapseLinks ? <></> : 
                <ul className="links-list">
                    <li><a href="https://www.linkedin.com/in/ethan-hall-706224188/" target="_blank">LinkedIn</a></li>
                    <li><a href="https://github.com/EthanPHall" target="_blank">GitHub</a></li>
                    <li><a href="https://itch.io/profile/ephhall" target="_blank">Itch.io</a></li>
                </ul>
            }
        </li>
    </ul>
}

export default SideBar;