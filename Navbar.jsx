import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = ({ scrolled, scrollToSection }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const handleNavClick = (sectionId) => {
        toggleMenu();
        scrollToSection(sectionId);
    };

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-5'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <div className="flex items-center cursor-pointer group" onClick={() => scrollToSection('hero')}>
                        <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center mr-2 shadow-indigo-500/30 shadow-lg transform group-hover:rotate-12 transition-transform duration-300">
                            <span className="text-white font-bold text-xl">Z</span>
                        </div>
                        <span className={`text-2xl font-bold tracking-tight ${scrolled ? 'text-slate-900' : 'text-slate-900 lg:text-white'}`}>
                            Zyllo<span className="text-indigo-500">.id</span>
                        </span>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8 items-center">
                        {['Layanan', 'Keunggulan', 'Tanya AI', 'Portfolio', 'FAQ'].map((item) => (
                            <button
                                key={item}
                                onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                                className={`font-medium hover:text-indigo-500 transition-colors relative group ${scrolled ? 'text-slate-600' : 'text-slate-200 hover:text-white'}`}
                            >
                                {item}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-500 transition-all duration-300 group-hover:w-full"></span>
                            </button>
                        ))}
                        <button
                            onClick={() => scrollToSection('contact')}
                            className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-full font-semibold transition-all shadow-lg hover:shadow-indigo-500/30 transform hover:-translate-y-1 active:scale-95"
                        >
                            Mulai Transformasi
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button onClick={toggleMenu} className={`p-2 rounded-md ${scrolled ? 'text-slate-800' : 'text-white'}`}>
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-slate-100 animate-fade-in-up">
                    <div className="px-4 pt-2 pb-6 space-y-2 flex flex-col">
                        {['Layanan', 'Keunggulan', 'Tanya AI', 'Portfolio', 'FAQ'].map((item) => (
                            <button
                                key={item}
                                onClick={() => handleNavClick(item.toLowerCase().replace(' ', '-'))}
                                className="block px-3 py-3 text-left text-base font-medium text-slate-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-md transition-colors"
                            >
                                {item}
                            </button>
                        ))}
                        <button
                            onClick={() => handleNavClick('contact')}
                            className="mt-4 w-full bg-indigo-600 text-white px-5 py-3 rounded-lg font-semibold active:bg-indigo-700"
                        >
                            Mulai Transformasi
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
