// App.js
import React, { useState } from 'react';

const App = () => {
  const [backgroundColor, setBackgroundColor] = useState('#ffffff'); // Initial background color

  // Function to generate a random hex color
  const generateRandomColor = () => {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    setBackgroundColor(randomColor);
  };

  return (
    <div style={{ backgroundColor: backgroundColor, height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <button onClick={generateRandomColor} style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}>
        Change Background Color
      </button>
    </div>
  );
};

export default App;
