
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Work from './components/Work';


function App(props) {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <main>
        <Skills/>
        <Work/>
      </main>
      <div className='Buffer'></div>
    </div>
  );
}

export default App;
