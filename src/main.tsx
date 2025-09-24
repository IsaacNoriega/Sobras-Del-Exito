
import { StrictMode, useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import Loader from './Loader';
import './index.css';

function RootWithLoader() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1100);
    return () => clearTimeout(timer);
  }, []);
  return loading ? <Loader /> : <App />;
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RootWithLoader />
  </StrictMode>,
);
