import './About.css';

import profilePic from './assets/profile2.jpg';

const About = () => {
    return(
        <div className="About">
            <h1 className='Profile_title'>About Jonathan</h1>
            <div className='Profile_wrapper'>
                <img alt='Profile' src={profilePic}></img>
                <p className='Profile_drescription'>Enthusiastic Web Developer with an industrial engineering background. 
                    Knowledgeable in user interface, testing, and debugging processes. 
                    Bringing forth expertise in design, installation, testing and maintenance 
                    of web systems. Equipped with a diverse and promising skill-set. Proficient 
                    in an assortment of technologies, including HTML, CSS, JavaScript, React, Github, Webflow.
                    Able to effectively self-manage during independent projects, as well as collaborate
                    in a team setting.
                </p>
            </div>
            

        </div>
    )
}

export default About;