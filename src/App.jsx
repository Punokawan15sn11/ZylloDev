import React, { useState, useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import ValueProposition from './components/sections/ValueProposition';
import Services from './components/sections/Services';
import AIDemo from './components/sections/AIDemo';
import Portfolio from './components/sections/Portfolio';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';

function App() {
    const [scrolled, setScrolled] = useState(false);

    // Handle scroll effect for navbar
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="font-sans text-slate-800 bg-white min-h-screen scroll-smooth overflow-x-hidden">
            <Navbar scrolled={scrolled} scrollToSection={scrollToSection} />
            <Hero scrollToSection={scrollToSection} />
            <ValueProposition />
            <Services scrollToSection={scrollToSection} />
            <AIDemo scrollToSection={scrollToSection} />
            <Portfolio />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
