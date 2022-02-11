import { createStore, applyMiddleware } from 'redux'
import { createWrapper } from 'next-redux-wrapper'
import thunkMiddleware from 'redux-thunk'
import reducer from './combined.reducers'
import localStorageMiddleware from '../middleware/local.storage.middleware'

const bindMiddleware = middleware => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension')
    return composeWithDevTools(applyMiddleware(...middleware))
  }
  return applyMiddleware(...middleware)
}

const makeStore = (context) => {
  const store = createStore(
    reducer,
    bindMiddleware([thunkMiddleware, localStorageMiddleware])
  )

  return store
}

export const wrapper = createWrapper(makeStore, { debug: true })
