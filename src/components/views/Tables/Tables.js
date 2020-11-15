import React from 'react';
//import PropTypes from 'prop-types';
import styles from './Tables.scss';
import {Link} from 'react-router-dom';

const bookingList = [
	{id: 'Booking-1', type: 'booking'},
	{id: 'Event-1', type: 'event'},
	{id: 'Event-2', type: 'event'},
];

const Tables = () => (
  <div className={styles.component}>
    <h2>Tables view</h2>
    {bookingList.filter(booking => booking.type === 'booking').map(booking => (
      <Link key={booking.id} to={`${process.env.PUBLIC_URL}/tables/booking/${booking.id}`}>Booking {booking.id}<br></br></Link>
    ))}
    {bookingList.filter(booking => booking.type === 'event').map(booking => (
      <Link key={booking.id} to={`${process.env.PUBLIC_URL}/tables/booking/${booking.id}`}>Booking {booking.id}<br></br></Link>
    ))}
  </div>
);

Tables.propTypes = {
  
};

export default Tables;