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

    return <ul>
    <li><a href="#about">About</a></li>
    <li><a href="#projects">Projects</a></li>
    <li><a href="#contact">Contact</a></li>
    <li>
        <button onClick={onLinksButtonClicked}>
            {collapseLinks ? linksButtonCollapsedText : linksButtonOpenText}
        </button>
    </li>
  </ul>

}

export default SideBar;