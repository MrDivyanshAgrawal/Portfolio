import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AOS from 'aos';
import 'aos/dist/aos.css';

// Initialize AOS animation library
AOS.init({
  duration: 800,
  offset: 100,
  once: false,
  easing: 'ease-in-out',
  delay: 100,
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
