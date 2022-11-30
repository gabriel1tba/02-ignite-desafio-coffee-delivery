import { Routes as Switch, Route } from 'react-router-dom';

import DefaultLayout from '../templates/DefaultLayout';

import Home from '../pages/Home';
import Cart from '../pages/Cart';

const Routes = () => (
  <Switch>
    <Route path="/" element={<DefaultLayout />}>
      <Route path="" element={<Home />} />
      <Route path="cart" element={<Cart />} />
    </Route>
  </Switch>
);

export default Routes;
