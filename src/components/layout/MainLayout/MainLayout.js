import React from 'react';
import PropTypes from 'prop-types';
//import Header from '../Header/Header';
import PageNav from '../PageNav/PageNav.js';

const MainLayout = ({children}) => {
	return (
    <div>
      <PageNav />
      { children }
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;