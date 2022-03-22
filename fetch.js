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
        .btn {
          position: relative;

          display: block;
          margin: 30px auto;
          padding: 0;

          overflow: hidden;

          border-width: 0;
          outline: none;
          border-radius: 2px;
          box-shadow: 0 1px 4px rgba(0, 0, 0, 0.6);

          background-color: #2ecc71;
          color: #ecf0f1;

          transition: background-color 0.3s;
        }

        .btn:hover,
        .btn:focus {
          background-color: #27ae60;
        }

        .btn > * {
          position: relative;
        }

        .btn span {
          display: block;
          padding: 12px 24px;
        }

        .btn:before {
          content: "";

          position: absolute;
          top: 50%;
          left: 50%;

          display: block;
          width: 0;
          padding-top: 0;

          border-radius: 100%;

          background-color: rgba(236, 240, 241, 0.3);

          -webkit-transform: translate(-50%, -50%);
          -moz-transform: translate(-50%, -50%);
          -ms-transform: translate(-50%, -50%);
          -o-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
        }

        .btn:active:before {
          width: 120%;
          padding-top: 120%;

          transition: width 0.2s ease-out, padding-top 0.2s ease-out;
        }
      </style>
      <h1>Fetched number: [[num]]</h1>
      <h3>Fetched Response:</h3>
      <div class="pre">
        <pre>[[fetchedData]]</pre>
      </div>
      <button class="btn" on-click="increment"><span>Increment</span></button>
    `;
  }
}

customElements.define("fetch-example", FetchExample);
