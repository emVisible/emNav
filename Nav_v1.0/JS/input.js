export default class {
  constructor() {
    this.form = document.getElementById("schedule_input_bar");
    this.screen = document.querySelector(".elements");
    this.msg = "";
    this.add_status = 0;
    // this.data = []
    this.count = 0;
  }
  onFocus(e) {
    const self = this;
    e.onfocus = function (e) {
      e.stopPropagation();
      e.target.addEventListener("keyup", (item) => {
        item.stopPropagation();
        if (item.key == "Enter") {
          self.add_status = 1;
        }
      });
    };
  }
  addBar() {
    let li = document.createElement("li");
    li.innerHTML = `
    <span class="comp_bar">
      <i class="fa fa-square-o" aria-hidden="true" ></i>
    </span>
    <h4>${this.msg}</h4>
    <span class="del_bar">
      <i class="fa fa-times" aria-hidden="true"></i>
    </span>
  `;
    this.screen.appendChild(li);
  }
  removeBar() {
    let obj = document.getElementsByClassName("del_bar");
    [...obj].map((item) => {
      item.addEventListener("click", (e) => {
        item.parentElement.remove();
      });
    });

  }
  complete() {
    let comp_bar = document.getElementsByClassName("comp_bar");
    [...comp_bar].map((item) => {
      item.addEventListener("click", (e) => {
        item.parentElement.className = "complete";
      });
    });
  }
}
