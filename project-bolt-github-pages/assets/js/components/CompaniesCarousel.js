import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useEffect, useState } from 'react';
const CompaniesCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const companies = [
        { name: 'SunPower', logo: 'https://via.placeholder.com/120x60/22c55e/ffffff?text=SunPower' },
        { name: 'Tesla Energy', logo: 'https://via.placeholder.com/120x60/22c55e/ffffff?text=Tesla' },
        { name: 'Enphase', logo: 'https://via.placeholder.com/120x60/22c55e/ffffff?text=Enphase' },
        { name: 'SolarEdge', logo: 'https://via.placeholder.com/120x60/22c55e/ffffff?text=SolarEdge' },
        { name: 'Canadian Solar', logo: 'https://via.placeholder.com/120x60/22c55e/ffffff?text=Canadian' },
        { name: 'First Solar', logo: 'https://via.placeholder.com/120x60/22c55e/ffffff?text=FirstSolar' },
        { name: 'JinkoSolar', logo: 'https://via.placeholder.com/120x60/22c55e/ffffff?text=Jinko' },
        { name: 'Trina Solar', logo: 'https://via.placeholder.com/120x60/22c55e/ffffff?text=Trina' },
    ];
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % companies.length);
        }, 3000);
        return () => clearInterval(timer);
    }, [companies.length]);
    return (_jsx("section", { className: "py-16 bg-white border-t border-gray-100", children: _jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [_jsxs("div", { className: "text-center mb-12", children: [_jsx("h3", { className: "text-2xl font-bold text-gray-900 mb-4", children: "Trusted by Leading Solar Companies" }), _jsx("p", { className: "text-gray-600", children: "Join 500+ solar professionals who rely on our expertise" })] }), _jsx("div", { className: "relative overflow-hidden", children: _jsx("div", { className: "flex transition-transform duration-500 ease-in-out", style: { transform: `translateX(-${currentIndex * (100 / 4)}%)` }, children: companies.concat(companies).map((company, index) => (_jsx("div", { className: "flex-shrink-0 w-1/4 px-4", children: _jsx("div", { className: "bg-gray-50 rounded-lg p-6 flex items-center justify-center h-20 hover:bg-gray-100 transition-colors duration-300 group", children: _jsx("img", { src: company.logo, alt: `${company.name} logo`, className: "max-h-12 max-w-full object-contain opacity-60 group-hover:opacity-80 transition-opacity duration-300" }) }) }, `${company.name}-${index}`))) }) }), _jsx("div", { className: "flex justify-center mt-8 space-x-2", children: companies.map((_, index) => (_jsx("button", { onClick: () => setCurrentIndex(index), className: `w-2 h-2 rounded-full transition-colors duration-300 ${index === currentIndex ? 'bg-green-600' : 'bg-gray-300'}` }, index))) })] }) }));
};
export default CompaniesCarousel;
