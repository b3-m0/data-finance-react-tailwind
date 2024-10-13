import React from 'react';
import Navbar from './components/Navbar';
<<<<<<< HEAD
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./components/pages/home";
import Company from "./components/pages/company";
import Resources from "./components/pages/resources";
import About from "./components/pages/about";
import Contact from "./components/pages/contact";
import Login from "./components/pages/login";
import Form from "./components/pages/form";
import { useEffect } from 'react';
import WebFont from 'webfontloader';



=======
import Newsletter from './components/Newsletter';
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './pages/home'
import { Login } from './pages/home'
>>>>>>> 1b70751be25af9944fec5f976b99cf18e1434b92

function App() {
  useEffect(() => {
    WebFont.load({
        google: {
            families: ['Droid Sans', 'Chilanka', 'Mukta'],
        },
    });
}, []);

  return (
    <div>
<<<<<<< HEAD
      
      <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/company" element={<Company />} />
                <Route
                    path="/resources"
                    element={<Resources />}
                />
                <Route path="/about" element={<About />} />
                <Route
                    path="/contact"
                    element={<Contact />}
                />
                <Route path="/login" element={<Login />}
                />
                <Route path="/home" element={<Home />}
                />
                <Route path="/form" element={<Form />}
                />
            </Routes>
        </Router>
      
=======
      <Navbar />
      <Hero />
      <Analytics />
      <Newsletter />
      <Cards />
      <Footer />
      <Router>
        <Routes>
            <Route path="/" element={<Home/>}/>
        </Routes>
      </Router>
>>>>>>> 1b70751be25af9944fec5f976b99cf18e1434b92
    </div>

    
    
    
  );
}

export default App;
