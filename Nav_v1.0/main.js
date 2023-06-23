import matte from "./JS/matte.js";
import background from "./JS/background_switch.js";
import input from "./JS/input.js";

matte();
background();

const ipt = new input();
ipt.onFocus(ipt.form);
setInterval(() => {
  if (ipt.add_status == 1) {
    ipt.msg = document.getElementById("schedule_input_bar").value;
    ipt.addBar();
    ipt.form.value = "";
    ipt.add_status = 0;
  }

  ipt.removeBar();

  ipt.complete();

}, 500);