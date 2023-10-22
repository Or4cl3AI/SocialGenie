// frontend/src/components/UserFollow.js

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { followUser, unfollowUser } from '../actions/userActions';

const UserFollow = ({ userId }) => {
  const currentUser = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleFollow = () => {
    dispatch(followUser(userId));
  };

  const handleUnfollow = () => {
    dispatch(unfollowUser(userId));
  };

  const isFollowing = currentUser.following.includes(userId);

  return (
    <div>
      {isFollowing ? (
        <button onClick={handleUnfollow}>Unfollow</button>
      ) : (
        <button onClick={handleFollow}>Follow</button>
      )}
    </div>
  );
};

export default UserFollow;