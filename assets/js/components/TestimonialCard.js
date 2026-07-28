import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { Quote } from 'lucide-react';
const TestimonialCard = ({ quote, author, company }) => {
    return (_jsxs("div", { className: "bg-white p-6 rounded-lg shadow-sm border border-gray-200", children: [_jsxs("div", { className: "flex items-center mb-4", children: [_jsx(Quote, { className: "h-6 w-6 text-green-600 mr-2" }), _jsx("div", { className: "flex-1 h-px bg-gray-200" })] }), _jsxs("p", { className: "text-gray-700 mb-4 italic", children: ["\"", quote, "\""] }), _jsxs("div", { children: [_jsx("p", { className: "font-semibold text-gray-900", children: author }), _jsx("p", { className: "text-sm text-gray-600", children: company })] })] }));
};
export default TestimonialCard;
