import React from 'react';
//import PropTypes from 'prop-types';
import styles from './Waiter.scss';
import {Link} from 'react-router-dom';

const orderList = [
	{id: '123abc'},
	{id: '456def'},
];

const Waiter = () => (
  <div className={styles.component}>
    <h2>Waiter view</h2>
    {orderList.map(order => (
      <Link key={order.id} to={`${process.env.PUBLIC_URL}/ordering/order/${order.id}`}>Order {order.id}<br></br></Link>
    ))}
    <Link to={process.env.PUBLIC_URL + '/ordering/new'}>New order</Link>
  </div>
);

Waiter.propTypes = {
  
};

export default Waiter;