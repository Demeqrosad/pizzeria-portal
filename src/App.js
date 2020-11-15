import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import MainLayout from './components/layout/MainLayout/MainLayout.js';
import Login from './components/views/Login/Login.js';
import Dashboard from './components/views/Dashboard/Dashboard.js';
import Tables from './components/views/Tables/Tables.js';
import Booking from './components/views/Booking/Booking.js';
import Waiter from './components/views/Waiter/Waiter.js';
import Ordering from './components/views/Ordering/Ordering.js';
import Order from './components/views/Order/Order.js';
import Kitchen from './components/views/Kitchen/Kitchen.js';

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Switch>
          <Route exact path={process.env.PUBLIC_URL + '/'} component={Dashboard}/>
          <Route exact path={process.env.PUBLIC_URL + '/login'} component={Login}/>
          <Route exact path={process.env.PUBLIC_URL + '/tables'} component={Tables}/>
          <Route exact path={process.env.PUBLIC_URL + '/tables/booking/:id'} component={Booking}/>
          <Route exact path={process.env.PUBLIC_URL + '/tables/event/:id'} component={Booking}/>
          <Route exact path={process.env.PUBLIC_URL + '/ordering/'} component={Waiter}/>
          <Route exact path={process.env.PUBLIC_URL + '/ordering/new'} component={Ordering}/>
          <Route exact path={process.env.PUBLIC_URL + '/ordering/order/:id'} component={Order}/>
          <Route exact path={process.env.PUBLIC_URL + '/kitchen'} component={Kitchen}/>
        </Switch>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
