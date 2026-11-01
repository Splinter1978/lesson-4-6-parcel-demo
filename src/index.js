import './style.css';
 
import { add } from './math/add.js';
import { subtract } from './math/subtract.js';
import { multiply } from './math/multiply.js';
import { divide } from './math/divide.js';
import { renderForm } from './ui/render-form.js';
import { validateOperands } from './utils/validate.js';

const operations = {
  add,
  subtract,
  multiply,
  divide,
};

const symbols = {
  add: '+',
  subtract: '−',
  multiply: '×',
  divide: '÷',
};

const app = document.getElementById('app');
const { form, result, errorA, errorB } = renderForm(app);

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const { a, b, operation } = form.elements;

  errorA.textContent = '';
  errorB.textContent = '';
  result.hidden = true;

  const errors = validateOperands(a.value, b.value, operation.value);
  if (errors.a) errorA.textContent = errors.a;
  if (errors.b) errorB.textContent = errors.b;
  if (Object.keys(errors).length > 0) return;

  const fn = operations[operation.value];
  const value = fn(Number(a.value), Number(b.value));

  result.hidden = false;
  result.textContent = `${a.value} ${symbols[operation.value]} ${b.value} = ${value}`;
});

document.querySelector('.app').textContent = 'hello';