import React from 'react';
import  Tooltip  from './components/ToolTip/Tooltip';
import  Tabs  from './components/Tabs/Tabs';


function App() {
  const tabData = [
    { label: 'Tab 1', content: <div>Content for Tab 1</div> },
    { label: 'Tab 2', content: <div>Content for Tab 2</div> },
    { label: 'Tab 3', content: <div>Content for Tab 3</div> }
  ];
  return (
    <>
    <Tabs 
        tabs={tabData} 
        theme="custom"
        buttonStyles={{ backgroundColor: 'lightblue', color: 'white' }}
        activeButtonStyles={{ backgroundColor: 'darkblue', color: 'white' }}
        containerStyles={{ borderColor: 'lightgray' }}
      />
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
    </>
  );
}

export default App;
