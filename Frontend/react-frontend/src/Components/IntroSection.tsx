import portrait from '../Assets/Profile Picture.jpg';
import './IntroSection.css';
import './Common.css';

function IntroSection(){
    return <>
        <div className='container'>
            <img className='portrait' src={portrait} alt="portrait" ></img>
            <p className='description main-section'>
                Hi, and thank you for checking out this portfolio! My name is Ethan, 
                and I'm an aspiring game developer based out of Kentucky. I'm a graduate of
                the Univeristy of Kentucky, where I earned my Bachelor's in Computer Science.
                <br></br>
                <br></br>
                You know that melancholy feeling you get when you beat a really good game? 
                That strong mix of "happy it happened" and "sad it's over"? That's what inspired
                me to pursue this field. I want to make great games that can evoke that 
                feeling in others.
                <br></br>
                <br></br>
                I'm currently looking for work so, if you like what you see, feel free
                to contact me! I'm always excited to explore new game development oportunities.
            </p>
        </div>
    </>
}

export default IntroSection;