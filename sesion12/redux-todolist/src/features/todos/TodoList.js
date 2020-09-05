import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({ todos, toggleTodo }) => {

  return (
    <>
      <ul>
        {
          todos.map((todo) => {
            return <TodoItem
              key={todo.id}
              {...todo}
              onClickItem={() => toggleTodo(todo.id)}
            />
          })
        }
      </ul>
    </>
  )
}

export default TodoList