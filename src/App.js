
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { createContext, useState } from "react";

import Footer from './components/Footer';
import FormikForm from './components/FormikForm';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Work from './components/Work';

import ReactSwitch from "react-switch";
import About from './components/About';

export const ThemeContext = createContext(null);

function App(props) {

    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        setTheme((curr) => (curr === "light" ? "dark" : "light"));
        
    };


  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <BrowserRouter>
        <div className="App" id={theme}>
          <Navbar/>
          <div className="ToggleThemeButton">
            <label>{theme === "light" ? "Light Mode" : "Dark mode"}</label>
            <ReactSwitch onChange={toggleTheme} checked={theme === "dark"}/>
          </div>
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
              <Route path='/about' element={<About />} />
            </Routes>
             
          </main>
          <Footer/>
        </div>
      </BrowserRouter>
    </ThemeContext.Provider>
    
    
  );
}

export default App;
