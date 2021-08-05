import { RouteComponentProps } from '@reach/router';
import Layout from '../components/Layout';
import SendView from '../components/SendView';

const Send: React.FC<RouteComponentProps> = () => {
  return (
    <Layout>
      <SendView />
    </Layout>
  );
};

export default Send;
