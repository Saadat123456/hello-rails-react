import { createStore, combineReducers, applyMiddleware } from 'redux'
import greetingsReducer from './reducers/greetings_reducer'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
  greetingsReducer
})

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
)

export default store
