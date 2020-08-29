import React from 'react';
import '../css/App.css';
import Counter from '../components/Counter';

const App = (props) => {
  return (
    <>
      <h3>Hello World redux</h3>
      <Counter
        value={props.store.getState()}
        onIncrement={() => props.store.dispatch({ type: 'INCREMENT' })}
        onDecrement={() => props.store.dispatch({ type: 'DECREMENT' })}
      />
    </>
  );
}

export default App;
