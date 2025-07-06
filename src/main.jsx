import React from 'react';
import ReactDOM from 'react-dom/client';

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

function App() {
  return (
    <div>
      <h1>Vítejte v novém funkčním projektu!</h1>
      <p>Pokud vidíte tento text, vše je správně nastaveno.</p>
      <p>API Klíč: {API_KEY ? "Načten úspěšně" : "CHYBA: Klíč nebyl nalezen!"}</p>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
