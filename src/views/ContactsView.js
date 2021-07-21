import React, { Component } from 'react';
import { connect } from 'react-redux';
import ContactsList from '../components/ContactsList';
import Form from '../components/Form';
import Filter from '../components/Filter';
import { contactsOperations } from '../redux/contacts';

class Contacts extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    return (
      <div className="container">
        <h1 className="title">Phonebook</h1>
        <Form onSubmit={this.addContact} />

        <h2 className="title">Contacts</h2>
        <Filter />
        <ContactsList />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(contactsOperations.fetchContacts()),
});

export default connect(null, mapDispatchToProps)(Contacts);
