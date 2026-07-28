import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useState } from 'react';
import { Mail, CheckCircle, ArrowRight } from 'lucide-react';
const Newsletter = () => {
    const [email, setEmail] = useState('');
    const [isSubscribed, setIsSubscribed] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email)
            return;
        setIsLoading(true);
        // Simulate API call
        setTimeout(() => {
            setIsSubscribed(true);
            setIsLoading(false);
            setEmail('');
            // Reset after 3 seconds
            setTimeout(() => {
                setIsSubscribed(false);
            }, 3000);
        }, 1000);
    };
    return (_jsx("section", { className: "py-20 bg-gradient-to-r from-green-600 to-blue-600", children: _jsx("div", { className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center", children: _jsxs("div", { className: "bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-20", children: [_jsx("div", { className: "flex items-center justify-center w-16 h-16 bg-white bg-opacity-20 rounded-full mx-auto mb-6", children: _jsx(Mail, { className: "h-8 w-8 text-white" }) }), _jsx("h2", { className: "text-3xl font-bold text-white mb-4", children: "Stay Updated with Solar Industry Insights" }), _jsx("p", { className: "text-green-100 text-lg mb-8 max-w-2xl mx-auto", children: "Get the latest solar estimation tips, industry trends, and exclusive offers delivered to your inbox. Join our community of solar professionals." }), !isSubscribed ? (_jsxs("form", { onSubmit: handleSubmit, className: "max-w-md mx-auto", children: [_jsxs("div", { className: "flex flex-col sm:flex-row gap-4", children: [_jsx("div", { className: "flex-1", children: _jsx("input", { type: "email", value: email, onChange: (e) => setEmail(e.target.value), placeholder: "Enter your email address", required: true, className: "w-full px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white focus:ring-opacity-50 text-gray-900 placeholder-gray-500" }) }), _jsx("button", { type: "submit", disabled: isLoading, className: "px-6 py-3 bg-white text-green-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center hover:scale-105", children: isLoading ? (_jsx("div", { className: "w-5 h-5 border-2 border-green-600 border-t-transparent rounded-full animate-spin" })) : (_jsxs(_Fragment, { children: ["Subscribe", _jsx(ArrowRight, { className: "ml-2 h-4 w-4" })] })) })] }), _jsx("p", { className: "text-green-100 text-sm mt-4 opacity-80", children: "No spam, unsubscribe at any time. We respect your privacy." })] })) : (_jsxs("div", { className: "animate-fadeIn", children: [_jsxs("div", { className: "flex items-center justify-center space-x-2 text-white mb-4", children: [_jsx(CheckCircle, { className: "h-6 w-6" }), _jsx("span", { className: "text-lg font-semibold", children: "Successfully Subscribed!" })] }), _jsx("p", { className: "text-green-100", children: "Thank you for joining our community. Check your inbox for a welcome email." })] }))] }) }) }));
};
export default Newsletter;
