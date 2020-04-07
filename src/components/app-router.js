import { LitElement, html } from "lit-element";
import { Router } from "simple-wc-router";

class AppRouter extends Router(LitElement) {
  static get routes() {
    return [
      {
        path: "/",
        component: "todo-app",
        import: () =>
          import(
            /*webpackChunkName: "spakit" */
            "./todo-app.js"
          ),
      },
      {
        path: "/todolist",
        component: "todo-list",
        import: () => import("./todo-list.js"),
      },
      {
        path: "/mariano",
        component: "mariano-wc",
        import: () => import("./mariano-wc.js"),
      },
    ];
  }

  constructor() {
    super();
  }

  firstUpdated() {
    console.log("app-router started...");
  }

  render() {
    return html`${this.routeElement}`;
  }

  createRenderRoot() {
    return this;
  }
}

customElements.define("app-router", AppRouter);
