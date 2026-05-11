import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import QuoteRequestForm from './components/QuoteRequestForm.tsx';

import './index.css';
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <QuoteRequestForm />
  </StrictMode>,
);
