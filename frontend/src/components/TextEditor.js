```javascript
import React, { useState } from 'react';

const TextEditor = () => {
  const [content, setContent] = useState('');

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleSave = () => {
    // Save the content to the backend or perform any other action
    console.log('Saving content:', content);
  };

  return (
    <div>
      <textarea value={content} onChange={handleContentChange} />
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default TextEditor;
```