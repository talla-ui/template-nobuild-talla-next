import { useWebContext } from "./lib/talla-web.es2022.esm.min.js";
import { MainActivity } from "./MainActivity.js";

const app = useWebContext((options) => {
  options.theme.colors.set("Background", "#222");
});
app.addActivity(new MainActivity(), true);
