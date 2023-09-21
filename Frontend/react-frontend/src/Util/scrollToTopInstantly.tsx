function scrollToTopInstantly(){
    window.scrollTo({
        top: 0,
        left: 0,
        // @ts-expect-error [mildly irritated message]
        behavior: "instant"
      });
}

export default scrollToTopInstantly;