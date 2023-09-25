function scrollToPositionInstantly(posX: number, posY:number){
    window.scrollTo({
        top: posX,
        left: posY,
        // @ts-expect-error [mildly irritated message]
        behavior: "instant"
      });
}

export default scrollToPositionInstantly;