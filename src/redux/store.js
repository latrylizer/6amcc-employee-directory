import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import allEmployees from './reducers/allEmployees'
import employees from './reducers/employees'

const middlewares = compose(applyMiddleware(thunk, logger))

const reducers = combineReducers({
    employees,
    allEmployees,
})

export default createStore(reducers, middlewares)
