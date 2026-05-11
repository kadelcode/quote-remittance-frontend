import { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import { setNavigator } from './utils/navigation';

import QuoteRequestForm from './components/QuoteRequestForm';

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    setNavigator(navigate);
  }, [navigate]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />,
        <Route path="/request-quote" element={<QuoteRequestForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
