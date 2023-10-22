```javascript
import React from 'react';
import { useSelector } from 'react-redux';

const SocialMediaIntegration = () => {
  const user = useSelector((state) => state.user);

  const handleIntegration = () => {
    // Code to integrate with social media platforms
  };

  return (
    <div>
      <h2>Social Media Integration</h2>
      <p>Welcome, {user.name}!</p>
      <button onClick={handleIntegration}>Integrate with Social Media</button>
    </div>
  );
};

export default SocialMediaIntegration;
```