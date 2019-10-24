import React from 'react';
import * as types from '../types';

const ChatWindow = ({ activeUserId }) => (
  <div className="ChatWindow">
    Conversation for user id:
    {' '}
    {activeUserId}
  </div>
);

ChatWindow.propTypes = types.activeUserId;

export default ChatWindow;
