import { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import QuoteRequestForm from './components/QuoteRequestForm';
import LandingPage from './pages/LandingPage';
import NotFoundPage from './pages/NotFoundPage';
import { setNavigator } from './utils/navigation';

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    setNavigator(navigate);
  }, [navigate]);

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/request-quote" element={<QuoteRequestForm />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
