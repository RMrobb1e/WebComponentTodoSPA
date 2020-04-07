import { LitElement, html } from "lit-element";
import { RouteMixin } from "simple-wc-router";
class TodoList extends RouteMixin(LitElement) {
  constructor() {
    super();

    this.todos = [
      { name: "Do A", finished: true },
      { name: "Do B", finished: true },
      { name: "Do C", finished: false },
    ];
  }

  static get properties() {
    return {
      todos: { type: Array },
    };
  }

  firstUpdated() {
    console.log("todo-list started...");
  }

  removeTodo(todo) {
    console.log("clicked: ", todo);
    this.todos = this.todos.filter((currentTodo) => currentTodo !== todo);
  }

  render() {
    return html`
      <div class="main main-raised">
        <div class="section section-basic">
          <div class="container">
            <!-- Tabs with icons on Card -->
            <div class="card card-nav-tabs">
              <div class="card-header card-header-primary">
                <!-- colors: "header-primary", "header-info", "header-success", "header-warning", "header-danger" -->
                <div class="nav-tabs-navigation">
                  <div class="nav-tabs-wrapper">
                    <ul class="nav nav-tabs" data-tabs="tabs">
                      <li class="nav-item">
                        <a
                          class="nav-link active"
                          href="javascript:void(0);"
                          @click="${(e) => {
                            e.preventDefault();
                            this.navigate("/todolist");
                          }}"
                        >
                          <i class="material-icons">assignment</i> Tasks
                        </a>
                      </li>
                      <li class="nav-item">
                        <a
                          class="nav-link"
                          href="javascript:void(0);"
                          @click="${(e) => {
                            e.preventDefault();
                            this.navigate("/mariano");
                          }}"
                        >
                          <i class="material-icons">chat</i> Mariano
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="card-body ">
                <div class="tab-content text-center">
                  <div class="tab-pane active" id="profile">
                    <h3>Tasks</h3>
                    <table class="table">
                      <thead>
                        <tr>
                          <th class="text-center">#</th>
                          <th>Task Name</th>
                          <th>Finished</th>
                          <th></th>
                        </tr>
                      </thead>

                      <tbody>
                        ${this.todos.map(
                          (todo, index) =>
                            html`
                              <tr key=${index}>
                                <td class="text-center">${index + 1}</td>
                                <td>${todo.name}</td>
                                <td class="td-actions text-center">
                                  <button type="button" rel="tooltip" class="btn btn-round">
                                    <i class="material-icons"
                                      >${todo.finished ? "close" : "done"}</i
                                    >
                                  </button>
                                </td>
                                <td>
                                  <button
                                    type="button"
                                    rel="tooltip"
                                    class="btn btn-danger btn-round"
                                  >
                                    <i
                                      class="material-icons"
                                      @click="${() => this.removeTodo(todo)}"
                                      >delete</i
                                    >
                                  </button>
                                </td>
                              </tr>
                            `
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <!-- End Tabs with icons on Card -->
          </div>
        </div>
      </div>
    `;
  }
  createRenderRoot() {
    return this;
  }
}
customElements.define("todo-list", TodoList);
