import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Project from './pages/Project';
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';

const App = () => {

    return (
        <Router>
            <nav>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/portfolio'>Portfolio</Link></li>
                    <li><Link to='/about'>About Me</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                </ul>
            </nav>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/portfolio' element={<Portfolio />} />
                <Route path='/project/:id' element={<Project />} />
                <Route path='/about' element={<AboutMe />} />
                <Route path='/contact' element={<Contact />} />
            </Routes>
        </Router>
    );
};

export default App;
