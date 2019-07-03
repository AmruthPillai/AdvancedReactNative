import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducers from '../reducers'

export default createStore(
  reducers,
  {},
  compose(
    applyMiddleware(thunk)
  )
)