import { combineReducers } from 'redux';
import tournaments from '../Tournaments/tournamentsSlice';

const rootReducer = combineReducers({
  tournaments
});

export default rootReducer;
