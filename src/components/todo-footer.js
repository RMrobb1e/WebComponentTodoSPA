import { LitElement, html } from "lit-element";

class TodoFooter extends LitElement {
  constructor() {
    super();
    this.test_name = "Robbie";
  }

  firstUpdated() {
    console.log("test-wc firstupdated()");
  }

  render() {
    return html`
      <footer class="footer" data-background-color="black">
        <div class="container">
          <div class="copyright float-right">
            &copy;
            <script>
              document.write(new Date().getFullYear());
            </script>
            , made with <i class="material-icons">favorite</i> by
            <a href="https://ralm-portfolio.netlify.com/" target="_blank">RALM</a> for a better web.
          </div>
        </div>
      </footer>
    `;
  }
}

customElements.define("todo-footer", TodoFooter);
