export const isNumber = (value) => value !== '' && !Number.isNaN(Number(value));

export const validateOperands = (a, b, operation) => {
  const errors = {};

  if (!isNumber(a)) errors.a = 'Перше число некоректне';
  if (!isNumber(b)) errors.b = 'Друге число некоректне';

  if (operation === 'divide' && Number(b) === 0) {
    errors.b = 'Ділення на нуль неможливе';
  }

  return errors;
};