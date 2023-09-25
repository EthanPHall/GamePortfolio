import "./MultiImageDisplay.css";

function MultiImageDisplay(props:{images: string[], altTextBase: string}){
    return <div className="image-display">
        {
            props.images.map((currentImagePath, index) => 
            {
                return <img className="MID-img" src={currentImagePath} alt={props.altTextBase + " " + index}></img>;
            })
        }
    </div>;
}

export default MultiImageDisplay;