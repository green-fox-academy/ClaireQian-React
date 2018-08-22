export const BUY_ONE = 'BUY_ONE';
export const EAT_ONE = 'EAT_ONE';

export function buyOne(amount) {
  return {
    type: BUY_ONE,
    amount,
  };
}

export function eatOne(amount) {
  return {
    type: EAT_ONE,
    amount,
  };
}
