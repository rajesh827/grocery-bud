import { addItem } from "./app.js";

// Create Form Element
export function createForm() {
  const form = document.createElement("form");

  form.innerHTML = `
    <h2>grocery bud</h2>
    <div class="form-control">
      <input
        type="text"
        class="form-input"
        placeholder="e.g. eggs"
      />
      <button type="submit" class="btn">
        add item
      </button>
    </div>
  `;
  return form;
}
