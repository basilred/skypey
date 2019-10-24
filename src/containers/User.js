import React from 'react';
import PropTypes from 'prop-types';
import { setActiveUserId } from '../actions';
import store from '../store';
import './User.css';

const User = ({ user }) => {
  const { name, profile_pic: profilePic, status } = user;

  return (
    <div className="User" onClick={handleUserClick.bind(null, user)}>
      <img src={profilePic} alt={name} className="User__pic" />
      <div className="User__details">
        <p className="User__details-name">{name}</p>
        <p className="User__details-status">{status}</p>
      </div>
    </div>
  );
};

User.propTypes = {
  user: PropTypes.exact({
    email: PropTypes.string,
    name: PropTypes.string.isRequired,
    profile_pic: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    user_id: PropTypes.string,
  }).isRequired,
};

function handleUserClick({ user_id: userId }) {
  console.log(userId);
  store.dispatch(setActiveUserId(userId));
}

export default User;
