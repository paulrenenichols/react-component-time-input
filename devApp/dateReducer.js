import { DATE_UPDATE } from './dateActions';

export default function date(state = new Date(), action = {}) {
  switch (action.type) {
    case DATE_UPDATE:
      return action.date;
    default:
      return state;
  }
}
