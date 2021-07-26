import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { authSelectors } from '../../redux/auth';
import styles from './Navigation.module.css';
import { Typography } from '@material-ui/core';

const Navigation = ({ isAuthenticated }) => (
  <nav className={styles.nav}>
    <NavLink
      to="/"
      exact
      className={styles.link}
      activeClassName={styles.activeLink}
    >
      <Typography variant="h6">Home</Typography>
    </NavLink>

    {isAuthenticated && (
      <NavLink
        to="/contacts"
        exact
        className={styles.link}
        activeClassName={styles.activeLink}
      >
        <Typography variant="h6">Contacts</Typography>
      </NavLink>
    )}
  </nav>
);

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps)(Navigation);
