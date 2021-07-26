import React from 'react';
import { connect } from 'react-redux';
import { contactsOperations, contactsSelectors } from '../../redux/contacts';
import styles from './ContactsList.module.css';
import { Paper } from '@material-ui/core';
import { List } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import PhoneAndroid from '@material-ui/icons/PhoneAndroid';
import DeleteIcon from '@material-ui/icons/Delete';

const ContactsList = ({ contacts, onDeleteContact }) => (
  <Paper className={styles.contacts_list_wrapper}>
    <List className={styles.contacts_list}>
      {contacts.map(({ id, name, number }) => (
        <ListItem key={id}>
          <ListItemAvatar>
            <Avatar>
              <PhoneAndroid />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={name} secondary={number} />
          <IconButton
            edge="end"
            aria-label="delete"
            onClick={() => onDeleteContact(id)}
          >
            <DeleteIcon />
          </IconButton>
        </ListItem>
      ))}
    </List>
  </Paper>
);

const mapStateToProps = state => ({
  contacts: contactsSelectors.getFilteredContacts(state),
});

const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(contactsOperations.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);
