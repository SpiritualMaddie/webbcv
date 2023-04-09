import React, {useEffect, useState} from "react"
import picMe from '../img/me.png';

const PresentationPage = () => {
    const [bgColor, setBgColor] = useState('#75924269');
    
    const handleClick = () => {
        bgColor === '#75924269' 
        ? setBgColor('#2170749c') && 
        (document.body.style.backgroundColor = bgColor) 
        : setBgColor('#75924269') && 
        (document.body.style.backgroundColor = bgColor);
    }
    
    useEffect(() => {
        document.body.style.backgroundColor = bgColor;
    }, [bgColor])

    return (
       <div>
        <section className="main-content">
            <section>
                <h2 className="col">Presentation</h2><br />
                <img className="profile-pic-big" src={picMe} alt="Picture of me"/>
            </section>
            <section className='col'>
                <br />
                <p>
                My name is Madde Lundström, and I am a software development student 
                with a passion for design, creativity, and video 
                <button
                className='changeBgBtn'
                onClick = {
                    () => {handleClick()}
                }>
                    games.
                    </button> 
                <br/>
                Throughout my academic journey, I have been fascinated by the intersection 
                of art and technology and how it can be used to create innovative and visually 
                appealing products. <br/> 
                I have also taken a keen interest in spirituality, psychology, 
                and mental health, which have taught me valuable lessons about mindfulness, empathy, 
                and emotional intelligence.
                </p>
                <br />
                <p>
                As a team player, I love collaborating with others to create meaningful projects 
                that solve real-world problems. <br/>
                I value diverse perspectives and am always eager to learn from my peers. 
                <br/>At the same time, I also appreciate working independently 
                and can focus on coding tasks with music blaring through my headphones.
                </p>
                <br />
                <p>
                In addition to my technical skills, I am fluent in English, Swedish, and Norwegian, <br/>
                which allows me to communicate effectively with people from different cultures and backgrounds. <br/>
                I believe that having a multicultural perspective is essential in today's globalized world.
                </p>
                <br />
                <p>
                Overall, I am an enthusiastic, dedicated, and hardworking individual <br/>
                who is always looking for new challenges and opportunities for growth. <br/>
                I invite you to explore my website to learn more about my skills, experience, and portfolio. <br/>
                Thank you for visiting!
                </p>
            </section>
        </section>
       </div>
            )
}

export default PresentationPage;