import React, { Component } from 'react';
import { connect } from 'react-redux';
import { contactsOperations, contactsSelectors } from '../../redux/contacts';
import shortid from 'shortid';
import styles from './Form.module.css';
import { Paper } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import { Button } from '@material-ui/core';

class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  nameInputId = shortid.generate();
  numberInputId = shortid.generate();

  handleChange = e => {
    const { name, value } = e.currentTarget;

    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { contacts, onSubmit } = this.props;
    const { name, number } = this.state;

    contacts.find(contact => contact.name === name)
      ? alert(`${name} is already in contacts`)
      : contacts.find(contact => contact.number === number)
      ? alert(`${number} is already in contacts`)
      : onSubmit(this.state);

    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <Paper className={styles.form}>
        <TextField
          className={styles.form_item}
          onChange={this.handleChange}
          value={this.state.name}
          id={this.nameInputId}
          name="name"
          type="text"
          label="Full Name"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          variant="outlined"
        />
        <TextField
          className={styles.form_item}
          onChange={this.handleChange}
          value={this.state.number}
          id={this.numberInputId}
          name="number"
          type="tel"
          label="Phone Number"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          variant="outlined"
        />
        <Button
          className={styles.form_item}
          variant="contained"
          color="primary"
          type="submit"
          onClick={this.handleSubmit}
        >
          Add contact
        </Button>
      </Paper>
    );
  }
}

const mapStateToProps = state => ({
  contacts: contactsSelectors.getFilteredContacts(state),
});

const mapDispatchToProps = dispatch => ({
  onSubmit: (name, number) =>
    dispatch(contactsOperations.addContact(name, number)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
