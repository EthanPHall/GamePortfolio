function MultiImageDisplay(props:{images: string[]}){
    return <div className="image-display">
        {
            props.images.map(currentImagePath => 
            {
                return <></>;
            })
        }
    </div>;
}

export default MultiImageDisplay;