export const renderForm = (container) => {
  container.innerHTML = `
    <form id="calc-form" class="calc-form">
      <label>
        Перше число
        <input type="number" name="a" step="any" required>
        <span class="error" data-error="a"></span>
      </label>

      <label>
        Операція
        <select name="operation">
          <option value="add">Додавання (+)</option>
          <option value="subtract">Віднімання (−)</option>
          <option value="multiply">Множення (×)</option>
          <option value="divide">Ділення (÷)</option>
        </select>
      </label>

      <label>
        Друге число
        <input type="number" name="b" step="any" required>
        <span class="error" data-error="b"></span>
      </label>

      <button type="submit">Обчислити</button>
    </form>

    <div id="result" class="result" hidden></div>
  `;

  return {
    form: container.querySelector('#calc-form'),
    result: container.querySelector('#result'),
    errorA: container.querySelector('[data-error="a"]'),
    errorB: container.querySelector('[data-error="b"]'),
  };
};