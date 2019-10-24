import React from 'react';
import { setActiveUserId } from '../actions';
import store from '../store';
import './User.css';
import * as types from '../types';

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

User.propTypes = types.user;

function handleUserClick({ user_id: userId }) {
  console.log(userId);
  store.dispatch(setActiveUserId(userId));
}

export default User;
