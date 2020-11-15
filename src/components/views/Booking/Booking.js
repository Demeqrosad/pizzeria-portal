import React from 'react';
//import PropTypes from 'prop-types';
import styles from './Booking.scss';
import {useParams} from 'react-router-dom';

const Booking = () => {
	const { id } = useParams();
	return (
    <div className={styles.component}>
      <h2>Booking view</h2>
      <p>Current booking: { id }</p>
    </div>
  );
};

Booking.propTypes = {
  
};

export default Booking;