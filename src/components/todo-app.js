import { LitElement, html } from "lit-element";
import { RouteMixin } from "simple-wc-router";

class TodoApp extends RouteMixin(LitElement) {
  constructor() {
    super();
  }

  firstUpdated() {
    console.log("test-wc firstupdated()");
  }

  render() {
    return html`
      <app-header>
        <h1 slot="left">Todo App</h1>
        <div>
          <button class="btn btn-primary" @click="${() =>
            this.navigate("/todolist")}">Go to the task list</button class="btn btn-primary">
        </div>
      </app-header>
      <todo-footer> </todo-footer>
    `;
  }

  createRenderRoot() {
    return this;
  }
}

customElements.define("todo-app", TodoApp);
