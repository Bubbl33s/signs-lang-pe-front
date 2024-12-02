import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { SignsProvider } from './context/SignsContext';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <SignsProvider>
      <App />
    </SignsProvider>
  </React.StrictMode>
);
