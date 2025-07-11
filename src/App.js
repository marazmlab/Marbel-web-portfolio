import React, { useState, useEffect } from 'react';
import  AnalyticsWrapper  from "./components/AnalyticsWrapper";
import { initGA } from "./utils/analytics";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./styles/theme";
import GlobalStyle from './styles/GlobalStyle';

import Layout from "./components/Layout";
import ThreeBackground from './components/ThreeBackground';


import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Project from './pages/Project';
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';

const App = () => {
    const [theme, setTheme] = useState('dark');

    useEffect(() => {
        initGA();
    }, []);

    const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

    return (
        <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
            <GlobalStyle />
            <ThreeBackground theme={theme === 'dark' ? darkTheme : lightTheme}/>
            <Router>
                <AnalyticsWrapper>
                    <Layout theme={theme} toggleTheme={toggleTheme}>
                        <Routes>
                            <Route path='/' element={<Home />} />
                            <Route path='/portfolio' element={<Portfolio />} />
                            <Route path='/project/:id' element={<Project />} />
                            <Route path='/about' element={<AboutMe />} />
                            <Route path='/contact' element={<Contact />} />
                        </Routes>
                    </Layout>
                </AnalyticsWrapper>
            </Router>
        </ThemeProvider>
    );
};

export default App;
