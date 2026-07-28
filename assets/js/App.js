import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useState } from 'react';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import QuotePopup from './components/QuotePopup.js';
import CookieConsent from './components/CookieConsent.js';
import Home from './pages/Home.js';
import About from './pages/About.js';
import Services from './pages/Services.js';
import Trades from './pages/Trades.js';
import Pricing from './pages/Pricing.js';
import Contact from './pages/Contact.js';
function App() {
    const [currentPage, setCurrentPage] = useState('home');
    const [showQuotePopup, setShowQuotePopup] = useState(false);
    const renderPage = () => {
        switch (currentPage) {
            case 'home':
                return _jsx(Home, { onRequestQuote: () => setShowQuotePopup(true) });
            case 'about':
                return _jsx(About, { onRequestQuote: () => setShowQuotePopup(true) });
           case 'services':
    return _jsx(Services, {
        onRequestQuote: () => setShowQuotePopup(true)
    });

case 'trades':
    return _jsx(Trades, {
        onRequestQuote: () => setShowQuotePopup(true)
    });

case 'pricing':
                return _jsx(Pricing, { onRequestQuote: () => setShowQuotePopup(true) });
            case 'contact':
                return _jsx(Contact, {});
            default:
                return _jsx(Home, { onRequestQuote: () => setShowQuotePopup(true) });
        }
    };
    return (_jsxs("div", { className: "min-h-screen bg-white", children: [_jsx(Header, { currentPage: currentPage, setCurrentPage: setCurrentPage, onRequestQuote: () => setShowQuotePopup(true) }), _jsx("main", { children: renderPage() }), _jsx(Footer, { setCurrentPage: setCurrentPage }), showQuotePopup && (_jsx(QuotePopup, { onClose: () => setShowQuotePopup(false) })), _jsx(CookieConsent, {})] }));
}
export default App;
