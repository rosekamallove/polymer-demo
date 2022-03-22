import { PolymerElement } from "@polymer/polymer";
import { html } from "@polymer/polymer";

class FetchExample extends PolymerElement {
  static get properties() {
    return { num: Number };
  }

  constructor() {
    super();
    this.num = 1;
    this.fetchedData = null;
  }
  connectedCallback() {
    super.connectedCallback();
    fetch(`https://reqres.in/api/products/${this.num}`).then((data) =>
      data
        .json()
        .then((res) => (this.fetchedData = JSON.stringify(res, null, 2)))
    );
  }

  increment() {
    this.num = this.num + 1;
    this.connectedCallback();
  }

  static get template() {
    return html`
      <style>
        .pre {
          padding: 10px;
          margin: 10px;
          border-radius: 5px;
          background-color: #e8e8e8;
        }
      </style>
      <h1>Fetched number: [[num]]</h1>
      <h3>Fetched Response:</h3>
      <div class="pre">
        <pre>[[fetchedData]]</pre>
      </div>
      <button on-click="increment">Increment</button>
    `;
  }
}

customElements.define("fetch-example", FetchExample);
