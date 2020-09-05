import React from 'react'
import './App.css'
import VisibleTodoList from './components/VisibleTodoList';
import Footer from './components/Footer';
import AddTodo from './features/todos/AddTodo';

function App() {
  return (
    <div className="App">
      <AddTodo />
      <VisibleTodoList />
      <Footer />
    </div>
  );
}

export default App;
