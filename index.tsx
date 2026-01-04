import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

// Suppress benign ResizeObserver errors commonly seen with GSAP/ScrollTrigger
window.addEventListener('error', (e) => {
  if (
    e.message === 'ResizeObserver loop completed with undelivered notifications.' ||
    e.message === 'ResizeObserver loop limit exceeded'
  ) {
    e.stopImmediatePropagation();
  }
});

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(
    /* StrictMode removed to prevent double-initialization of Lenis scroll engine */
    <App />
  );
}