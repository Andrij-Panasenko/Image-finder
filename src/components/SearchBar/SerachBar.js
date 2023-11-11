import { Button, Header, Input, Form } from './SearchBar.styled';

export const SearchBar = ({ onSubmit }) => {
  return (
    <>
      <Header>
        <Form className="form" onSubmit={onSubmit}>
          <Input
            name="query"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <Button type="submit">Search</Button>
        </Form>
      </Header>
    </>
  );
};
