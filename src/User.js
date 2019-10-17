/* eslint-disable react/prop-types */
import React from 'react';
import './User.css';

const User = ({ user }) => {
  const { name, profile_pic: profilePic, status } = user;

  return (
    <div className="User">
      <img src={profilePic} alt={name} className="User__pic" />
      <div className="User__details">
        <p className="User__details-name">{name}</p>
        <p className="User__details-status">{status}</p>
      </div>
    </div>
  );
};

export default User;
