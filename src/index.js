import React from 'react';
import { createRoot } from 'react-dom/client';
import './Index.css';
import App from './App';
import { BrowserRouter as Router} from 'react-router-dom';

const root = createRoot(document.getElementById('root'));
root.render(
    <Router>
        <React.StrictMode>
        <App />
        </React.StrictMode>
    </Router>
  
);
