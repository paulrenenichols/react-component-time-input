import { TIME_UPDATE } from './timeActions';

export default function time(state = {}, action = {}) {
  switch (action.type) {
    case TIME_UPDATE:
      return action.time;
    default:
      return state;
  }
}
