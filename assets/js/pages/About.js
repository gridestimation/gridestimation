import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { Target, Users, Award, TrendingUp, CheckCircle, Leaf, Shield, Code, Palette, Database } from 'lucide-react';
const About = ({ onRequestQuote }) => {
    const values = [
        {
            icon: Target,
            title: 'Precision First',
            description: 'Every estimate is meticulously crafted using advanced modeling software and validated by certified solar engineers with industry-leading accuracy standards.'
        },
        {
            icon: TrendingUp,
            title: 'Speed & Efficiency',
            description: 'We deliver comprehensive estimates in 24-48 hours through streamlined processes and dedicated project teams, without compromising quality.'
        },
        {
            icon: Users,
            title: 'Partnership Approach',
            description: 'We work as an extension of your team, understanding your unique requirements, brand standards, and project goals for seamless collaboration.'
        },
        {
            icon: Award,
            title: 'Continuous Excellence',
            description: 'Committed to staying ahead of industry trends, technology advances, and regulatory changes to provide cutting-edge solutions.'
        }
    ];
    const teamMembers = [
        {
            name: 'Sarah Mitchell',
            role: 'Founder & CEO',
            image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
            bio: '15+ years in solar engineering and project development. Former lead engineer at SunPower with expertise in utility-scale installations.',
            credentials: 'NABCEP PV Installation Professional, PE License'
        },
        {
            name: 'David Chen',
            role: 'Technical Director',
            image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
            bio: 'Solar modeling expert with deep experience in shading analysis, energy yield optimization, and advanced PV system design.',
            credentials: 'NABCEP PV Technical Sales, MS in Renewable Energy'
        },
        {
            name: 'Maria Rodriguez',
            role: 'Head of Operations',
            image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
            bio: 'Operations specialist focused on streamlining processes, quality control, and ensuring rapid project delivery at scale.',
            credentials: 'PMP Certified, Six Sigma Black Belt'
        }
    ];
    const achievements = [
        { number: '500+', label: 'Projects Completed', description: 'Across residential, commercial, and utility-scale' },
        { number: '99.5%', label: 'Accuracy Rate', description: 'Verified against actual installation results' },
        { number: '150+', label: 'Active Clients', description: 'Solar installers and EPC companies nationwide' },
        { number: '24-48h', label: 'Average Delivery', description: 'From project submission to final report' }
    ];
    const certifications = [
        'NABCEP Certified Professionals',
        'OSHA 30-Hour Safety Certified',
        'Professional Engineer (PE) Licensed',
        'ISO 9001:2015 Quality Management',
        'NREL PVWatts Validated Modeling',
        'Aurora Solar Certified Partners'
    ];
    const techStack = [
        {
            category: 'Solar Design Software',
            tools: ['PVsyst', 'HelioScope', 'Aurora Solar', 'PVWatts'],
            icon: Leaf
        },
        {
            category: 'CAD & Engineering',
            tools: ['AutoCAD', 'SketchUp', 'SolidWorks', 'Revit'],
            icon: Code
        },
        {
            category: 'Analysis & Modeling',
            tools: ['MATLAB', 'Python', 'SAM (NREL)', 'Homer Pro'],
            icon: Database
        },
        {
            category: 'Design & Visualization',
            tools: ['Adobe Creative Suite', 'Figma', 'Blender', 'KeyShot'],
            icon: Palette
        }
    ];
    const mission = {
        title: 'Our Mission',
        content: 'To accelerate the global transition to clean energy by providing solar professionals with the most accurate, efficient, and comprehensive estimation services available. We believe that by removing technical barriers and streamlining the design process, we can help solar companies focus on what they do best: bringing clean energy solutions to communities worldwide.'
    };
    const coreValues = {
        title: 'Our Core Values',
        values: [
            'Excellence in every estimate we deliver',
            'Transparency in our processes and pricing',
            'Innovation through continuous improvement',
            'Sustainability in our business practices',
            'Partnership with our clients\' success'
        ]
    };
    return (_jsxs("div", { className: "py-16", children: [_jsx("section", { className: "bg-gradient-to-br from-green-50 via-white to-blue-50 py-20", children: _jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: _jsxs("div", { className: "text-center animate-slideInUp", children: [_jsxs("div", { className: "inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-6", children: [_jsx(Award, { className: "h-4 w-4 mr-2" }), "Industry Leaders Since 2020"] }), _jsx("h1", { className: "text-5xl lg:text-6xl font-bold text-gray-900 mb-6", children: "About Grid Estimations" }), _jsx("p", { className: "text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed", children: "We're a team of certified solar professionals dedicated to accelerating the clean energy transition through precise, fast, and reliable estimation services that help solar companies grow and succeed." })] }) }) }), _jsx("section", { className: "py-20", children: _jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: _jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-16 items-center", children: [_jsxs("div", { className: "animate-slideInLeft", children: [_jsx("h2", { className: "text-4xl font-bold text-gray-900 mb-8", children: "Our Mission & Story" }), _jsxs("div", { className: "space-y-6 text-lg text-gray-600", children: [_jsx("p", { children: "Founded in 2020 during the solar industry's rapid expansion, Grid Estimations was born from a critical observation: talented solar professionals were spending countless hours on manual calculations and technical drawings, limiting their ability to focus on business growth and customer relationships." }), _jsx("p", { children: "Our founder, Sarah Mitchell, experienced this challenge firsthand during her 15-year career at leading solar companies. She assembled a team of certified engineers and industry veterans to create a solution that would bridge the gap between technical expertise and business efficiency." }), _jsx("p", { children: "Today, we're proud to serve over 150 solar companies nationwide, from emerging installers to established EPC firms, helping them accelerate project timelines, improve bid accuracy, and scale their operations with confidence." })] }), _jsx("div", { className: "grid grid-cols-2 gap-6 mt-8", children: achievements.map((achievement, index) => (_jsxs("div", { className: "text-center p-6 bg-gradient-to-br from-green-50 to-blue-50 rounded-lg hover:scale-105 transition-transform duration-300", children: [_jsx("div", { className: "text-3xl font-bold text-green-600 mb-2", children: achievement.number }), _jsx("div", { className: "text-sm font-semibold text-gray-900 mb-1", children: achievement.label }), _jsx("div", { className: "text-xs text-gray-600", children: achievement.description })] }, index))) })] }), _jsxs("div", { className: "relative animate-slideInRight", children: [_jsx("img", { src: "https://images.pexels.com/photos/8423012/pexels-photo-8423012.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Solar professionals collaborating on technical drawings and system designs", className: "rounded-lg shadow-2xl w-full h-96 object-cover hover:scale-105 transition-transform duration-500" }), _jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg" }), _jsx("div", { className: "absolute top-4 right-4 bg-white p-3 rounded-lg shadow-lg animate-slideUp", children: _jsxs("div", { className: "flex items-center space-x-2", children: [_jsx(Shield, { className: "h-5 w-5 text-green-500" }), _jsx("span", { className: "text-sm font-semibold text-gray-900", children: "NABCEP Certified" })] }) })] })] }) }) }), _jsx("section", { className: "py-20 bg-gradient-to-br from-gray-50 to-green-50", children: _jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [_jsxs("div", { className: "text-center mb-16", children: [_jsx("h2", { className: "text-4xl font-bold text-gray-900 mb-6", children: "Our Core Values" }), _jsx("p", { className: "text-xl text-gray-600 max-w-3xl mx-auto", children: "These principles guide every project we undertake and shape how we serve our clients in the solar industry." })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8", children: values.map((value, index) => (_jsxs("div", { className: "bg-white p-8 rounded-lg shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300 hover:scale-105 animate-slideUp", style: { animationDelay: `${index * 0.2}s` }, children: [_jsx("div", { className: "flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-100 to-blue-100 rounded-lg mb-6", children: _jsx(value.icon, { className: "h-8 w-8 text-green-600" }) }), _jsx("h3", { className: "text-xl font-semibold text-gray-900 mb-4", children: value.title }), _jsx("p", { className: "text-gray-600 leading-relaxed", children: value.description })] }, index))) })] }) }), _jsx("section", { className: "py-20", children: _jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [_jsxs("div", { className: "text-center mb-16", children: [_jsx("h2", { className: "text-4xl font-bold text-gray-900 mb-6", children: "Meet Our Leadership Team" }), _jsx("p", { className: "text-xl text-gray-600", children: "Certified professionals with decades of combined solar industry experience" })] }), _jsx("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-12", children: teamMembers.map((member, index) => (_jsxs("div", { className: "text-center group animate-slideUp", style: { animationDelay: `${index * 0.3}s` }, children: [_jsxs("div", { className: "relative mb-6", children: [_jsx("img", { src: member.image, alt: member.name, className: "w-48 h-48 rounded-full mx-auto object-cover shadow-lg group-hover:shadow-xl transition-shadow duration-300" }), _jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-full" })] }), _jsx("h3", { className: "text-2xl font-semibold text-gray-900 mb-2", children: member.name }), _jsx("p", { className: "text-green-600 font-medium mb-4", children: member.role }), _jsx("p", { className: "text-gray-600 mb-4 leading-relaxed", children: member.bio }), _jsxs("div", { className: "inline-flex items-center px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium", children: [_jsx(CheckCircle, { className: "h-4 w-4 mr-1" }), member.credentials] })] }, index))) })] }) }), _jsx("section", { className: "py-20 bg-gradient-to-br from-green-50 to-blue-50", children: _jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [_jsxs("div", { className: "text-center mb-16", children: [_jsx("h2", { className: "text-4xl font-bold text-gray-900 mb-6", children: "Our Technology Stack" }), _jsx("p", { className: "text-xl text-gray-600 max-w-3xl mx-auto", children: "We leverage industry-leading software and cutting-edge tools to deliver the most accurate and comprehensive solar estimations in the industry." })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8", children: techStack.map((category, index) => (_jsxs("div", { className: "bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300 hover:scale-105 animate-slideUp", style: { animationDelay: `${index * 0.2}s` }, children: [_jsx("div", { className: "flex items-center justify-center w-12 h-12 bg-gradient-to-r from-green-100 to-blue-100 rounded-lg mb-4", children: _jsx(category.icon, { className: "h-6 w-6 text-green-600" }) }), _jsx("h3", { className: "text-lg font-semibold text-gray-900 mb-4", children: category.category }), _jsx("ul", { className: "space-y-2", children: category.tools.map((tool, toolIndex) => (_jsxs("li", { className: "text-gray-600 text-sm flex items-center", children: [_jsx(CheckCircle, { className: "h-3 w-3 text-green-500 mr-2 flex-shrink-0" }), tool] }, toolIndex))) })] }, index))) })] }) }), _jsx("section", { className: "py-20", children: _jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [_jsxs("div", { className: "text-center mb-16", children: [_jsx("h2", { className: "text-4xl font-bold text-gray-900 mb-6", children: "Certifications & Industry Standards" }), _jsx("p", { className: "text-xl text-gray-600", children: "We maintain the highest professional standards and certifications in the solar industry" })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: certifications.map((cert, index) => (_jsxs("div", { className: "bg-white p-6 rounded-lg shadow-sm border border-gray-200 flex items-center hover:shadow-md transition-shadow duration-300 animate-slideUp", style: { animationDelay: `${index * 0.1}s` }, children: [_jsx(CheckCircle, { className: "h-6 w-6 text-green-500 mr-4 flex-shrink-0" }), _jsx("span", { className: "text-gray-700 font-medium", children: cert })] }, index))) })] }) }), _jsx("section", { className: "py-20 bg-gradient-to-br from-gray-50 to-green-50", children: _jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: _jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-16 items-center", children: [_jsxs("div", { className: "animate-slideInLeft", children: [_jsx("h2", { className: "text-4xl font-bold text-gray-900 mb-8", children: "Advanced Technology & Tools" }), _jsx("p", { className: "text-lg text-gray-600 mb-8", children: "We leverage industry-leading software and cutting-edge technology to ensure the highest accuracy and efficiency in our solar estimations and designs." }), _jsxs("div", { className: "space-y-6", children: [_jsxs("div", { className: "flex items-start space-x-4", children: [_jsx("div", { className: "flex items-center justify-center w-10 h-10 bg-green-100 rounded-lg flex-shrink-0", children: _jsx(Leaf, { className: "h-5 w-5 text-green-600" }) }), _jsxs("div", { children: [_jsx("h4", { className: "font-semibold text-gray-900 mb-2", children: "Professional Design Software" }), _jsx("p", { className: "text-gray-600", children: "PVsyst, HelioScope, Aurora Solar, and AutoCAD for precise modeling and documentation" })] })] }), _jsxs("div", { className: "flex items-start space-x-4", children: [_jsx("div", { className: "flex items-center justify-center w-10 h-10 bg-blue-100 rounded-lg flex-shrink-0", children: _jsx(Target, { className: "h-5 w-5 text-blue-600" }) }), _jsxs("div", { children: [_jsx("h4", { className: "font-semibold text-gray-900 mb-2", children: "Satellite & LiDAR Data" }), _jsx("p", { className: "text-gray-600", children: "High-resolution imagery and 3D mapping for accurate site analysis and shading studies" })] })] }), _jsxs("div", { className: "flex items-start space-x-4", children: [_jsx("div", { className: "flex items-center justify-center w-10 h-10 bg-green-100 rounded-lg flex-shrink-0", children: _jsx(Shield, { className: "h-5 w-5 text-green-600" }) }), _jsxs("div", { children: [_jsx("h4", { className: "font-semibold text-gray-900 mb-2", children: "Quality Assurance Systems" }), _jsx("p", { className: "text-gray-600", children: "Multi-stage review processes and validation protocols ensure consistent accuracy" })] })] })] })] }), _jsxs("div", { className: "relative animate-slideInRight", children: [_jsx("img", { src: "https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Advanced solar modeling software and technical analysis tools on computer screens", className: "rounded-lg shadow-2xl w-full h-96 object-cover hover:scale-105 transition-transform duration-500" }), _jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg" })] })] }) }) }), _jsx("section", { className: "py-20 bg-gradient-to-r from-green-600 to-blue-600", children: _jsxs("div", { className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center", children: [_jsx("h2", { className: "text-4xl font-bold text-white mb-6", children: "Ready to Partner With Us?" }), _jsx("p", { className: "text-xl text-green-100 mb-10", children: "Join the growing community of solar professionals who trust Grid Estimations for accurate, fast, and reliable project estimates." }), _jsxs("div", { className: "flex flex-col sm:flex-row gap-6 justify-center", children: [_jsx("button", { onClick: onRequestQuote, className: "inline-flex items-center px-8 py-4 bg-white text-green-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105", children: "Get Free Estimate" }), _jsx("button", { onClick: onRequestQuote, className: "inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-green-600 transition-all duration-300 hover:scale-105", children: "Schedule Consultation" })] })] }) })] }));
};
export default About;
