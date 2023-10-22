// frontend/src/components/UserActivityTracking.js

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserActivity, clearUserActivity } from '../actions/userActions';

const UserActivityTracking = () => {
  const dispatch = useDispatch();
  const userActivity = useSelector((state) => state.userActivity);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    dispatch(fetchUserActivity());
    setIsLoading(false);

    return () => {
      dispatch(clearUserActivity());
    };
  }, [dispatch]);

  return (
    <div>
      <h2>User Activity Tracking</h2>
      {isLoading ? (
        <p>Loading user activity...</p>
      ) : (
        <ul>
          {userActivity.map((activity) => (
            <li key={activity.id}>{activity.description}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UserActivityTracking;