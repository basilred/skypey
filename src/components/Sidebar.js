import React from 'react';
import User from '../containers/User';
import './Sidebar.css';
import * as types from '../types';

const Sidebar = ({ contacts }) => (
  <aside className="Sidebar">
    {contacts.map((contact) => <User user={contact} key={contact.user_id} />)}
  </aside>
);

Sidebar.propTypes = types.contacts;

export default Sidebar;
