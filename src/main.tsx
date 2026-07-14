import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import CommandCenter from '../components/CommandCenter';
import './styles.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode><CommandCenter /></StrictMode>,
);
