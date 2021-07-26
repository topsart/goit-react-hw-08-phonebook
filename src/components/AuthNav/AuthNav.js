import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './AuthNav.module.css';
import { Typography } from '@material-ui/core';

const AuthNav = () => (
  <div>
    <NavLink
      to="/register"
      exact
      className={styles.link}
      activeClassName={styles.activeLink}
    >
      <Typography variant="h7">Регистрация</Typography>
    </NavLink>
    <NavLink
      to="/login"
      exact
      className={styles.link}
      activeClassName={styles.activeLink}
    >
      <Typography variant="h7">Логин</Typography>
    </NavLink>
  </div>
);

export default AuthNav;
