import React from 'react';
import PropTypes from 'prop-types';

import css from './Friends.module.css';

export const FriendListItem = ({ friend }) => (
  <li className={css.listFriend}>
    <span className={friend.isOnline ? css.online : css.offline}></span>
    <img className="avatar" src={friend.avatar} alt="User avatar" width="48" />
    <p className="nameUser">{friend.name}</p>
  </li>
);

FriendListItem.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }).isRequired,
};
