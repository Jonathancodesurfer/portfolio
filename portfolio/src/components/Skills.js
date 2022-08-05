import htmlLogo from './assets/html-logo.svg';
import cssLogo from './assets/csslogo.svg';
import jsLogo from './assets/javascriptlogo.svg';
import reactLogo from './assets/reactlogo.svg';
import webDevLogo from './assets/webdevelopment.svg';

const Skills = (props) => {
    return (
        <div className='Skills_container'>
            <div className='Skills_title-wrapper'>
                <h1 className='Skills_title' >Field studies</h1>
                <img width={40} height={40} src={webDevLogo}></img>
            </div>
            
            <div className='Skills'>
            <div className='Skills_item'>
                <img src={htmlLogo} ></img>
            </div>
            <div className='Skills_item'>
                <img src={cssLogo}  ></img>
            </div>
            <div className='Skills_item'>
                <h1>JavaScript</h1>
                <img src={jsLogo} ></img>
            </div>
            <div className='Skills_item'>
                <h1>React</h1>
                <img src={reactLogo} ></img>
            </div>
            </div>
        </div>
        
    );
}

export default Skills;