/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
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

User.propTypes = {
  user: PropTypes.exact({
    email: PropTypes.string,
    name: PropTypes.string.isRequired,
    profile_pic: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    user_id: PropTypes.string,
  }).isRequired,
};

export default User;
