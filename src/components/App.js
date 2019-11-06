import React from 'react';
import './App.css';
import Parent from './MyComponents/ParentComponent';
import NestedComponents from './MyComponents/NestedComponents';
import CompoWithProps from './MyComponents/CompoWithProps';
import Person from './MyComponents/DestructuringProps';

function App() {
  return (
    <div className="App">
      {/* <Parent />
      <NestedComponents /> */}

      {/* <CompoWithProps name="Jewell" profession="Software Developer"/>
      <CompoWithProps name="Karim" profession="Businessman"/>
      <CompoWithProps name="Rahim" profession="Traveler"/> */}

      <Person name='Ajgar' age={25} profession='Software Developer'/>
    </div>
  );
}

export default App;
