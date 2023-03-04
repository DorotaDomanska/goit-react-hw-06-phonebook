import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getContacts } from 'redux/selectors';
import { addContact } from 'redux/contactsSlice';
import { ContactForm } from './ContactForm';
import { Filter } from './Filter';
import { ContactList } from './ContactList';
import css from './Phonebook.module.css';

export const App = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    const list = localStorage.getItem('contacts-list');
    if (!list) return;

    try {
      dispatch(addContact(JSON.parse(list)));
    } catch (e) {
      console.error(e);
    }
  }, [dispatch]);

  useEffect(() => {
    const contactsListStringified = JSON.stringify(contacts);
    localStorage.setItem('contacts-list', contactsListStringified);
  }, [contacts]);

  return (
    <div
      style={{
        height: '100vh',
        padding: '0px 50px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        textAlign: 'left',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <h1 className={css.header}>Phonebook</h1>
      <ContactForm />
      <h2 className={css.header}>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};
