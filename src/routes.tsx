import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Cart from './pages/Cart';
import NewProduct from './pages/NewProduct';
import Login from './pages/Login';
import Register from './pages/Register';

const Routes = (): JSX.Element => {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/register" exact component={Register} />
      <Route path="/home" component={Home} />
      <Route path="/cart" component={Cart} />
      <Route path="/newproduct" component={NewProduct} />
    </Switch>
  );
};

export default Routes;
