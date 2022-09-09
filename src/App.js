
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import FormikForm from './components/FormikForm';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Work from './components/Work';


function App(props) {
  return (
    <BrowserRouter>
        <div className="App">
          <Navbar/>
          <Header/>
          <main>
            
            
            <Routes>
              <Route path="/" element={
                <div>
                  <Skills/>
                   <Work/>
                </div>
              } />
              <Route path="/contact" element={<FormikForm /> } />
              
            </Routes>
             
          </main>
          <Footer/>
        </div>
    </BrowserRouter>
    
  );
}

export default App;
