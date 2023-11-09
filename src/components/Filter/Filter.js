import { Label, Input } from './Filter.styled';

export const Filter = ({ onContactFilter, filter }) => {
  return (
    <Label>
      Find contact by name:
      <Input
        type="text"
        placeholder="Name"
        value={filter}
        onChange={evt => onContactFilter(evt.target.value)}
      />
    </Label>
  );
};
