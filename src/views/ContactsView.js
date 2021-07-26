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
      <>
        <Form onSubmit={this.addContact} />
        <div>
          <Filter />
          <ContactsList />
        </div>
      </>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(contactsOperations.fetchContacts()),
});

export default connect(null, mapDispatchToProps)(Contacts);
