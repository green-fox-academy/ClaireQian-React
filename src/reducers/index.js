import { combineReducers } from 'redux';
import todoApp from './reducer';

const rootReducer = combineReducers({
  amount: todoApp,
});

export default rootReducer;
