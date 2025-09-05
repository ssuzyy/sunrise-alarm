import {
  SET_COLOR,
  SET_BRIGHTNESS,
  SET_WAKE_TIME,
  SET_ALARM_ACTIVE,
} from 'constants/actions';

export const setColor = (color) => ({
  type: SET_COLOR,
  payload: color,
});

export const setBrightness = (brightness) => ({
  type: SET_BRIGHTNESS,
  payload: brightness,
});

export const setWakeTime = (time) => ({
  type: SET_WAKE_TIME,
  payload: time,
});

export const setAlarmActive = (isActive) => ({
  type: SET_ALARM_ACTIVE,
  payload: isActive,
});
