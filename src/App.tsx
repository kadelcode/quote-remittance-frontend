import { BrowserRouter, Routes, Route } from 'react-router-dom';

import QuoteRequestForm from './components/QuoteRequestForm';

function App() {
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
