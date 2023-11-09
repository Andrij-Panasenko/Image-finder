import { GlobalStyle } from './GlobalStyle';

import { nanoid } from 'nanoid';
import { Component } from 'react';
import { Wrapper } from './Wrapper.styled';
import { ContactAddForm } from './ContactAddForm/ContactAddForm';
import { ContactList } from './ContactList/ContactList';
import { Title } from './Title/Title';
import { Filter } from './Filter/Filter';

const initialContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export class App extends Component {
  state = {
    contacts: initialContacts,
    filter: '',
  };

  addContact = newContact => {
    const hasContact = this.state.contacts.some(
      contact => contact.name === newContact.name
    );

    if (hasContact) {
      alert('A contact with that name already exists ');
      return;
    }

    const contact = {
      ...newContact,
      name: newContact.name,
      number: newContact.number,
      id: nanoid(),
    };

    this.setState(prevState => {
      console.log(contact);
      return {
        contacts: [...prevState.contacts, contact],
      };
    });
  };

  deleteContact = contactId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(item => item.id !== contactId),
      };
    });
  };

  updateContactFilter = query => {
    console.log(query)
    this.setState({
      filter: query,
    });
  };

  render() {
    const { contacts, filter } = this.state;
      const filteredContacts = contacts.filter(item => {
        const hasContact = item.name
          .toLowerCase()
          .includes(filter.toLowerCase());

        return hasContact;
      });

    return (
      <>
        <GlobalStyle />
        <Wrapper>
          <h1>Phonebook</h1>
          <ContactAddForm
            addContact={this.addContact}
            deleteContact={this.deleteContact}
          />
          <Title title="Contacts" />
          <Filter onContactFilter={this.updateContactFilter} filter={filter} />
          <ContactList
            filteredContacts={filteredContacts}
            onDeleteContact={this.deleteContact}
          />
        </Wrapper>
      </>
    );
  }
}
