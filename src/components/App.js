import React from 'react';
import './App.css';
import Parent from './MyComponents/ParentComponent';
import NestedComponents from './MyComponents/NestedComponents';
import CompoWithProps from './MyComponents/CompoWithProps';
import Person from './MyComponents/DestructuringProps';
import Navbar from './MyComponents/Navbar';
import Calendar from './MyComponents/PropsInStatelessComponent';
import ToDo from './MyComponents/PassArrayAsProps';

function App() {
  return (
    <div className="App">
      <Navbar />
      
      {/* <Parent />
      <NestedComponents />

      <CompoWithProps name="Jewell" profession="Software Developer"/>
      <CompoWithProps name="Karim" profession="Businessman"/>
      <CompoWithProps name="Rahim" profession="Traveler"/> */}

      {/* <Person name='Ajgar' age={25} profession='Software Developer'/>

      <Calendar /> */}

      <ToDo />
    </div>
  );
}

export default App;
