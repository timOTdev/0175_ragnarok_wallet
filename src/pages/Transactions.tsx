import { RouteComponentProps } from '@reach/router';
import Layout from '../components/Layout';
import TransactionsView from '../components/TransactionsView';

const Transactions: React.FC<RouteComponentProps> = () => {
  return (
    <Layout>
      <TransactionsView />
    </Layout>
  );
};

export default Transactions;
