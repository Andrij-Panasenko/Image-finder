import { ContactItem } from '../ContactItem/ContactItem';
import { Notify } from './ContactList.styled';

export const ContactList = ({ onDeleteContact, filteredContacts }) => {
  return (
    <div>
      <ul>
        {filteredContacts.length > 0 ? (
          filteredContacts.map(item => {
            return (
              <ContactItem
                key={item.id}
                values={item}
                onDeleteContact={onDeleteContact}
              />
            );
          })
        ) : (
          <Notify>
            Your contatcs is empty. Please add contact to your list
          </Notify>
        )}
      </ul>
    </div>
  );
};
