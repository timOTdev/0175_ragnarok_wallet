import React from 'react';
import { RouteComponentProps } from '@reach/router';
import Layout from '../components/Layout';
import WalletStats from '../components/WalletStats';

const Wallet: React.FC<RouteComponentProps> = () => {
  return (
    <Layout>
      <WalletStats />
    </Layout>
  );
};

export default Wallet;
