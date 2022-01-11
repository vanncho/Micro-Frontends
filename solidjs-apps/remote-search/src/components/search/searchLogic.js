import { createSignal } from 'solid-js';

export const searchLogic = (onSearch) => {
  const [search, setSearch] = createSignal('');

  const handleOnChange = event => {
    const value = event.target.value;

    setSearch(value);
  };

  const handleSearch = () => {
    onSearch(search);
  };

  return {
    search,
    handleOnChange,
    handleSearch,
  };
};
