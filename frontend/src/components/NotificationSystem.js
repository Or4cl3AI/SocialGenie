frontend/src/components/NotificationSystem.js:

```javascript
import React from 'react';
import { useSelector } from 'react-redux';

const NotificationSystem = () => {
  const notifications = useSelector(state => state.notifications);

  return (
    <div>
      <h2>Notification System</h2>
      {notifications.map(notification => (
        <div key={notification.id}>
          <p>{notification.message}</p>
          <p>{notification.timestamp}</p>
        </div>
      ))}
    </div>
  );
};

export default NotificationSystem;
```