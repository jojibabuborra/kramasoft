import { combineReducers } from 'redux'
import DefaultReducer from './default.reducer'

const appReducer = combineReducers({
  default: DefaultReducer
})

const rootReducer = (state, action) => {
  if (action.type === 'RESET_STATE') {
    return appReducer(undefined, action)
  }
  return appReducer(state, action)
}

export default rootReducer
