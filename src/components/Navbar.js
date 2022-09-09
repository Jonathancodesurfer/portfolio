import { useState } from 'react';
import logo from './assets/logo.svg';
import buguerMenu from './assets/menu.png';


const Navbar = (props) => {

    const [showMenu, setShowMenu] = useState(false);

    let menu;
    if(showMenu) {
        menu = 
        <div className='Navbar_mobile-menu'>
            <a className='Navbar_mobile-menu-items' href='/home'>Home</a>
            <a className='Navbar_mobile-menu-items' href='/blog'>Blog</a>
            <a className='Navbar_mobile-menu-items' href='/contact'>Contact</a>
          </div>
    }


    return (
        <nav>
        <div className='Navbar'>
          <a href='/'><img src={logo} width={'70px'} height={'70px'} /></a>
          <div className='Navbar_menu-items'>
            <a href='/home'>Home</a>
            <a href='/blog'>Blog</a>
            <a href='/contact'>Contact</a>
          </div>
          <div className='Navbar_burguer-menu'>
            <img onClick={() => setShowMenu(!showMenu)} src={buguerMenu} width={'40px'} height={'40px'} />
          </div>
        </div> 

        { menu }

      </nav>
    );
}

export default Navbar;