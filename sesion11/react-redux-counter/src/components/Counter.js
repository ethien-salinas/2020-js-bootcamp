import React from 'react'

const Counter = (props) => {
  return (
    <>
      Clicked: {props.value} times
      <button onClick={props.onIncrement}>+</button>
      <button onClick={props.onDecrement}>-</button>
    </>
  )
}

export default Counter