import React from 'react'
import AddTodo from '../features/todos/AddTodo';
import Footer from '../features/filters/Footer';
import VisibleTodoList from '../features/todos/VisibleTodoList';

const App = () => {
  return (
    <div className="App">
      <AddTodo />
      <VisibleTodoList />
      <Footer />
    </div>
  );
}

export default App;
