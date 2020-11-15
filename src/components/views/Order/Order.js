import React from 'react';
//import PropTypes from 'prop-types';
import styles from './Order.scss';
import {useParams} from 'react-router-dom';


const Order = () => {
	const { id } = useParams();
	return (
    <div className={styles.component}>
      <h2>Order view</h2>
      <p>Current order { id }</p>
    </div>
  );
};

Order.propTypes = {
  
};

export default Order;