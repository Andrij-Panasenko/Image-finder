import { LoadMoreBtn } from "./Button.styled";

export const Button = ({ onLoad }) => {
  return (
    <>
        <LoadMoreBtn type="button" onClick={onLoad}>
        Load more
      </LoadMoreBtn>
    </>
  );
};