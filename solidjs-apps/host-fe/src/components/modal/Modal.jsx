import { Show } from 'solid-js';

import UserDetails from '../user/UserDetails';

const Modal = (props) => {
  console.log('<Modal />');

  return (
    <Show when={props.isOpen()} fallback={null}>
      <div class={props.modalClass()}>
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title">User Details</h4>
            <button onClick={props.handleClose} class="modal-close-btn">X</button>
          </div>
          <div class="modal-body">
            <UserDetails />
          </div>
        </div>
      </div>
    </Show>
  );
};

export default Modal;
