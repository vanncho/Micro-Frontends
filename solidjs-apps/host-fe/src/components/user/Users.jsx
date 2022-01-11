import { For, Show } from 'solid-js';

import User from './User';
import Modal from '../modal/Modal';

// import store from '../../store/store';

import { usersLogic } from './usersLogic';

const Users = (props) => {
  const {
    isModalOpen, modalClass, onModalClose, onUserClick,
  } = usersLogic();
  
  console.log('<Users />');

  // return (
  //   <>
  //     <div class="users-container">
  //       <Show when={users() && users().length > 0} fallback={!users() ? (<div>Loading...</div>) : (<div>No match found.</div>)}>
  //         <For each={users()}>
  //           {
  //             (user) => (
  //               <div class="user-container" data-id={user.id} onClick={onUserClick}>
  //                 <User name={user.name} />
  //               </div>
  //             )
  //           }
  //         </For>
  //         <p style={{ margin: '10px 0 0 0' }}>{`Total users: ${users().length}`}</p>
  //       </Show>
  //     </div>
  //     <Modal
  //       isOpen={isModalOpen}
  //       handleClose={onModalClose}
  //       modalClass={modalClass}
  //     />
  //   </>
  // );
  return (
    <>
      <div class="users-container">
        <Show when={props.users() && props.users().length > 0} fallback={!props.users() ? (<p>Loading...</p>) : (<p>{'No match found.'}</p>)}>
          <For each={props.users()}>
            {
              (user) => (
                <div class="user-container" data-id={user.id} onClick={onUserClick}>
                  <User name={user.name} />
                </div>
              )
            }
          </For>
          <p style={{ margin: '10px 0 0 0' }}>{`Total users: ${props.users().length}`}</p>
        </Show>
      </div>
      <Modal
        isOpen={isModalOpen}
        handleClose={onModalClose}
        modalClass={modalClass}
      />
    </>
  );
};

export default Users;
