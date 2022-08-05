
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Skills from './components/Skills';

function App(props) {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <main>
        <Skills/>
        <div>
          work expirence 
        </div>
      </main>
    </div>
  );
}

export default App;
