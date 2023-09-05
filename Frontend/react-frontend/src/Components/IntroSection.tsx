import portrait from '../Assets/Profile Picture.jpg';
import './IntroSection.css';

function IntroSection(){
    return <>
        <div className='intro'>
            <img className='portrait' src={portrait} alt="Me" ></img>
            <p></p>
        </div>
    </>
}

export default IntroSection;