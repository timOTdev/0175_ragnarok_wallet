import { RouteComponentProps } from '@reach/router';
import Layout from '../components/Layout';
import ReceiveView from '../components/ReceiveView';

const Receive: React.FC<RouteComponentProps> = () => {
  return (
    <Layout>
      <ReceiveView />
    </Layout>
  );
};

export default Receive;
