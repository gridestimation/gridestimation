import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, MessageSquare, Calendar, Users, Award } from 'lucide-react';
const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        projectType: '',
        message: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true);
        setTimeout(() => setIsSubmitted(false), 3000);
    };
    const contactMethods = [
        {
            icon: Mail,
            title: 'Email Us',
            primary: 'info@gridestimations.com',
            secondary: 'We respond within 2 hours during business hours',
            action: 'mailto:info@gridestimations.com'
        },
        {
            icon: Phone,
            title: 'Call Us',
            primary: '+1 (555) 123-4567',
            secondary: 'Mon-Fri, 8AM-6PM PST',
            action: 'tel:+15551234567'
        },
        {
            icon: MapPin,
            title: 'Visit Us',
            primary: '123 Solar Street',
            secondary: 'San Francisco, CA 94105',
            action: '#'
        },
        {
            icon: Clock,
            title: 'Response Time',
            primary: '24-48 hours for estimates',
            secondary: 'Same-day quotes available for urgent projects',
            action: '#'
        }
    ];
    const faqs = [
        {
            question: 'What information do you need to get started?',
            answer: 'We need basic site information including address, roof dimensions, electrical panel details, and any shading obstacles. Satellite imagery, utility bills, and project requirements help us provide more accurate estimates. Our team can work with minimal information and gather additional details as needed.'
        },
        {
            question: 'How long does the estimation process take?',
            answer: 'Most estimates are completed within 24-48 hours of receiving all necessary information. Complex projects or those requiring detailed structural analysis may take 3-5 business days. Rush requests can be accommodated with expedited service for urgent project deadlines.'
        },
        {
            question: 'Do you provide revisions if needed?',
            answer: 'Yes, we include one round of revisions with every estimate at no additional cost. This covers design modifications, equipment changes, or layout adjustments based on your feedback. Additional revisions can be accommodated based on the scope of changes required.'
        },
        {
            question: 'What file formats do you deliver?',
            answer: 'We provide estimates in multiple formats for easy integration with your workflow: PDF reports for presentations, AutoCAD drawings (.dwg) for technical teams, Excel spreadsheets for financial analysis, and SketchUp files for 3D visualization when requested.'
        },
        {
            question: 'Do you work with all solar equipment brands?',
            answer: 'Yes, we work with all major solar panel and inverter manufacturers. Our team stays current with the latest equipment specifications, performance data, and compatibility requirements. We can design systems using your preferred equipment or recommend optimal components based on project requirements.'
        },
        {
            question: 'Can you help with permit applications?',
            answer: 'Absolutely! Our estimates include permit-ready documentation packages with all necessary technical drawings, calculations, and compliance verification. We understand local code requirements across different jurisdictions and ensure all deliverables meet permit submission standards.'
        }
    ];
    const serviceHighlights = [
        {
            icon: Users,
            title: '500+ Projects',
            description: 'Completed across residential, commercial, and utility-scale installations'
        },
        {
            icon: Award,
            title: '99.5% Accuracy',
            description: 'Verified against actual installation results and performance data'
        },
        {
            icon: Clock,
            title: '24-48h Delivery',
            description: 'Fast turnaround without compromising quality or attention to detail'
        }
    ];
    return (_jsxs("div", { className: "py-16", children: [_jsx("section", { className: "bg-gradient-to-br from-green-50 to-blue-50 py-20", children: _jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: _jsxs("div", { className: "text-center animate-slideInUp", children: [_jsxs("div", { className: "inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-6", children: [_jsx(MessageSquare, { className: "h-4 w-4 mr-2" }), "Let's Start Your Project"] }), _jsx("h1", { className: "text-5xl lg:text-6xl font-bold text-gray-900 mb-6", children: "Let's Discuss Your Next Solar Project" }), _jsx("p", { className: "text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed", children: "Ready to accelerate your solar projects with professional estimations? Get in touch with our team to discuss your specific needs and see how we can help streamline your project pipeline." })] }) }) }), _jsx("section", { className: "py-20", children: _jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [_jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16", children: contactMethods.map((method, index) => (_jsxs("div", { className: "text-center group animate-slideUp hover:scale-105 transition-transform duration-300", style: { animationDelay: `${index * 0.1}s` }, children: [_jsx("div", { className: "flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-100 to-blue-100 rounded-lg mx-auto mb-4 group-hover:from-green-200 group-hover:to-blue-200 transition-colors duration-300", children: _jsx(method.icon, { className: "h-8 w-8 text-green-600" }) }), _jsx("h3", { className: "text-lg font-semibold text-gray-900 mb-2", children: method.title }), _jsx("p", { className: "text-gray-900 font-medium mb-1", children: method.primary }), _jsx("p", { className: "text-sm text-gray-600", children: method.secondary })] }, index))) }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8 mb-16", children: serviceHighlights.map((highlight, index) => (_jsxs("div", { className: "bg-gradient-to-br from-green-50 to-blue-50 p-6 rounded-lg text-center animate-slideUp", style: { animationDelay: `${index * 0.2}s` }, children: [_jsx("div", { className: "flex items-center justify-center w-12 h-12 bg-white rounded-lg mx-auto mb-4 shadow-sm", children: _jsx(highlight.icon, { className: "h-6 w-6 text-green-600" }) }), _jsx("h4", { className: "text-xl font-bold text-gray-900 mb-2", children: highlight.title }), _jsx("p", { className: "text-gray-600 text-sm", children: highlight.description })] }, index))) })] }) }), _jsx("section", { className: "py-20 bg-white", children: _jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: _jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-16", children: [_jsxs("div", { className: "animate-slideInLeft", children: [_jsx("h2", { className: "text-4xl font-bold text-gray-900 mb-8", children: "Get in Touch" }), _jsx("p", { className: "text-lg text-gray-600 mb-8 leading-relaxed", children: "Whether you're a solar installer looking to streamline your estimation process, an EPC company managing multiple projects, or a developer planning large-scale installations, we're here to help you succeed with professional, accurate solar estimations." }), _jsxs("div", { className: "space-y-6 mb-8", children: [_jsxs("div", { className: "flex items-start space-x-4", children: [_jsx("div", { className: "flex items-center justify-center w-10 h-10 bg-green-100 rounded-lg flex-shrink-0", children: _jsx(CheckCircle, { className: "h-5 w-5 text-green-600" }) }), _jsxs("div", { children: [_jsx("h4", { className: "font-semibold text-gray-900 mb-1", children: "Free Initial Consultation" }), _jsx("p", { className: "text-gray-600", children: "Discuss your project requirements and get expert recommendations at no cost." })] })] }), _jsxs("div", { className: "flex items-start space-x-4", children: [_jsx("div", { className: "flex items-center justify-center w-10 h-10 bg-blue-100 rounded-lg flex-shrink-0", children: _jsx(Calendar, { className: "h-5 w-5 text-blue-600" }) }), _jsxs("div", { children: [_jsx("h4", { className: "font-semibold text-gray-900 mb-1", children: "Flexible Scheduling" }), _jsx("p", { className: "text-gray-600", children: "We work around your timeline with rush services available for urgent projects." })] })] }), _jsxs("div", { className: "flex items-start space-x-4", children: [_jsx("div", { className: "flex items-center justify-center w-10 h-10 bg-green-100 rounded-lg flex-shrink-0", children: _jsx(Users, { className: "h-5 w-5 text-green-600" }) }), _jsxs("div", { children: [_jsx("h4", { className: "font-semibold text-gray-900 mb-1", children: "Dedicated Support" }), _jsx("p", { className: "text-gray-600", children: "Direct access to our engineering team for questions and project support." })] })] })] }), _jsxs("div", { className: "bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg", children: [_jsx("h4", { className: "font-semibold text-gray-900 mb-2", children: "Ready to Get Started?" }), _jsx("p", { className: "text-gray-600 mb-4", children: "Request a sample estimate today and see the quality and detail that sets Grid Estimations apart." }), _jsx("button", { className: "inline-flex items-center px-4 py-2 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors duration-300", children: "Request Sample Estimate" })] })] }), _jsx("div", { className: "animate-slideInRight", children: _jsxs("form", { onSubmit: handleSubmit, className: "bg-white p-8 rounded-lg shadow-lg border border-gray-200", children: [_jsx("h3", { className: "text-3xl font-bold text-gray-900 mb-6", children: "Request a Quote" }), _jsx("p", { className: "text-gray-600 mb-8", children: "Fill out the form below and we'll get back to you within 2 hours during business hours." }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6 mb-6", children: [_jsxs("div", { children: [_jsx("label", { htmlFor: "name", className: "block text-sm font-medium text-gray-700 mb-2", children: "Full Name *" }), _jsx("input", { type: "text", id: "name", name: "name", value: formData.name, onChange: handleInputChange, required: true, className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors duration-300", placeholder: "Your full name" })] }), _jsxs("div", { children: [_jsx("label", { htmlFor: "email", className: "block text-sm font-medium text-gray-700 mb-2", children: "Email Address *" }), _jsx("input", { type: "email", id: "email", name: "email", value: formData.email, onChange: handleInputChange, required: true, className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors duration-300", placeholder: "your@email.com" })] })] }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6 mb-6", children: [_jsxs("div", { children: [_jsx("label", { htmlFor: "company", className: "block text-sm font-medium text-gray-700 mb-2", children: "Company Name" }), _jsx("input", { type: "text", id: "company", name: "company", value: formData.company, onChange: handleInputChange, className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors duration-300", placeholder: "Your company" })] }), _jsxs("div", { children: [_jsx("label", { htmlFor: "projectType", className: "block text-sm font-medium text-gray-700 mb-2", children: "Project Type" }), _jsxs("select", { id: "projectType", name: "projectType", value: formData.projectType, onChange: handleInputChange, className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors duration-300", children: [_jsx("option", { value: "", children: "Select project type" }), _jsx("option", { value: "residential", children: "Residential" }), _jsx("option", { value: "commercial", children: "Commercial" }), _jsx("option", { value: "utility", children: "Utility-Scale" }), _jsx("option", { value: "carport", children: "Solar Carport" }), _jsx("option", { value: "ground-mount", children: "Ground Mount" }), _jsx("option", { value: "other", children: "Other" })] })] })] }), _jsxs("div", { className: "mb-6", children: [_jsx("label", { htmlFor: "message", className: "block text-sm font-medium text-gray-700 mb-2", children: "Project Details" }), _jsx("textarea", { id: "message", name: "message", value: formData.message, onChange: handleInputChange, rows: 5, className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors duration-300", placeholder: "Tell us about your project, timeline, system size, location, and any specific requirements..." })] }), _jsx("button", { type: "submit", disabled: isSubmitted, className: "w-full bg-gradient-to-r from-green-600 to-blue-600 text-white py-4 px-6 rounded-lg font-semibold hover:from-green-700 hover:to-blue-700 focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center hover:scale-105", children: isSubmitted ? (_jsxs(_Fragment, { children: [_jsx(CheckCircle, { className: "mr-2 h-5 w-5" }), "Message Sent!"] })) : (_jsxs(_Fragment, { children: [_jsx(Send, { className: "mr-2 h-5 w-5" }), "Send Message"] })) }), _jsx("p", { className: "text-sm text-gray-500 mt-4 text-center", children: "We'll respond within 2 hours during business hours. Your information is secure and never shared." })] }) })] }) }) }), _jsx("section", { className: "py-20 bg-gradient-to-br from-gray-50 to-green-50", children: _jsxs("div", { className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8", children: [_jsxs("div", { className: "text-center mb-16", children: [_jsx("h2", { className: "text-4xl font-bold text-gray-900 mb-6", children: "Frequently Asked Questions" }), _jsx("p", { className: "text-xl text-gray-600", children: "Common questions about our services, process, and deliverables" })] }), _jsx("div", { className: "space-y-6", children: faqs.map((faq, index) => (_jsxs("div", { className: "bg-white p-8 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300 animate-slideUp", style: { animationDelay: `${index * 0.1}s` }, children: [_jsx("h3", { className: "text-lg font-semibold text-gray-900 mb-3", children: faq.question }), _jsx("p", { className: "text-gray-600 leading-relaxed", children: faq.answer })] }, index))) })] }) }), _jsx("section", { className: "py-20 bg-gradient-to-r from-green-600 to-blue-600", children: _jsxs("div", { className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center", children: [_jsx("h2", { className: "text-4xl font-bold text-white mb-6", children: "Ready to Get Started?" }), _jsx("p", { className: "text-xl text-green-100 mb-10 leading-relaxed", children: "Request a sample estimate today and see how Grid Estimations can accelerate your solar projects with professional, accurate estimations delivered fast." }), _jsxs("div", { className: "flex flex-col sm:flex-row gap-6 justify-center", children: [_jsx("button", { className: "inline-flex items-center px-8 py-4 bg-white text-green-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105", children: "Get Free Estimate" }), _jsx("button", { className: "inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-green-600 transition-all duration-300 hover:scale-105", children: "Schedule Consultation" })] })] }) })] }));
};
export default Contact;
