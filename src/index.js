import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';


const root = createRoot(document.getElementById('root'));
root.render(<App />);

/*A partir do React 18, a função ReactDOM.render foi substituída por createRoot.
createRoot cria uma raiz de renderização para o React 18, que é mais eficiente e suporta novas funcionalidades*/