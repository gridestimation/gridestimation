import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { Layout, Sun, BarChart3, FileText, Leaf, Shield, Clock, CheckCircle } from 'lucide-react';
const Services = ({ onRequestQuote }) => {
    const services = [
        {
            icon: Layout,
            title: 'Solar Layout Design',
            description: 'Optimized solar panel arrangements with maximum efficiency and minimal shading impact.',
            features: [
                'Custom array configurations for maximum energy yield',
                'Roof space optimization with precise measurements',
                'Obstacle avoidance planning and setback compliance',
                'Multiple design options with performance comparisons',
                'String sizing and inverter placement optimization',
                'Fire safety and code compliance verification'
            ],
            image: 'https://images.pexels.com/photos/9875374/pexels-photo-9875374.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        {
            icon: Sun,
            title: 'Shading Analysis',
            description: 'Comprehensive shading studies to maximize energy production throughout the year.',
            features: [
                'Annual shading reports with hourly analysis',
                'NREL PVWatts integration for accurate modeling',
                'Seasonal variation analysis and optimization',
                'Performance ratio calculations and projections',
                'Near and far shading impact assessment',
                'Mitigation strategies for shading losses'
            ],
            image: 'https://images.pexels.com/photos/9875408/pexels-photo-9875408.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        {
            icon: BarChart3,
            title: 'Energy Yield Reports',
            description: 'Detailed production forecasts and financial projections for your solar projects.',
            features: [
                '25-year production estimates with degradation',
                'Monthly and annual energy breakdowns',
                'Weather data integration from multiple sources',
                'Performance ratio calculations and analysis',
                'Financial modeling with ROI projections',
                'Utility rate analysis and savings calculations'
            ],
            image: 'https://images.pexels.com/photos/8423012/pexels-photo-8423012.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        {
            icon: FileText,
            title: 'Technical Documentation',
            description: 'Complete technical documentation including electrical drawings and component specs.',
            features: [
                'Electrical single-line diagrams and schematics',
                'Equipment specifications and cut sheets',
                'Installation guidelines and best practices',
                'Permit-ready documentation packages',
                'Structural load calculations and analysis',
                'Compliance verification and code references'
            ],
            image: 'https://images.pexels.com/photos/9875353/pexels-photo-9875353.jpeg?auto=compress&cs=tinysrgb&w=600'
        }
    ];
    const projectTypes = [
        {
            title: 'Residential Solar',
            description: 'Rooftop installations for homes and small buildings with detailed homeowner reports',
            icon: '🏠',
            features: ['Roof condition assessment', 'HOA compliance review', 'Utility interconnection planning']
        },
        {
            title: 'Commercial Solar',
            description: 'Large-scale installations for businesses and institutions with complex requirements',
            icon: '🏢',
            features: ['Load analysis and demand profiling', 'Tax incentive optimization', 'Multi-building coordination']
        },
        {
            title: 'Utility-Scale',
            description: 'Ground-mounted solar farms and utility projects with grid integration studies',
            icon: '⚡',
            features: ['Environmental impact assessment', 'Grid interconnection studies', 'Land use optimization']
        }
    ];
    const deliverables = [
        'Detailed layout drawings (AutoCAD/PDF)',
        'Comprehensive shading analysis reports',
        'Energy production estimates and modeling',
        'Complete bill of materials (BOM)',
        'Electrical single-line diagrams',
        'Installation specifications and guidelines',
        'Permit-ready documentation packages',
        'ROI analysis and payback calculations',
        'Equipment cut sheets and specifications',
        'Structural load calculations',
        'Code compliance verification',
        'Performance monitoring recommendations'
    ];
    const whyChooseUs = [
        {
            icon: Clock,
            title: 'Lightning-Fast Delivery',
            description: 'Get comprehensive estimates in 24-48 hours, not weeks. Our streamlined process and dedicated teams ensure rapid turnaround without compromising quality.',
            stats: '24-48h average delivery'
        },
        {
            icon: Shield,
            title: 'Industry-Leading Accuracy',
            description: 'Our estimates consistently match real-world installation results with 99.5% accuracy. Advanced modeling software and experienced engineers ensure precision.',
            stats: '99.5% accuracy rate'
        },
        {
            icon: Leaf,
            title: 'Built for Scale',
            description: 'Handle multiple projects simultaneously without quality compromise. Our scalable processes and team structure grow with your business needs.',
            stats: '500+ projects completed'
        }
    ];
    return (_jsxs("div", { className: "py-16", children: [_jsx("section", { className: "bg-gradient-to-br from-green-50 to-blue-50 py-20", children: _jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: _jsxs("div", { className: "text-center animate-slideInUp", children: [_jsxs("div", { className: "inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-6", children: [_jsx(Leaf, { className: "h-4 w-4 mr-2" }), "Comprehensive Solar Services"] }), _jsx("h1", { className: "text-5xl lg:text-6xl font-bold text-gray-900 mb-6", children: "Our Services" }), _jsx("p", { className: "text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed", children: "Comprehensive solar estimation services designed to accelerate your project pipeline, improve bid accuracy, and help you win more solar installations with confidence." })] }) }) }), _jsx("section", { className: "py-20", children: _jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: _jsx("div", { className: "space-y-20", children: services.map((service, index) => (_jsxs("div", { className: `grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`, children: [_jsxs("div", { className: `${index % 2 === 1 ? 'lg:col-start-2' : ''} animate-slideInLeft`, children: [_jsxs("div", { className: "flex items-center mb-6", children: [_jsx("div", { className: "flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-100 to-blue-100 rounded-lg mr-4", children: _jsx(service.icon, { className: "h-8 w-8 text-green-600" }) }), _jsx("h3", { className: "text-3xl font-bold text-gray-900", children: service.title })] }), _jsx("p", { className: "text-lg text-gray-600 mb-8 leading-relaxed", children: service.description }), _jsx("div", { className: "grid grid-cols-1 gap-3", children: service.features.map((feature, featureIndex) => (_jsxs("div", { className: "flex items-start space-x-3", children: [_jsx(CheckCircle, { className: "h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" }), _jsx("span", { className: "text-gray-700", children: feature })] }, featureIndex))) })] }), _jsxs("div", { className: `${index % 2 === 1 ? 'lg:col-start-1' : ''} relative animate-slideInRight`, children: [_jsx("img", { src: service.image, alt: `${service.title} - Professional solar installation and technical analysis`, className: "rounded-lg shadow-2xl w-full h-80 object-cover hover:scale-105 transition-transform duration-500" }), _jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg" })] })] }, index))) }) }) }), _jsx("section", { className: "py-20 bg-gradient-to-br from-gray-50 to-green-50", children: _jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [_jsxs("div", { className: "text-center mb-16", children: [_jsx("h2", { className: "text-4xl font-bold text-gray-900 mb-6", children: "Project Types We Support" }), _jsx("p", { className: "text-xl text-gray-600 max-w-3xl mx-auto", children: "From residential rooftops to utility-scale solar farms, we provide specialized expertise for every type of solar installation project." })] }), _jsx("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-8", children: projectTypes.map((type, index) => (_jsxs("div", { className: "bg-white p-8 rounded-lg shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300 hover:scale-105 animate-slideUp", style: { animationDelay: `${index * 0.2}s` }, children: [_jsx("div", { className: "text-6xl mb-6 text-center", children: type.icon }), _jsx("h3", { className: "text-2xl font-bold text-gray-900 mb-4 text-center", children: type.title }), _jsx("p", { className: "text-gray-600 mb-6 text-center leading-relaxed", children: type.description }), _jsx("div", { className: "space-y-2", children: type.features.map((feature, featureIndex) => (_jsxs("div", { className: "flex items-center space-x-2", children: [_jsx(CheckCircle, { className: "h-4 w-4 text-green-500 flex-shrink-0" }), _jsx("span", { className: "text-sm text-gray-700", children: feature })] }, featureIndex))) })] }, index))) })] }) }), _jsx("section", { className: "py-20", children: _jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [_jsxs("div", { className: "text-center mb-16", children: [_jsx("h2", { className: "text-4xl font-bold text-gray-900 mb-6", children: "Why Solar Professionals Choose Grid Estimations" }), _jsx("p", { className: "text-xl text-gray-600 max-w-3xl mx-auto", children: "We've built our reputation on delivering exceptional results that help solar companies grow faster and win more projects." })] }), _jsx("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-8", children: whyChooseUs.map((item, index) => (_jsxs("div", { className: "text-center group animate-slideUp", style: { animationDelay: `${index * 0.2}s` }, children: [_jsx("div", { className: "flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-100 to-blue-100 rounded-full mx-auto mb-6 group-hover:from-green-200 group-hover:to-blue-200 transition-colors duration-300", children: _jsx(item.icon, { className: "h-10 w-10 text-green-600" }) }), _jsx("h3", { className: "text-2xl font-bold text-gray-900 mb-4", children: item.title }), _jsx("p", { className: "text-gray-600 mb-4 leading-relaxed", children: item.description }), _jsx("div", { className: "inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-semibold", children: item.stats })] }, index))) })] }) }), _jsx("section", { className: "py-20 bg-gradient-to-br from-green-50 to-blue-50", children: _jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [_jsxs("div", { className: "text-center mb-16", children: [_jsx("h2", { className: "text-4xl font-bold text-gray-900 mb-6", children: "What You'll Receive" }), _jsx("p", { className: "text-xl text-gray-600 max-w-3xl mx-auto", children: "Every project includes a comprehensive documentation package designed to streamline your installation process and ensure project success." })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4", children: deliverables.map((deliverable, index) => (_jsxs("div", { className: "bg-white p-6 rounded-lg shadow-sm border border-gray-200 flex items-center hover:shadow-md transition-all duration-300 hover:scale-105 animate-slideUp", style: { animationDelay: `${index * 0.1}s` }, children: [_jsx(CheckCircle, { className: "h-6 w-6 text-green-500 mr-4 flex-shrink-0" }), _jsx("span", { className: "text-gray-700 font-medium", children: deliverable })] }, index))) })] }) }), _jsx("section", { className: "py-20", children: _jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [_jsxs("div", { className: "text-center mb-16", children: [_jsx("h2", { className: "text-4xl font-bold text-gray-900 mb-6", children: "Our Streamlined Process" }), _jsx("p", { className: "text-xl text-gray-600 max-w-3xl mx-auto", children: "Simple, efficient workflow designed to deliver accurate results quickly while maintaining the highest quality standards." })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-4 gap-8", children: [
                                { step: '1', title: 'Submit Request', description: 'Send us your project details, site information, and specific requirements through our secure portal.' },
                                { step: '2', title: 'Expert Analysis', description: 'Our certified solar engineers analyze your site using advanced modeling software and industry best practices.' },
                                { step: '3', title: 'Quality Review', description: 'Every estimate undergoes rigorous quality control to ensure accuracy and compliance with local codes.' },
                                { step: '4', title: 'Delivery & Support', description: 'Complete package delivered within 24-48 hours with ongoing support for questions or revisions.' }
                            ].map((process, index) => (_jsxs("div", { className: "text-center animate-slideUp", style: { animationDelay: `${index * 0.2}s` }, children: [_jsx("div", { className: "w-16 h-16 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 font-bold text-xl shadow-lg", children: process.step }), _jsx("h3", { className: "text-xl font-semibold text-gray-900 mb-4", children: process.title }), _jsx("p", { className: "text-gray-600 leading-relaxed", children: process.description })] }, index))) })] }) }), _jsx("section", { className: "py-20 bg-gradient-to-r from-green-600 to-blue-600", children: _jsxs("div", { className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center", children: [_jsx("h2", { className: "text-4xl font-bold text-white mb-6", children: "Ready to Streamline Your Solar Projects?" }), _jsx("p", { className: "text-xl text-green-100 mb-10 leading-relaxed", children: "Get started with a sample estimate and experience the Grid Estimations difference. See how our professional services can accelerate your project pipeline and improve your win rate." }), _jsxs("div", { className: "flex flex-col sm:flex-row gap-6 justify-center", children: [_jsx("button", { onClick: onRequestQuote, className: "inline-flex items-center px-8 py-4 bg-white text-green-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105", children: "Get Free Estimate" }), _jsx("button", { onClick: onRequestQuote, className: "inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-green-600 transition-all duration-300 hover:scale-105", children: "Schedule Consultation" })] })] }) })] }));
};
export default Services;
