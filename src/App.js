import React from 'react';
import Navbar from './components/Navbar';
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
import Mentor from "./components/pages/mentor";





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
                <Route path="/mentor" element={<Mentor />}
                />
            </Routes>
        </Router>

        
      
    </div>

    
    
    
  );
}

export default App;
