import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { Check, Star, Zap, Shield, Clock, ArrowRight, Calculator, FileText, BarChart3 } from 'lucide-react';
const Pricing = ({ onRequestQuote }) => {
    const plans = [
        {
            name: 'Starter',
            price: '$149',
            period: 'per project',
            description: 'Perfect for small solar installers getting started',
            features: [
                'Basic solar layout design',
                'Shading analysis report',
                'Energy yield calculations',
                'PDF documentation',
                '48-hour delivery',
                'Email support',
                '1 revision included'
            ],
            popular: false,
            cta: 'Get Started',
            icon: Calculator
        },
        {
            name: 'Professional',
            price: '$249',
            period: 'per project',
            description: 'Most popular choice for established solar companies',
            features: [
                'Advanced layout optimization',
                'Comprehensive shading analysis',
                'Detailed energy yield reports',
                'AutoCAD drawings included',
                'Complete bill of materials',
                '24-hour delivery',
                'Priority phone support',
                '2 revisions included',
                'Permit-ready documentation'
            ],
            popular: true,
            cta: 'Start Free Trial',
            icon: Star
        },
        {
            name: 'Enterprise',
            price: '$399',
            period: 'per project',
            description: 'Comprehensive solution for large-scale operations',
            features: [
                'Premium layout design',
                'Advanced shading modeling',
                'Financial analysis & ROI',
                'Multiple file formats',
                'Structural calculations',
                'Same-day delivery',
                'Dedicated account manager',
                'Unlimited revisions',
                'Custom reporting',
                'API integration available'
            ],
            popular: false,
            cta: 'Contact Sales',
            icon: Zap
        }
    ];
    const volumeDiscounts = [
        { projects: '5-10 projects/month', discount: '10% discount' },
        { projects: '11-25 projects/month', discount: '15% discount' },
        { projects: '26-50 projects/month', discount: '20% discount' },
        { projects: '50+ projects/month', discount: 'Custom pricing' }
    ];
    const addOns = [
        {
            name: 'Rush Delivery',
            price: '$99',
            description: 'Get your estimate in 12 hours or less',
            icon: Clock
        },
        {
            name: 'Site Visit Report',
            price: '$199',
            description: 'Professional on-site assessment and documentation',
            icon: FileText
        },
        {
            name: 'Financial Modeling',
            price: '$149',
            description: 'Detailed ROI analysis and payback calculations',
            icon: BarChart3
        }
    ];
    return (_jsxs("div", { className: "py-16", children: [_jsx("section", { className: "bg-gradient-to-br from-green-50 to-blue-50 py-20", children: _jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: _jsxs("div", { className: "text-center animate-slideInUp", children: [_jsxs("div", { className: "inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-6", children: [_jsx(Star, { className: "h-4 w-4 mr-2" }), "Transparent Pricing"] }), _jsx("h1", { className: "text-5xl lg:text-6xl font-bold text-gray-900 mb-6", children: "Simple, Transparent Pricing" }), _jsx("p", { className: "text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed", children: "Choose the perfect plan for your solar business. All plans include our industry-leading accuracy guarantee and professional support. Start with a free trial on any plan." })] }) }) }), _jsx("section", { className: "py-20", children: _jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: _jsx("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-8", children: plans.map((plan, index) => (_jsxs("div", { className: `relative bg-white rounded-2xl shadow-lg border-2 transition-all duration-300 hover:shadow-xl hover:scale-105 animate-slideUp ${plan.popular
                                ? 'border-green-500 ring-4 ring-green-100'
                                : 'border-gray-200 hover:border-green-300'}`, style: { animationDelay: `${index * 0.2}s` }, children: [plan.popular && (_jsx("div", { className: "absolute -top-4 left-1/2 transform -translate-x-1/2", children: _jsx("div", { className: "bg-gradient-to-r from-green-600 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold", children: "Most Popular" }) })), _jsxs("div", { className: "p-8", children: [_jsx("div", { className: "flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-100 to-blue-100 rounded-full mx-auto mb-6", children: _jsx(plan.icon, { className: "h-8 w-8 text-green-600" }) }), _jsx("h3", { className: "text-2xl font-bold text-gray-900 text-center mb-2", children: plan.name }), _jsx("p", { className: "text-gray-600 text-center mb-6", children: plan.description }), _jsxs("div", { className: "text-center mb-8", children: [_jsx("span", { className: "text-5xl font-bold text-gray-900", children: plan.price }), _jsx("span", { className: "text-gray-600 ml-2", children: plan.period })] }), _jsx("ul", { className: "space-y-4 mb-8", children: plan.features.map((feature, featureIndex) => (_jsxs("li", { className: "flex items-start space-x-3", children: [_jsx(Check, { className: "h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" }), _jsx("span", { className: "text-gray-700", children: feature })] }, featureIndex))) }), _jsx("button", { onClick: onRequestQuote, className: `w-full py-4 px-6 rounded-lg font-semibold transition-all duration-300 hover:scale-105 ${plan.popular
                                                ? 'bg-gradient-to-r from-green-600 to-blue-600 text-white hover:from-green-700 hover:to-blue-700 shadow-lg hover:shadow-xl'
                                                : 'bg-gray-100 text-gray-900 hover:bg-green-50 hover:text-green-700 border-2 border-transparent hover:border-green-300'}`, children: plan.cta })] })] }, index))) }) }) }), _jsx("section", { className: "py-20 bg-gradient-to-br from-gray-50 to-green-50", children: _jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [_jsxs("div", { className: "text-center mb-16", children: [_jsx("h2", { className: "text-4xl font-bold text-gray-900 mb-6", children: "Volume Discounts Available" }), _jsx("p", { className: "text-xl text-gray-600 max-w-3xl mx-auto", children: "The more projects you send us, the more you save. Perfect for growing solar companies looking to scale their operations efficiently." })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6", children: volumeDiscounts.map((discount, index) => (_jsxs("div", { className: "bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center hover:shadow-md transition-all duration-300 hover:scale-105 animate-slideUp", style: { animationDelay: `${index * 0.1}s` }, children: [_jsx("div", { className: "text-2xl font-bold text-green-600 mb-2", children: discount.discount }), _jsx("div", { className: "text-gray-700 font-medium", children: discount.projects })] }, index))) }), _jsx("div", { className: "text-center mt-12", children: _jsxs("button", { onClick: onRequestQuote, className: "inline-flex items-center px-8 py-4 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl", children: ["Discuss Volume Pricing", _jsx(ArrowRight, { className: "ml-2 h-5 w-5" })] }) })] }) }), _jsx("section", { className: "py-20", children: _jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [_jsxs("div", { className: "text-center mb-16", children: [_jsx("h2", { className: "text-4xl font-bold text-gray-900 mb-6", children: "Optional Add-ons" }), _jsx("p", { className: "text-xl text-gray-600 max-w-3xl mx-auto", children: "Enhance your estimates with additional services tailored to your specific project needs." })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8", children: addOns.map((addon, index) => (_jsxs("div", { className: "bg-white p-8 rounded-lg shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300 hover:scale-105 animate-slideUp", style: { animationDelay: `${index * 0.2}s` }, children: [_jsx("div", { className: "flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-100 to-blue-100 rounded-full mx-auto mb-6", children: _jsx(addon.icon, { className: "h-8 w-8 text-green-600" }) }), _jsx("h3", { className: "text-xl font-semibold text-gray-900 text-center mb-4", children: addon.name }), _jsx("p", { className: "text-gray-600 text-center mb-6", children: addon.description }), _jsxs("div", { className: "text-center", children: [_jsx("span", { className: "text-3xl font-bold text-green-600", children: addon.price }), _jsx("span", { className: "text-gray-600 ml-2", children: "per project" })] })] }, index))) })] }) }), _jsx("section", { className: "py-20 bg-gradient-to-r from-green-600 to-blue-600", children: _jsx("div", { className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center", children: _jsxs("div", { className: "bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-20", children: [_jsx("h2", { className: "text-4xl font-bold text-white mb-6", children: "Start Your Free Trial Today" }), _jsx("p", { className: "text-xl text-green-100 mb-8 leading-relaxed", children: "Try any plan risk-free for 30 days. Get your first estimate completely free and experience the Grid Estimations difference. No credit card required." }), _jsxs("div", { className: "flex flex-col sm:flex-row gap-6 justify-center", children: [_jsxs("button", { onClick: onRequestQuote, className: "inline-flex items-center px-8 py-4 bg-white text-green-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105", children: ["Start Free Trial", _jsx(ArrowRight, { className: "ml-2 h-5 w-5" })] }), _jsx("button", { onClick: onRequestQuote, className: "inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-green-600 transition-all duration-300 hover:scale-105", children: "Schedule Demo" })] }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 pt-8 border-t border-white border-opacity-20", children: [_jsxs("div", { className: "flex items-center justify-center space-x-2 text-white", children: [_jsx(Shield, { className: "h-5 w-5" }), _jsx("span", { className: "text-sm", children: "30-Day Money Back" })] }), _jsxs("div", { className: "flex items-center justify-center space-x-2 text-white", children: [_jsx(Clock, { className: "h-5 w-5" }), _jsx("span", { className: "text-sm", children: "24-48h Delivery" })] }), _jsxs("div", { className: "flex items-center justify-center space-x-2 text-white", children: [_jsx(Check, { className: "h-5 w-5" }), _jsx("span", { className: "text-sm", children: "99.5% Accuracy" })] })] })] }) }) }), _jsx("section", { className: "py-20 bg-gray-50", children: _jsxs("div", { className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8", children: [_jsxs("div", { className: "text-center mb-16", children: [_jsx("h2", { className: "text-4xl font-bold text-gray-900 mb-6", children: "Pricing FAQ" }), _jsx("p", { className: "text-xl text-gray-600", children: "Common questions about our pricing and billing" })] }), _jsx("div", { className: "space-y-6", children: [
                                {
                                    question: 'How does the free trial work?',
                                    answer: 'Start with any plan and get your first project estimate completely free. No credit card required. If you\'re satisfied with the quality, continue with your chosen plan. If not, there\'s no obligation.'
                                },
                                {
                                    question: 'What payment methods do you accept?',
                                    answer: 'We accept all major credit cards, ACH bank transfers, and can set up net-30 payment terms for established businesses. All payments are processed securely through our encrypted payment system.'
                                },
                                {
                                    question: 'Can I change plans anytime?',
                                    answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we\'ll prorate any billing differences. Volume discounts are automatically applied based on your monthly project volume.'
                                },
                                {
                                    question: 'What if I need more revisions?',
                                    answer: 'Additional revisions beyond your plan\'s included amount are available for $49 each. However, most projects are completed to satisfaction within the included revisions due to our detailed initial consultation process.'
                                },
                                {
                                    question: 'Do you offer refunds?',
                                    answer: 'Yes, we offer a 30-day money-back guarantee on all plans. If you\'re not completely satisfied with our service quality, we\'ll provide a full refund, no questions asked.'
                                }
                            ].map((faq, index) => (_jsxs("div", { className: "bg-white p-8 rounded-lg shadow-sm border border-gray-200 animate-slideUp", style: { animationDelay: `${index * 0.1}s` }, children: [_jsx("h3", { className: "text-lg font-semibold text-gray-900 mb-3", children: faq.question }), _jsx("p", { className: "text-gray-600 leading-relaxed", children: faq.answer })] }, index))) })] }) })] }));
};
export default Pricing;
