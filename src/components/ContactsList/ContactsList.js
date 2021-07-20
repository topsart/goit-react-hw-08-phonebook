import React from 'react';
import { connect } from 'react-redux';
import { contactsOperations, contactsSelectors } from '../../redux/contacts';
import styles from './ContactsList.module.css';

const ContactsList = ({ contacts, onDeleteContact }) => (
  <ul className={styles.contacts_list}>
    {contacts.map(({ id, name, number }) => (
      <li key={id} className={styles.contacts_item}>
        <p>{name}:</p>
        <p>{number}</p>
        <button
          className={styles.contacts_list__button}
          onClick={() => onDeleteContact(id)}
        >
          Удалить
        </button>
      </li>
    ))}
  </ul>
);

const mapStateToProps = state => ({
  contacts: contactsSelectors.getFilteredContacts(state),
});

const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(contactsOperations.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);
