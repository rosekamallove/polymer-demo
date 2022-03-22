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
        .then((res) => (this.fetchedData = JSON.stringify(res.data, null, 2)))
    );
  }

  static get template() {
    return html`
      <h1>Fetched number: [[num]]</h1>
      Fetched Result:
      <pre>
    [[fetchedData]]
        </pre
      >
    `;
  }
}

customElements.define("fetch-example", FetchExample);
