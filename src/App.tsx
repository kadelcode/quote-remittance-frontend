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
    </Routes>
  );
}

export default App;
