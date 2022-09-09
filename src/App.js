
import './App.css';
import Footer from './components/Footer';
import FormikForm from './components/FormikForm';
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
        <FormikForm />
      </main>
      <Footer/>
    </div>
  );
}

export default App;
