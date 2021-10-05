import { Switch, Route } from 'react-router-dom';
import Wallet from './pages/Wallet';
import Send from './pages/Send';
import Receive from './pages/Receive';
import Transactions from './pages/Transactions';
import { BrowserRouter } from 'react-router-dom';

export const App = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path='/' component={Wallet} />
        <Route path='/send' component={Send} />
        <Route path='/receive' component={Receive} />
        <Route path='/transactions' component={Transactions} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
