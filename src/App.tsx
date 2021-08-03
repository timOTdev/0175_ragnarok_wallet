import { RouteComponentProps } from '@reach/router';
import Layout from './components/Layout';

export const App: React.FC<RouteComponentProps> = () => {
  return (
    <Layout>
      <h1>App</h1>
    </Layout>
  );
};

export default App;
