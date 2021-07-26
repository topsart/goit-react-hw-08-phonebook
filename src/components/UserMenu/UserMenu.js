import React from 'react';
import { connect } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
import defaultAvatar from './default-avatar.png';
import styles from './UserMenu.module.css';
import { Button } from '@material-ui/core';

const UserMenu = ({ avatar, name, onLogout }) => (
  <div className={styles.container}>
    <img src={avatar} alt="" width="32" className={styles.avatar} />
    <span className={styles.name}>Welcome, {name}</span>
    <Button
      type="button"
      variant="contained"
      color="default"
      onClick={onLogout}
    >
      Logout
    </Button>
  </div>
);

const mapStateToProps = state => ({
  name: authSelectors.getUsername(state),
  avatar: defaultAvatar,
});

const mapDispatchToProps = {
  onLogout: authOperations.logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
