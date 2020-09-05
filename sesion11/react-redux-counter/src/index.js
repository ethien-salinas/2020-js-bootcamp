import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './view/App';
import { createStore } from 'redux'
import reducer from './reducers'

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const render = () => ReactDOM.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>,
  document.getElementById('root')
)

render()
store.subscribe(render)