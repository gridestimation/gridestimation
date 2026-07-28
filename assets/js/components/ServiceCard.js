import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
const ServiceCard = ({ icon: Icon, title, description }) => {
    return (_jsxs("div", { className: "bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow group", children: [_jsx("div", { className: "flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg mb-4 group-hover:bg-green-200 transition-colors", children: _jsx(Icon, { className: "h-6 w-6 text-green-600" }) }), _jsx("h3", { className: "text-lg font-semibold text-gray-900 mb-2", children: title }), _jsx("p", { className: "text-gray-600 text-sm leading-relaxed", children: description })] }));
};
export default ServiceCard;
