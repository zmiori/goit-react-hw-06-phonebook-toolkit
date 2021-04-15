import { connect } from 'react-redux';
import './App.css';

import { addContact, deleteContact } from './redux/items/items-actions';
import changeFilter from './redux/filter/filter-actions';

import Filter from './components/Filter';
import Section from './components/Section';
import Container from './components/Container';
import AddContactForm from './components/AddContactForm';
import ContactsList from './components/ContactsList';

function App({
  contacts,
  filter,
  onAddContact,
  onDeleteContact,
  onChangeFilter,
}) {
  return (
    <Container>
      <h1 className="appTitle">Phonebook</h1>
      <Section>
        <AddContactForm onSubmit={value => onAddContact(value)} />
      </Section>
      <Section title="contacts">
        <Filter
          value={filter}
          onChange={e => onChangeFilter(e.currentTarget.value)}
        />
        <ContactsList
          contacts={contacts}
          onDeleteContact={value => onDeleteContact(value)}
        />
      </Section>
    </Container>
  );
}

const mapStateToProps = state => {
  const { contacts } = state;
  const { filter, items } = contacts;
  const normalizedFilter = filter.toLowerCase();

  return {
    contacts: items.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    ),
    filter: state.contacts.filter,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddContact: value => dispatch(addContact(value)),
    onDeleteContact: value => dispatch(deleteContact(value)),
    onChangeFilter: value => dispatch(changeFilter(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
