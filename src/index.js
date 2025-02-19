import React from 'react';
import ReactDOM from 'react-dom/client'; // Updated import for React 18+
import App from './App'; // Import your main App component

// Select the root element from your HTML
const rootElement = document.getElementById('root');

// Create the root and render the App component
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
export default App
