import {
  batch, createEffect, createResource, createSignal, onCleanup,
} from 'solid-js';

// import { selectedUser, setSelectedUser, users } from '../../store/store';
import store, { setSelectedUser } from '../../store/store';

import { getUserById } from '../../api/userRemote';

export const usersLogic = () => {
  const [id, setId] = createSignal(null);
  const [modalClass, setModalClass] = createSignal('modal-fade-in');
  const [user] = createResource(id, getUserById, { initialValue: [] });
  // const isModalOpen = () => selectedUser() && selectedUser().length === 1 !== null;
  const isModalOpen = () => store.selectedUser && store.selectedUser.length === 1 !== null;
  let timer;

  onCleanup(() => clearTimeout(timer));

  createEffect(() => {
    if (user() && user().length === 1) {
      setSelectedUser(user()[0]);
    }
  });

  const onModalClose = () => {
    setModalClass('modal-fade-out');

    timer = setTimeout(() => {
      setSelectedUser(null);
      batch(() => {
        setId(null);
        setModalClass('modal-fade-in');
      });
    }, 1700);
  };

  const onUserClick = (event) => {
    const id = event.currentTarget.dataset.id;

    setId(Number(id));
  };

  return {
    isModalOpen,
    modalClass,
    onModalClose,
    onUserClick,
  };
};
