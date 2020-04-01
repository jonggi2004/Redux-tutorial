import React from 'react';
import CounterContainer from './containers/CounterContainer';
import TodosContainer from './containers/TodosContainer';
import TodosContainer2 from './containers/TodosContainer2';

function App() {
  return (
    <div>
      <CounterContainer />
      <hr />
      <TodosContainer />
      <hr />
      <TodosContainer2 />
    </div>
  );
}

export default App;
