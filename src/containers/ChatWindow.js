import React from 'react';
import store from '../store';
import Header from '../components/Header';
import * as types from '../types';

const ChatWindow = ({ activeUserId }) => {
  const state = store.getState();
  const activeUser = state.contacts[activeUserId];

  return (
    <div className="ChatWindow">
      <Header user={activeUser} />
    </div>
  );
};

ChatWindow.propTypes = types.activeUserId;

export default ChatWindow;
