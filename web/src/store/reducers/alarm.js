import {
  SET_COLOR,
  SET_BRIGHTNESS,
  SET_WAKE_TIME,
  SET_ALARM_ACTIVE,
} from 'constants/actions';

const initialState = {
  color: '#ff6b35',
  brightness: 50,
  wakeTime: '08:00',
  isAlarmSet: false,
};

export default function alarmsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_COLOR:
      return { ...state, color: action.payload };

    case SET_BRIGHTNESS:
      return { ...state, brightness: action.payload };

    case SET_WAKE_TIME:
      return { ...state, wakeTime: action.payload };

    case SET_ALARM_ACTIVE:
      return { ...state, isAlarmSet: action.payload };

    default:
      return state;
  }
}
