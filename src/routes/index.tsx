import { Routes as Switch, Route } from 'react-router-dom';

import DefaultLayout from '../templates/DefaultLayout';
import Home from '../pages/Home';

const Routes = () => (
  <Switch>
    <Route path="/" element={<DefaultLayout />}>
      <Route path="" element={<Home />} />
      {/* <Route path="history" element={<History />} /> */}
    </Route>
  </Switch>
);

export default Routes;
