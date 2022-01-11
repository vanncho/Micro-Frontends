import { searchLogic } from  './searchLogic.js';

const Search = (props) => {
  const { search, handleOnChange, handleSearch } = searchLogic(props.onSearch);

  console.log('<Search />');

  return (
    <div class="form-container">
      <div class="input-group mb-3">
        <input
          class="form-control"
          placeholder="enter user name or id"
          value={search()}
          onChange={handleOnChange}
        />
        <div class="input-group-append">
          <button class="btn btn-outline-secondary" type="button" onClick={handleSearch}>Search</button>
        </div>
      </div>
    </div>
  );
};

export default Search;
