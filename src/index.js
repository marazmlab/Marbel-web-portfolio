import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

import './styles/reset.css';

const root = createRoot(document.getElementById('root'));
root.render(<App />);
