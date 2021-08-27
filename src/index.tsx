import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyles } from './styles/GlobalStyles.js';
import { Router } from '@reach/router';
import App from './App';
import Nfts from './pages/Nfts';
import Wallet from './pages/Wallet';
import Send from './pages/Send';
import Receive from './pages/Receive';
import Transactions from './pages/Transactions';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />{' '}
    <Router>
      <App path='/' />
      <Nfts path='/nfts' />
      <Wallet path='/wallet' />
      <Send path='/send' />
      <Receive path='/receive' />
      <Transactions path='/transactions' />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
