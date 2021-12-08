import { createStore, applyMiddleware, combineReducers } from 'redux'
import promiseMiddleware from 'redux-promise-middleware'
import budgetReducer from './budgetReducer.js'

const rootReducer = combineReducers({
  budget: budgetReducer,
})

export default createStore(rootReducer, applyMiddleware(promiseMiddleware))
