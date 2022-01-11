// import { selectedUser } from '../../store/store';
import store from '../../store/store';

const UserDetails = () => {
  // const {
  //   address, company, email, name, phone, username, website,
  // } = selectedUser();
  const {
    address, company, email, name, phone, username, website,
  } = store.selectedUser;

  console.log('<UserDetails />');

  return (
    <div class="row-content">
      <div class="row">
        <p class="inline">name: </p>
        <p class="inline user-text">{name}</p>
      </div>
      <div class="row">
        <p class="inline">username: </p>
        <p class="inline user-text">{username}</p>
      </div>
      <div class="row">
        <p class="inline">address: </p>
        <p class="user-text">{`${address.street}, ${address.city}`}</p>
      </div>
      <div class="row">
        <p class="inline">phone: </p>
        <p class="inline user-text">{phone}</p>
      </div>
      <div class="row">
        <p class="inline">e-mail: </p>
        <p class="inline user-text">{email}</p>
      </div>
      <div class="row">
        <p class="inline">web site: </p>
        <p class="inline user-text">{website}</p>
      </div>
      <div class="row">
        <p class="inline">company: </p>
        <p class="inline user-text">{company.name}</p>
      </div>
    </div>
  );
};

export default UserDetails;
