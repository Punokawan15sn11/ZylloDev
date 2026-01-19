import React from 'react';
import { Instagram, Linkedin, Facebook, MapPin, Mail, Smartphone } from 'lucide-react';
import AdminButton from '../ui/AdminButton';

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center mb-4 group cursor-pointer">
                            <div className="w-8 h-8 bg-indigo-600 rounded-md flex items-center justify-center mr-2 transform group-hover:rotate-12 transition-transform">
                                <span className="text-white font-bold text-lg">Z</span>
                            </div>
                            <span className="text-2xl font-bold text-white group-hover:text-indigo-400 transition-colors">Zyllo.id</span>
                        </div>
                        <p className="text-sm leading-relaxed mb-6">
                            Software house terpercaya untuk transformasi digital UMKM Indonesia. Solusi cerdas untuk pertumbuhan tanpa batas.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="hover:text-indigo-400 transition-colors transform hover:-translate-y-1"><Instagram size={20} /></a>
                            <a href="#" className="hover:text-indigo-400 transition-colors transform hover:-translate-y-1"><Linkedin size={20} /></a>
                            <a href="#" className="hover:text-indigo-400 transition-colors transform hover:-translate-y-1"><Facebook size={20} /></a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">Layanan</h4>
                        <ul className="space-y-3 text-sm">
                            <li><a href="#" className="hover:text-indigo-400 transition-colors hover:pl-1">Web Development</a></li>
                            <li><a href="#" className="hover:text-indigo-400 transition-colors hover:pl-1">Mobile Apps</a></li>
                            <li><a href="#" className="hover:text-indigo-400 transition-colors hover:pl-1">Custom ERP/POS</a></li>
                            <li><a href="#" className="hover:text-indigo-400 transition-colors hover:pl-1">UI/UX Design</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">Perusahaan</h4>
                        <ul className="space-y-3 text-sm">
                            <li><a href="#" className="hover:text-indigo-400 transition-colors hover:pl-1">Tentang Kami</a></li>
                            <li><a href="#" className="hover:text-indigo-400 transition-colors hover:pl-1">Portfolio</a></li>
                            <li><a href="#" className="hover:text-indigo-400 transition-colors hover:pl-1">Karir</a></li>
                            <li><a href="#" className="hover:text-indigo-400 transition-colors hover:pl-1">Kebijakan Privasi</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">Hubungi Kami</h4>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-start group">
                                <MapPin className="w-5 h-5 mr-2 text-indigo-500 flex-shrink-0 group-hover:animate-bounce" />
                                <span>Turi, Sleman , DI. Yogyakarta</span>
                            </li>
                            <li className="flex items-center group">
                                <Mail className="w-5 h-5 mr-2 text-indigo-500 flex-shrink-0 group-hover:text-indigo-300 transition-colors" />
                                <span>hello@zyllo.id</span>
                            </li>
                            <li className="flex items-center group">
                                <Smartphone className="w-5 h-5 mr-2 text-indigo-500 flex-shrink-0 group-hover:text-indigo-300 transition-colors" />
                                <span>+62 895-4123-18152</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
                    <p>&copy; {new Date().getFullYear()} Zyllo.id. Hak Cipta Dilindungi.</p>
                    <p className="mt-2 md:mt-0">Dibuat dengan ❤️ untuk UMKM Indonesia</p>
                </div>
            </div>

            {/* Admin Tool for Database Export */}
            <AdminButton />
        </footer>
    );
};

export default Footer;
