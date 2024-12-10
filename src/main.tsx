import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router';

import App from './App';
import { SignsProvider } from './context/SignsContext';
import { AuthProvider } from './context/AuthContext';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <SignsProvider>
          <App />
        </SignsProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>
);
