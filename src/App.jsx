import React from 'react';


function App() {
  return (
    <div style={{ padding: '50px' }}>
      <Tooltip
        content="Hello, I am a tooltip!"
        position="top"
        theme='light'
        delay={400}
        trigger='hover'
      >
        <button>Hover over me</button>
      </Tooltip>
    </div>
  );
}

export default App;
