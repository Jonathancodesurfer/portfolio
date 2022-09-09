import logo from './assets/logo.svg';
import './Footer.css';

const Footer = (props) => {
    return (
        <div className='Footer_container'>
            <footer>
                <div>
                    <img width={80} src={logo}></img> 
                </div>
                <div>
                    <a href='https://github.com/Jonathancodesurfer'><img width={40} src={logo}></img></a>
                    <a href='https://github.com/Jonathancodesurfer'><img width={40} src={logo}></img></a>
                    <a href='https://github.com/Jonathancodesurfer'><img width={40} src={logo}></img></a>
                </div>
                <div className='Footer_links'>
                    <a className='Navbar_mobile-menu-items' href='/home'>Home</a>
                    <a className='Navbar_mobile-menu-items' href='/blog'>Blog</a>
                    <a className='Navbar_mobile-menu-items' href='/contact'>Contact</a>
                </div>


            </footer>
        </div>
    )
}

export default Footer;

