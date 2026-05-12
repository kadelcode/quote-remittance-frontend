import { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import QuoteRequestForm from './components/QuoteRequestForm';
import { setNavigator } from './utils/navigation';

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    setNavigator(navigate);
  }, [navigate]);

  return (
    <Routes>
      <Route path="/" element={<h1>Home</h1>} />
      <Route path="/request-quote" element={<QuoteRequestForm />} />
      <Route path="*" element={<div className="p-4 text-center">
        <h2 className="text-2xl font-bold text-red-600">404 - Page Not Found</h2>
        <p className="mt-2">The URL you requested does not exist in this application.</p>
      </div>} />
    </Routes>
  );
}

export default App;
