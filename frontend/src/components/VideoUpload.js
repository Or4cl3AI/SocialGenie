// frontend/src/components/VideoUpload.js

import React from 'react';

const VideoUpload = () => {
  const handleUpload = (event) => {
    const file = event.target.files[0];
    // Code to handle video upload
  };

  return (
    <div>
      <h2>Video Upload</h2>
      <input type="file" accept="video/*" onChange={handleUpload} />
    </div>
  );
};

export default VideoUpload;