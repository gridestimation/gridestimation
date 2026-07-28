import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import Hero from '../components/Hero.js';
import ServiceCard from '../components/ServiceCard.js';
import TestimonialCard from '../components/TestimonialCard.js';
import CompaniesCarousel from '../components/CompaniesCarousel.js';
import Newsletter from '../components/Newsletter.js';
import { BarChart3, Clock, Shield, Users, ArrowRight, Calculator, FileText, Sun, Leaf, CheckCircle, Award, TrendingUp } from 'lucide-react';
const Home = ({ onRequestQuote }) => {
    const services = [
        {
            icon: BarChart3,
            title: 'Solar Layout Design',
            description: 'Optimized solar panel layouts with maximum efficiency, proper spacing, and minimal shading impact for residential, commercial, and utility-scale projects.'
        },
        {
            icon: Sun,
            title: 'Shading Analysis',
            description: 'Comprehensive shading studies using advanced modeling software to identify optimal panel placement and maximize energy production year-round.'
        },
        {
            icon: Calculator,
            title: 'Energy Yield Reports',
            description: 'Detailed production forecasts with 25-year projections, monthly breakdowns, and financial analysis to support your project proposals.'
        },
        {
            icon: FileText,
            title: 'Technical Documentation',
            description: 'Complete permit-ready packages including electrical diagrams, structural calculations, and compliance documentation for seamless project approval.'
        }
    ];
    const testimonials = [
        {
            quote: "Grid Estimations transformed our workflow completely. Their accuracy and lightning-fast turnaround helped us close 40% more deals this quarter. The detailed shading analysis alone saved us from costly mistakes.",
            author: "Sarah Johnson",
            company: "SolarTech Solutions - Project Manager"
        },
        {
            quote: "The level of detail in their reports is exceptional. Every layout comes with precise measurements, optimal tilt angles, and comprehensive energy yield projections. It's like having a senior engineer on our team.",
            author: "Michael Chen",
            company: "Renewable Energy Corp - Lead Engineer"
        },
        {
            quote: "We've been using Grid Estimations for over 200 projects. Their consistency, professionalism, and technical expertise make them our go-to partner for all solar estimations. Highly recommended!",
            author: "David Rodriguez",
            company: "Green Power Systems - Operations Director"
        }
    ];
    const stats = [
        { number: '500+', label: 'Projects Completed', icon: CheckCircle },
        { number: '99.5%', label: 'Accuracy Rate', icon: Award },
        { number: '24-48h', label: 'Delivery Time', icon: Clock },
        { number: '150+', label: 'Happy Clients', icon: Users }
    ];
    const processSteps = [
        {
            step: '01',
            title: 'Submit Project Details',
            description: 'Upload your site information, project requirements, and any specific constraints through our secure portal.',
            icon: FileText
        },
        {
            step: '02',
            title: 'Expert Analysis',
            description: 'Our certified solar engineers analyze your site using advanced modeling software and industry best practices.',
            icon: Calculator
        },
        {
            step: '03',
            title: 'Quality Review',
            description: 'Every estimate undergoes rigorous quality control to ensure accuracy and compliance with local codes.',
            icon: Shield
        },
        {
            step: '04',
            title: 'Delivery & Support',
            description: 'Receive your comprehensive estimate package with ongoing support for any questions or revisions.',
            icon: CheckCircle
        }
    ];
    return (_jsxs("div", { children: [_jsx(Hero, { onRequestQuote: onRequestQuote }), _jsx(CompaniesCarousel, {}), _jsx("section", { className: "py-16 bg-white", children: _jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: _jsx("div", { className: "grid grid-cols-2 lg:grid-cols-4 gap-8", children: stats.map((stat, index) => (_jsxs("div", { className: "text-center group hover:scale-105 transition-transform duration-300", children: [_jsx("div", { className: "flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-100 to-blue-100 rounded-full mx-auto mb-4 group-hover:from-green-200 group-hover:to-blue-200 transition-colors duration-300", children: _jsx(stat.icon, { className: "h-8 w-8 text-green-600" }) }), _jsx("div", { className: "text-3xl font-bold text-gray-900 mb-2", children: stat.number }), _jsx("div", { className: "text-gray-600 font-medium", children: stat.label })] }, index))) }) }) }), _jsx("section", { className: "py-20 bg-gradient-to-br from-gray-50 to-green-50", children: _jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: _jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-16 items-center", children: [_jsxs("div", { className: "animate-slideInLeft", children: [_jsxs("div", { className: "inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-6", children: [_jsx(TrendingUp, { className: "h-4 w-4 mr-2" }), "Industry Leading Accuracy"] }), _jsx("h2", { className: "text-4xl font-bold text-gray-900 mb-6", children: "Precision Solar Estimations for Growing Teams" }), _jsx("p", { className: "text-lg text-gray-600 mb-8 leading-relaxed", children: "We specialize in helping solar installation companies, EPC firms, and project developers accelerate their project pipeline with accurate, detailed estimations. Our team of certified solar engineers combines cutting-edge technology with deep industry expertise to deliver estimates that consistently match real-world installation results." }), _jsxs("div", { className: "space-y-4 mb-8", children: [_jsxs("div", { className: "flex items-start space-x-3", children: [_jsx(CheckCircle, { className: "w-6 h-6 text-green-500 mt-1 flex-shrink-0" }), _jsxs("div", { children: [_jsx("h4", { className: "font-semibold text-gray-900", children: "Certified Solar Engineers" }), _jsx("p", { className: "text-gray-600", children: "NABCEP certified professionals with 10+ years of experience" })] })] }), _jsxs("div", { className: "flex items-start space-x-3", children: [_jsx(CheckCircle, { className: "w-6 h-6 text-green-500 mt-1 flex-shrink-0" }), _jsxs("div", { children: [_jsx("h4", { className: "font-semibold text-gray-900", children: "Advanced Modeling Software" }), _jsx("p", { className: "text-gray-600", children: "PVsyst, HelioScope, and Aurora Solar for precise calculations" })] })] }), _jsxs("div", { className: "flex items-start space-x-3", children: [_jsx(CheckCircle, { className: "w-6 h-6 text-green-500 mt-1 flex-shrink-0" }), _jsxs("div", { children: [_jsx("h4", { className: "font-semibold text-gray-900", children: "Comprehensive Documentation" }), _jsx("p", { className: "text-gray-600", children: "Permit-ready packages with all technical specifications" })] })] })] }), _jsxs("button", { onClick: onRequestQuote, className: "inline-flex items-center px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-all duration-300 hover:scale-105", children: ["Start Your Project", _jsx(ArrowRight, { className: "ml-2 h-5 w-5" })] })] }), _jsxs("div", { className: "relative animate-slideInRight", children: [_jsx("img", { src: "https://images.pexels.com/photos/9875353/pexels-photo-9875353.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Solar installation team reviewing detailed technical plans and blueprints on-site", className: "rounded-lg shadow-2xl w-full h-96 object-cover hover:scale-105 transition-transform duration-500" }), _jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg" }), _jsx("div", { className: "absolute top-4 left-4 bg-white p-3 rounded-lg shadow-lg animate-slideUp", children: _jsxs("div", { className: "flex items-center space-x-2", children: [_jsx(Award, { className: "h-5 w-5 text-green-500" }), _jsx("span", { className: "text-sm font-semibold text-gray-900", children: "NABCEP Certified" })] }) })] })] }) }) }), _jsx("section", { className: "py-20", children: _jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [_jsxs("div", { className: "text-center mb-16", children: [_jsxs("div", { className: "inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-6", children: [_jsx(Leaf, { className: "h-4 w-4 mr-2" }), "Our Core Services"] }), _jsx("h2", { className: "text-4xl font-bold text-gray-900 mb-6", children: "Comprehensive Solar Estimation Services" }), _jsx("p", { className: "text-xl text-gray-600 max-w-3xl mx-auto", children: "From initial site analysis to final permit documentation, we provide everything you need to move your solar projects forward with confidence." })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8", children: services.map((service, index) => (_jsx("div", { className: "animate-fadeIn", style: { animationDelay: `${index * 0.2}s` }, children: _jsx(ServiceCard, { ...service }) }, index))) })] }) }), _jsx("section", { className: "py-20 bg-gradient-to-br from-green-50 to-blue-50", children: _jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [_jsxs("div", { className: "text-center mb-16", children: [_jsx("h2", { className: "text-4xl font-bold text-gray-900 mb-6", children: "Our Streamlined Process" }), _jsx("p", { className: "text-xl text-gray-600 max-w-2xl mx-auto", children: "From project submission to final delivery, we've optimized every step to ensure fast, accurate results." })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8", children: processSteps.map((step, index) => (_jsxs("div", { className: "text-center group animate-slideUp", style: { animationDelay: `${index * 0.2}s` }, children: [_jsxs("div", { className: "relative mb-6", children: [_jsx("div", { className: "w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-shadow duration-300", children: _jsx(step.icon, { className: "h-8 w-8 text-green-600" }) }), _jsx("div", { className: "absolute -top-2 -right-2 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold", children: step.step })] }), _jsx("h3", { className: "text-lg font-semibold text-gray-900 mb-3", children: step.title }), _jsx("p", { className: "text-gray-600 text-sm leading-relaxed", children: step.description })] }, index))) })] }) }), _jsx("section", { className: "py-20 bg-white", children: _jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [_jsxs("div", { className: "text-center mb-16", children: [_jsx("h2", { className: "text-4xl font-bold text-gray-900 mb-6", children: "Trusted by Solar Professionals Nationwide" }), _jsx("p", { className: "text-xl text-gray-600", children: "See what industry leaders say about working with Grid Estimations" })] }), _jsx("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-8", children: testimonials.map((testimonial, index) => (_jsx("div", { className: "animate-slideUp", style: { animationDelay: `${index * 0.3}s` }, children: _jsx(TestimonialCard, { ...testimonial }) }, index))) })] }) }), _jsx(Newsletter, {}), _jsx("section", { className: "py-20 bg-gradient-to-r from-green-600 to-blue-600", children: _jsxs("div", { className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center", children: [_jsx("h2", { className: "text-4xl font-bold text-white mb-6", children: "Ready to Accelerate Your Solar Projects?" }), _jsx("p", { className: "text-xl text-green-100 mb-10 leading-relaxed", children: "Join 500+ solar professionals who trust Grid Estimations for accurate, fast, and reliable solar estimates. Get your first estimate free and see the difference professional expertise makes." }), _jsxs("div", { className: "flex flex-col sm:flex-row gap-6 justify-center", children: [_jsxs("button", { onClick: onRequestQuote, className: "inline-flex items-center px-8 py-4 bg-white text-green-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105", children: ["Get Free Estimate", _jsx(ArrowRight, { className: "ml-2 h-5 w-5" })] }), _jsx("button", { onClick: onRequestQuote, className: "inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-green-600 transition-all duration-300 hover:scale-105", children: "Schedule Consultation" })] })] }) })] }));
};
export default Home;
