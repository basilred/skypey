/* eslint-disable react/prop-types */
import React from 'react';
import User from './User';
import './Sidebar.css';

const Sidebar = ({ contacts }) => (
  <aside className="Sidebar">
    {contacts.map((contact) => <User user={contact} key={contact.user_id} />)}
  </aside>
);

export default Sidebar;
