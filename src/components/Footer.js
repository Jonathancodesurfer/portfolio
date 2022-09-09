import { Link } from 'react-router-dom';
import logo from './assets/logo.svg';
import './Footer.css';

const Footer = (props) => {
    return (
        <div className='Footer_container '>
            <footer>
                <div>
                    <Link to="/"><img width={80} src={logo}></img></Link> 
                </div>
                <div>
                    <a href='https://github.com/Jonathancodesurfer'><img width={40} src={logo}></img></a>
                    <a href='https://github.com/Jonathancodesurfer'><img width={40} src={logo}></img></a>
                    <a href='https://github.com/Jonathancodesurfer'><img width={40} src={logo}></img></a>
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

