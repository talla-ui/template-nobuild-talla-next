import { $activity, Activity, ui } from "./lib/talla-web.es2022.esm.min.js";

const view = ui.cell(
  ui.label($activity.bind("count"), { fontSize: 40, tabularNums: true }),
  ui.button({
    icon: ui.icon.PLUS,
    accessibleLabel: "Increment counter",
    onClick: "CountUp",
    style: ui.style.BUTTON_SUCCESS,
  })
);

export class MainActivity extends Activity {
  createView() {
    return new view();
  }

  count = 0;
  onCountUp() {
    this.count++;
  }
}
