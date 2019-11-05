import React from 'react';
import './App.css';
import Parent from './MyComponents/ParentComponent';
import NestedComponents from './MyComponents/NestedComponents';

function App() {
  return (
    <div className="App">
      <Parent />
      <NestedComponents />
    </div>
  );
}

export default App;
