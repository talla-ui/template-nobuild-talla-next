import * as fs from "fs";
import * as path from "path";

const SRC = "node_modules/@talla-ui/web-handler/lib";
const DST = "site/lib";

fs.mkdirSync(DST, { recursive: true });
let files = fs.readdirSync(SRC);
for (let file of files) {
  fs.copyFileSync(path.join(SRC, file), path.join(DST, file));
}
