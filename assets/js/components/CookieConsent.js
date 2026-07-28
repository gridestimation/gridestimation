import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useState, useEffect } from 'react';
import { Cookie, X, Settings } from 'lucide-react';
const CookieConsent = () => {
    const [showConsent, setShowConsent] = useState(false);
    const [showSettings, setShowSettings] = useState(false);
    const [preferences, setPreferences] = useState({
        necessary: true,
        analytics: false,
        marketing: false,
        functional: false
    });
    useEffect(() => {
        const consent = localStorage.getItem('cookieConsent');
        if (!consent) {
            setShowConsent(true);
        }
    }, []);
    const handleAcceptAll = () => {
        const allAccepted = {
            necessary: true,
            analytics: true,
            marketing: true,
            functional: true
        };
        setPreferences(allAccepted);
        localStorage.setItem('cookieConsent', JSON.stringify(allAccepted));
        setShowConsent(false);
    };
    const handleSavePreferences = () => {
        localStorage.setItem('cookieConsent', JSON.stringify(preferences));
        setShowConsent(false);
        setShowSettings(false);
    };
    const handleReject = () => {
        const minimal = {
            necessary: true,
            analytics: false,
            marketing: false,
            functional: false
        };
        setPreferences(minimal);
        localStorage.setItem('cookieConsent', JSON.stringify(minimal));
        setShowConsent(false);
    };
    if (!showConsent)
        return null;
    return (_jsx("div", { className: "fixed bottom-0 left-0 right-0 z-50 animate-slideUp", children: !showSettings ? (_jsx("div", { className: "bg-white border-t border-gray-200 shadow-2xl p-6", children: _jsx("div", { className: "max-w-7xl mx-auto", children: _jsxs("div", { className: "flex items-start space-x-4", children: [_jsx("div", { className: "flex-shrink-0", children: _jsx(Cookie, { className: "h-8 w-8 text-green-600" }) }), _jsxs("div", { className: "flex-1", children: [_jsx("h3", { className: "text-lg font-semibold text-gray-900 mb-2", children: "We Value Your Privacy" }), _jsx("p", { className: "text-gray-600 text-sm mb-4", children: "We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. By clicking \"Accept All\", you consent to our use of cookies. You can customize your preferences or learn more in our privacy policy." }), _jsxs("div", { className: "flex flex-col sm:flex-row gap-3", children: [_jsx("button", { onClick: handleAcceptAll, className: "px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-300 font-medium", children: "Accept All" }), _jsxs("button", { onClick: () => setShowSettings(true), className: "px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-300 font-medium flex items-center", children: [_jsx(Settings, { className: "h-4 w-4 mr-2" }), "Customize Settings"] }), _jsx("button", { onClick: handleReject, className: "px-6 py-2 text-gray-600 hover:text-gray-800 transition-colors duration-300 font-medium", children: "Reject All" })] })] })] }) }) })) : (_jsx("div", { className: "bg-white border-t border-gray-200 shadow-2xl p-6 max-h-96 overflow-y-auto", children: _jsxs("div", { className: "max-w-4xl mx-auto", children: [_jsxs("div", { className: "flex items-center justify-between mb-6", children: [_jsx("h3", { className: "text-xl font-semibold text-gray-900", children: "Cookie Preferences" }), _jsx("button", { onClick: () => setShowSettings(false), className: "p-2 hover:bg-gray-100 rounded-lg transition-colors duration-300", children: _jsx(X, { className: "h-5 w-5 text-gray-500" }) })] }), _jsxs("div", { className: "space-y-6", children: [_jsxs("div", { className: "flex items-center justify-between p-4 bg-gray-50 rounded-lg", children: [_jsxs("div", { children: [_jsx("h4", { className: "font-medium text-gray-900", children: "Necessary Cookies" }), _jsx("p", { className: "text-sm text-gray-600", children: "Required for basic site functionality" })] }), _jsxs("div", { className: "flex items-center", children: [_jsx("span", { className: "text-sm text-gray-500 mr-2", children: "Always Active" }), _jsx("div", { className: "w-12 h-6 bg-green-600 rounded-full relative", children: _jsx("div", { className: "w-5 h-5 bg-white rounded-full absolute top-0.5 right-0.5" }) })] })] }), _jsxs("div", { className: "flex items-center justify-between p-4 border border-gray-200 rounded-lg", children: [_jsxs("div", { children: [_jsx("h4", { className: "font-medium text-gray-900", children: "Analytics Cookies" }), _jsx("p", { className: "text-sm text-gray-600", children: "Help us understand how visitors interact with our website" })] }), _jsxs("label", { className: "relative inline-flex items-center cursor-pointer", children: [_jsx("input", { type: "checkbox", checked: preferences.analytics, onChange: (e) => setPreferences({ ...preferences, analytics: e.target.checked }), className: "sr-only peer" }), _jsx("div", { className: "w-12 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-6 peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600" })] })] }), _jsxs("div", { className: "flex items-center justify-between p-4 border border-gray-200 rounded-lg", children: [_jsxs("div", { children: [_jsx("h4", { className: "font-medium text-gray-900", children: "Marketing Cookies" }), _jsx("p", { className: "text-sm text-gray-600", children: "Used to deliver relevant advertisements and track ad performance" })] }), _jsxs("label", { className: "relative inline-flex items-center cursor-pointer", children: [_jsx("input", { type: "checkbox", checked: preferences.marketing, onChange: (e) => setPreferences({ ...preferences, marketing: e.target.checked }), className: "sr-only peer" }), _jsx("div", { className: "w-12 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-6 peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600" })] })] }), _jsxs("div", { className: "flex items-center justify-between p-4 border border-gray-200 rounded-lg", children: [_jsxs("div", { children: [_jsx("h4", { className: "font-medium text-gray-900", children: "Functional Cookies" }), _jsx("p", { className: "text-sm text-gray-600", children: "Enable enhanced functionality and personalization" })] }), _jsxs("label", { className: "relative inline-flex items-center cursor-pointer", children: [_jsx("input", { type: "checkbox", checked: preferences.functional, onChange: (e) => setPreferences({ ...preferences, functional: e.target.checked }), className: "sr-only peer" }), _jsx("div", { className: "w-12 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-6 peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600" })] })] })] }), _jsxs("div", { className: "flex flex-col sm:flex-row gap-3 mt-6 pt-6 border-t border-gray-200", children: [_jsx("button", { onClick: handleSavePreferences, className: "px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-300 font-medium", children: "Save Preferences" }), _jsx("button", { onClick: handleAcceptAll, className: "px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-300 font-medium", children: "Accept All" })] })] }) })) }));
};
export default CookieConsent;
