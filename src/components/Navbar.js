import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './assets/logo.svg';
import buguerMenu from './assets/menu.png';
import ReactSwitch from "react-switch";
import { createContext } from "react";

export const ThemeContext = createContext(null);




const Navbar = (props) => {

  

    const [showMenu, setShowMenu] = useState(false);

    let menu;
    if(showMenu) {
        menu = 
        <div className='Navbar_mobile-menu'>
            <Link onClick={() => setShowMenu(!showMenu)} className='Navbar_mobile-menu-items' to='/'>Home</Link>
            <Link onClick={() => setShowMenu(!showMenu)}  className='Navbar_mobile-menu-items' to='/about'>About</Link>
            <Link onClick={() => setShowMenu(!showMenu)} className='Navbar_mobile-menu-items' to='/contact'>Contact</Link>
          </div>
    }


    return (
          <nav>
            <div className='Navbar'>
              <Link to='/'><img src={logo} width={'70px'} height={'70px'} /></Link>
              <div className='Navbar_menu-items'>
                <Link className='Navbar_mobile-menu-items' to='/'>Home</Link>
                <Link className='Navbar_mobile-menu-items' to='/about'>About</Link>
                <Link className='Navbar_mobile-menu-items' to='/contact'>Contact</Link>
                
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