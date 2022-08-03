
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';

function App(props) {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <main>
        <div className='Skills'>
          <div>
            <h1>HTML</h1>
            <img ></img>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
