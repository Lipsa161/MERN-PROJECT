// App.js
import React from 'react';
import Greeting from './Greeting'; // Import the Greeting component

const App = () => {
  return (
    <div>
      {/* Pass a name as a prop to the Greeting component */}
      <Greeting name="Alice" />
    </div>
  );
};

export default App;
