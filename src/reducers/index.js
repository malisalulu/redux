import { combineReducers } from 'redux'
import todos from './todos'
import counter from './counter'

let reducers= combineReducers({
  todos,
  counter
})
export default reducers