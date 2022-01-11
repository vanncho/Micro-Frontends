import { createSignal } from 'solid-js';
import { createStore } from 'solid-js/store';

// export const [users, setUsers] = createSignal([]);
// export const [selectedUser, setSelectedUser] = createSignal(null);

const [store, setStore] = createStore({
  selectedUser: null,
  users: [],
});

export const setUsers = (users) => {
  setStore('users', users);
};

export const setSelectedUser = (user) => {
  setStore('selectedUser', user);
};

export default store;
