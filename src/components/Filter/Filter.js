import React from 'react';
import { connect } from 'react-redux';
import styles from './Filter.module.css';
import shortid from 'shortid';
import { contactsSelectors, changeFilter } from '../../redux/contacts';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';

const nameInputId = shortid.generate();

const Filter = ({ value, onChange }) => (
  <div className={styles.search}>
    <div className={styles.searchIcon}>
      <SearchIcon />
    </div>
    <InputBase
      className={styles.inputInput}
      color="secondary"
      placeholder="Search contacts..."
      id={nameInputId}
      value={value}
      onChange={onChange}
    />
  </div>
);

const mapStateToProps = state => ({
  value: contactsSelectors.getFilter(state),
});

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(changeFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
