import React from 'react';
import './App.css';
import Parent from './MyComponents/ParentComponent';
import NestedComponents from './MyComponents/NestedComponents';
import CompoWithProps from './MyComponents/CompoWithProps';
import Person from './MyComponents/DestructuringProps';
import Navbar from './MyComponents/Navbar';
import Calendar from './MyComponents/PropsInStatelessComponent';
import ToDo from './MyComponents/PassArrayAsProps';
import DefaultProps from './MyComponents/DefaultProps';
import OverrideDefaultProps from './MyComponents/OverrideDefaultProps';
import StatefulComponent from './MyComponents/StatefulComponent';
import StateInBangla from './MyComponents/StateInBangla';
import StateInBangla2 from './MyComponents/StateInBangla2';
import MyStatefulComponent from './MyComponents/RenderStateInUI';
import SetStateComponent from './MyComponents/SetStateComponent';
import EventHandlerInBangla from './MyComponents/EventHandlerInBangla';
import ToggleElementInComponent from './MyComponents/ToggleElementInComponent';
import SimpleCounter from './MyComponents/SimpleCounter';
import ControlledInput from './MyComponents/ControlledInput';

function App() {
  return (
    <div className="App">
      <Navbar />
      
      {/* <Parent />
      <NestedComponents /> */}

      {/* <CompoWithProps name="Jewell" profession="Software Developer"/>
      <CompoWithProps name="Karim" profession="Businessman"/>
      <CompoWithProps name="Rahim" profession="Traveler"/> */}

      {/* <Person name='Ajgar' age={25} profession='Software Developer'/>

      <Calendar /> */}

      {/* <ToDo /> */}

      {/* <DefaultProps /> */}

      {/* <OverrideDefaultProps /> */}

      {/* <StatefulComponent /> */}

      {/* <StateInBangla /> */}

      {/* <StateInBangla2 />

      <MyStatefulComponent /> */}

      <SetStateComponent />
      
      <EventHandlerInBangla />

      <ToggleElementInComponent />

      <SimpleCounter />

      <ControlledInput />
    </div>
  );
}

export default App;
