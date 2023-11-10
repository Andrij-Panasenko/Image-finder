export const SearchBar = ({ onSubmit }) => {
  return (
    <>
      <form className="form" onSubmit={onSubmit}>
        <input
          className="input"
          name="query"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit" className="button">
          Search
        </button>
      </form>
    </>
  );
};
