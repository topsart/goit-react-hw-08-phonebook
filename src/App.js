import React, { Component } from 'react';
import { connect } from 'react-redux';
import ContactsList from './components/ContactsList';
import Form from './components/Form/Form';
import Filter from './components/Filter/Filter';
import contactsOperations from './redux/contacts/contacts-operations';

class App extends Component {
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

export default connect(null, mapDispatchToProps)(App);
