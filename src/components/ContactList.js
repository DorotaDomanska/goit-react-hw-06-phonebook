import { ContactListItem } from './ContactListItem';
import css from './Phonebook.module.css';

export const ContactList = () => {
  return (
    <ul className={css.list}>
      <ContactListItem />
    </ul>
  );
};
