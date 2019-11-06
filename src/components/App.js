import React from 'react';
import './App.css';
import Parent from './MyComponents/ParentComponent';
import NestedComponents from './MyComponents/NestedComponents';
import CompoWithProps from './MyComponents/CompoWithProps';

function App() {
  return (
    <div className="App">
      {/* <Parent />
      <NestedComponents /> */}
      <CompoWithProps name="Jewell" profession="Software Developer"/>
      <CompoWithProps name="Karim" profession="Businessman"/>
      <CompoWithProps name="Rahim" profession="Traveler"/>
    </div>
  );
}

export default App;
