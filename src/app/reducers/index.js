import { combineReducers } from 'redux'

const placeholderReducer = (state = null, { type, payload }) => {
  return state;
};

const rootReducer = combineReducers({
  placeholderReducer
});

export default rootReducer
