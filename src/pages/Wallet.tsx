import React from 'react';
import { RouteComponentProps } from '@reach/router';
import Layout from '../components/Layout';
import WalletView from '../components/WalletView';

const Wallet: React.FC<RouteComponentProps> = () => {
  return (
    <Layout>
      <WalletView />
    </Layout>
  );
};

export default Wallet;
