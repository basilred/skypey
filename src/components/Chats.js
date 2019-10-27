import React from 'react';
import * as types from '../types';
import './Chats.css';

const Chat = ({ message }) => {
  const { text, is_user_msg: isUserMsg } = message;

  return (
    <span className={`Chat ${isUserMsg ? 'is-user-msg' : ''}`}>{text}</span>
  );
};

Chat.propTypes = types.message;

class Chats extends React.Component {
  render() {
    return (
      <div className="Chats">
        {this.props.messages.map(message => (
          <Chat message={message} key={message.number} />
        ))}
      </div>
    );
  }
}

export default Chats;
