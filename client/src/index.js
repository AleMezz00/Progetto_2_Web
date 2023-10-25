import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Login from './components/login';
import Menu from './components/menu';
import Admin from './components/admin';
import AggiungiProdotto from './components/aggiungi_prodotto';
import ModificaProdotto from './components/modifica';
import Carrello from './components/carrello';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App/>
);
