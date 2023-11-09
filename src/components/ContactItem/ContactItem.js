import { Button, Contact, NameWrapp } from './ContactItem.styled';

export const ContactItem = ({
  values: { id, name, number },
  onDeleteContact,
}) => {
  return (
    <Contact>
      <NameWrapp>
        <p>{name}:</p>
        <p>{number}</p>
      </NameWrapp>
      <Button type="button" onClick={() => onDeleteContact(id)}>
        x
      </Button>
    </Contact>
  );
};
