import { PolymerElement } from "@polymer/polymer";
import { html } from "@polymer/polymer";

class MyElement extends PolymerElement {
  static get properties() {
    return { mood: String };
  }

  static get template() {
    return html`
      <style>
        .mood {
          color: green;
        }
      </style>
      Web Components are <span class="mood">[[mood]]</span>!
    `;
  }
}

customElements.define("my-element", MyElement);
