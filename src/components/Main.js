import React from 'react';
import * as types from '../types';
import './Main.css';
import Empty from './Empty';
import ChatWindow from './ChatWindow';

const Main = ({ user, activeUserId }) => {
  const renderMainContent = () => {
    if (!activeUserId) {
      return <Empty user={user} activeUserId={activeUserId} />;
    }

    return <ChatWindow activeUserId={activeUserId} />;
  };

  return <main className="Main">{renderMainContent()}</main>;
};

Main.propTypes = { ...types.user, ...types.activeUserId };

export default Main;
