import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyles } from './styles/GlobalStyles.js';
import { Router } from '@reach/router';
import Nfts from './pages/Nfts';
import Wallet from './pages/Wallet';
import Send from './pages/Send';
import Receive from './pages/Receive';
import Transactions from './pages/Transactions';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />{' '}
    <Router basepath={`${process.env.PUBLIC_URL}/`}>
      <Wallet path='/' />
      <Send path='/send' />
      <Receive path='/receive' />
      <Transactions path='/transactions' />
      <Nfts path='/nfts' />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
