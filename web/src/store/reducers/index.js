import { combineReducers } from 'redux';
import alarmReducer from './alarm';

const rootReducer = combineReducers({
  alarm: alarmReducer,
});

export default rootReducer;
