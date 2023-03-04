import { useDispatch } from 'react-redux';
import { filterContacts } from 'redux/filterSlice';
import css from './Phonebook.module.css';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleInputChange = evt => {
    const text = evt.target.value;

    dispatch(filterContacts(text));
  };

  return (
    <label className={css.label}>
      Find contacts by name
      <input type="text" name="filter" onInput={handleInputChange}></input>
    </label>
  );
};
