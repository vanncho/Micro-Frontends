import { createSignal, onMount } from 'solid-js';

import { getUsers } from '../../api/userRemote';
import store, { setUsers } from '../../store/store';

export const appLogic = () => {
  const [filterUsers, setFilterUsers] = createSignal([]);

  onMount(async () => {
    const allUsers = await getUsers();
  
    setUsers(allUsers);
    setFilterUsers(allUsers);
  });

  const handleOnSearch = value => {
    if (!value()) {
      setFilterUsers(store.users);
      return;
    }

    let filtered;

    if (Number(value())) {
      filtered = store.users.filter(currUser => currUser.id == value());
    } else {
      filtered = store.users.filter(currUser => (currUser.name).toLowerCase().indexOf(value()) >= 0);
    }

    setFilterUsers(filtered);
  };

  return {
    filterUsers,
    handleOnSearch,
  };
};
