import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// Entry point for the React application.  It attaches the App component
// to the DOM and wraps it in StrictMode for highlighting potential
// problems.
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);