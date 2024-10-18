import { applyMiddleware, combineReducers, compose, createStore } from "redux"
import { accountReducer } from "./account/reducers"
// import { configureStore as createStore } from "@reduxjs/toolkit"
import { thunk } from "redux-thunk"

const rootReducer = combineReducers({
  account: accountReducer,
})

declare global {
  interface Window {
    _REDUX_DEVTOOLS_EXTENSION_COMPOSE_?: typeof compose
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export type AppState = ReturnType<typeof rootReducer>

export default function configureStore() {
  const middlewares = [thunk]
  const middleWareEnhancer = applyMiddleware(...middlewares)
  //   return createStore(rootReducer, middleWareEnhancer)
  return createStore(rootReducer, composeEnhancers(middleWareEnhancer))
}
