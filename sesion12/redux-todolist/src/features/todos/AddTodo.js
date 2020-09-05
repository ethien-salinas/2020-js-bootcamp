import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addTodo } from './todosSlice'

const mapDispatchToProps = { addTodo }

const AddTodo = ({ addTodo }) => {

  const [todoText, setTodoText] = useState('')
  const onChange = (e) => setTodoText(e.target.value)

  return (
    <>
      <h3>AddTodo Component</h3>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          if (!todoText.trim()) {
            return
          }
          addTodo(todoText)
          setTodoText('')
        }}
      >
        <input value={todoText} onChange={onChange} />
        <button type="submit">Add Todo Task</button>
      </form>
    </>
  )
}

export default connect(
  null,
  mapDispatchToProps
)(AddTodo)