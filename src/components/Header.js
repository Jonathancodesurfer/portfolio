import jonathanPic from './jonathan.png';
import logo from './logo.svg';

const Header = (props) => {
    return (

        <header className='Header'>
            <div className='Header_animation-container'>
            </div>
            <div className='Header_wrapper'>
                <div className='Header_title'>
                    <h1 title='Jonathan:'>Dev-Techs</h1>
                    <h1 title='Front End Engineer'>Front-End Engineering solutions</h1>
                </div>
                <div className='Header_imag-wrapper'>
                    <img width={300} src={logo}></img> 
                </div>
            </div>     
      </header>

        );
}

export default Header;

