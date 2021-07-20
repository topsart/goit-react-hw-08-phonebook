import React from 'react';
import { connect } from 'react-redux';
import styles from './Filter.module.css';
import shortid from 'shortid';
import { contactsSelectors, changeFilter } from '../../redux/contacts';

const nameInputId = shortid.generate();

const Filter = ({ value, onChange }) => (
  <div className={styles.filter}>
    <label className={styles.filter__label} htmlFor={nameInputId}>
      Find contacts by name
    </label>
    <input
      className={styles.filter__input}
      type="text"
      name="filter"
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
