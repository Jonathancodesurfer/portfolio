import jonathanPic from './jonathan.png';


const Header = (props) => {
    return (

        <header className='Header'>
            <div className='Header_wrapper'>
                <div>
                    <h1 title='Jonathan:'>Jonathan:</h1>
                    <h1 title='Front End Engineer'>Front End Engineer</h1>
                </div>
                <div className='Header_imag-wrapper'>
                    <img width={300} src={jonathanPic}></img> 
                </div>
            </div>     
      </header>

        );
}

export default Header;

