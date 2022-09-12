import { Link } from 'react-router-dom';
import logo from './assets/logo.svg';
import github from './assets/github.svg';
import linkedin from './assets/linkedin-circled.svg';
import './Footer.css';

const Footer = (props) => {
    return (
        <div className='Footer_container '>
            <footer>
                <div>
                    <Link to="/"><img width={80} src={logo}></img></Link> 
                </div>
                <div>
                    <a href='https://github.com/Jonathancodesurfer' target="_blank"><img width={40} src={github}></img></a>
                    <a href='https://www.linkedin.com/in/jonathan-alpizar-9697a7205/' target="_blank"><img width={40} src={linkedin}></img></a>
                  
                </div>
                <div className='Footer_links'>
                    <Link className='Navbar_mobile-menu-items' to='/'>Home</Link>
                    <Link className='Navbar_mobile-menu-items' to='/about'>Blog</Link>
                    <Link className='Navbar_mobile-menu-items' to='/contact'>Contact</Link>
                </div>


            </footer>
        </div>
    )
}

export default Footer;

