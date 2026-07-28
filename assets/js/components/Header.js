import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
const Header = ({ currentPage, setCurrentPage, onRequestQuote }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'trades', label: 'Our Trades' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'contact', label: 'Contact' },
];
    const handleNavClick = (page) => {
        setCurrentPage(page);
        setIsMobileMenuOpen(false);
    };
    return (_jsx("header", { className: "bg-white shadow-sm sticky top-0 z-50", children: _jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [_jsxs("div", { className: "flex justify-between items-center py-4", children: [_jsxs("div", { className: "flex items-center space-x-3 cursor-pointer group", onClick: () => handleNavClick('home'), children: [_jsx("img", { src: `./Main Logo.png`, alt: "Grid Estimations Logo", className: "h-14 w-14 object-contain group-hover:scale-105 transition-transform duration-300" }), _jsxs("div", { className: "flex flex-col", children: [_jsx("span", { className: "text-2xl font-bold text-gray-900 group-hover:text-green-600 transition-colors duration-300", children: "Grid Estimations" }), _jsx("span", { className: "text-xs text-green-600 font-medium tracking-wide", children: "SOLAR ENERGY" })] })] }), _jsx("nav", { className: "hidden md:flex space-x-8", children: navItems.map((item) => (_jsx("button", { onClick: () => handleNavClick(item.id), className: `px-3 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 ${currentPage === item.id
                                    ? 'text-green-600 border-b-2 border-green-600'
                                    : 'text-gray-700 hover:text-green-600'}`, children: item.label }, item.id))) }), _jsx("button", { onClick: onRequestQuote, className: "hidden md:inline-flex items-center px-6 py-3 bg-green-600 text-white text-sm font-medium rounded-lg hover:bg-green-700 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl", children: "Get Free Estimate" }), _jsx("button", { onClick: () => setIsMobileMenuOpen(!isMobileMenuOpen), className: "md:hidden p-2 rounded-lg text-gray-700 hover:text-green-600 hover:bg-gray-100 transition-colors duration-300", children: isMobileMenuOpen ? _jsx(X, { className: "h-6 w-6" }) : _jsx(Menu, { className: "h-6 w-6" }) })] }), isMobileMenuOpen && (_jsx("div", { className: "md:hidden border-t border-gray-200 py-4 animate-fadeIn", children: _jsxs("div", { className: "flex flex-col space-y-2", children: [navItems.map((item) => (_jsx("button", { onClick: () => handleNavClick(item.id), className: `px-3 py-2 text-left text-sm font-medium transition-colors duration-300 ${currentPage === item.id
                                    ? 'text-green-600 bg-green-50'
                                    : 'text-gray-700 hover:text-green-600 hover:bg-gray-50'}`, children: item.label }, item.id))), _jsx("button", { onClick: () => {
                                    onRequestQuote();
                                    setIsMobileMenuOpen(false);
                                }, className: "mx-3 mt-4 px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-lg hover:bg-green-700 transition-colors duration-300", children: "Get Free Estimate" })] }) }))] }) }));
};
export default Header;
