import {
  BUY_ONE, EAT_ONE,
} from '../redux/action';


export default function todoApp(amount = 0, action) {
  switch (action.type) {
    case BUY_ONE:
      return amount + action.amount;
    case EAT_ONE:
      return amount === 0 ? 0 : amount + action.amount;
    default:
      return amount;
  }
}
