import React from 'react';
//import PropTypes from 'prop-types';
import styles from './PageNav.scss';
import {NavLink} from 'react-router-dom';

const PageNav = () => (
  <nav className={styles.component}>
    <NavLink exact to={process.env.PUBLIC_URL + '/'} activeClassName='active'>Home </NavLink>
    <NavLink to={process.env.PUBLIC_URL + '/login'} activeClassName='active'>Login </NavLink>
    <NavLink to={process.env.PUBLIC_URL + '/tables'} activeClassName='active'>Tables </NavLink>
    <NavLink to={process.env.PUBLIC_URL + '/ordering/'} activeClassName='active'>Waiter </NavLink>
    <NavLink to={process.env.PUBLIC_URL + '/kitchen'} activeClassName='active'>Kitchen </NavLink>
  </nav>
);

PageNav.propTypes = {
  
};

export default PageNav;