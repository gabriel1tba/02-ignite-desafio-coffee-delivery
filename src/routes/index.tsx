import { Routes as Switch, Route } from 'react-router-dom';

import DefaultLayout from '../templates/DefaultLayout';

import Home from '../pages/Home';
import Checkout from '../pages/Checkout';
import ConfirmedOrder from '../pages/ConfirmedOrder';

const Routes = () => (
  <Switch>
    <Route path="/" element={<DefaultLayout />}>
      <Route path="" element={<Home />} />
      <Route path="checkout" element={<Checkout />} />
      <Route path="success-order" element={<ConfirmedOrder />} />
    </Route>
  </Switch>
);

export default Routes;
