import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import '@fontsource/inter/400.css'
import '@fontsource/inter/500.css'
import '@fontsource/inter/600.css'
import '@fontsource/inter/700.css'

// Inicializar tema salvo
const savedTheme = localStorage.getItem('theme');
if (savedTheme && savedTheme !== 'default') {
  document.documentElement.setAttribute('data-theme', savedTheme);
}

createRoot(document.getElementById("root")!).render(<App />);
