import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Navbar from './sections/navbar/Navbar.jsx';
import Hero from './sections/Hero/Hero.jsx'
import Features from "./sections/Features/Features.jsx";
import Footer from './sections/footer/Footer.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Navbar />
    <Hero />
    <Features />
    <Footer />
  </React.StrictMode>,
)
