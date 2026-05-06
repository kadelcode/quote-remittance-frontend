import { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import { setNavigator } from './utils/navigation';

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    setNavigator(navigate);
  }, [navigate]);

  return (
    <Routes>
      <Route path="/" element={<h1>Home</h1>} />
    </Routes>
  );
}

export default App;
