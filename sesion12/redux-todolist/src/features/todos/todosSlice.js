import { createSlice } from '@reduxjs/toolkit'

let nextTodoId = 0

const todosSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo: {
      reducer(state, action) {
        state.push({ id: nextTodoId++, text: action.payload, completed: false })
      }
    }
  }
})

export const { addTodo } = todosSlice.actions
export default todosSlice.reducer