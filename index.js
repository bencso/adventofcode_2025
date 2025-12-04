
import path from "path";
import { fileURLToPath } from "url";
import { dayOneOne } from "./day01/01/index.js";
import { dayTwoOne } from "./day02/01/index.js";
import { dayThreeOne } from "./day03/01/index.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log("-----ELSŐ NAP----");
console.log("\telső feladata: "+await dayOneOne(__dirname));

console.log("-----MÁSODIK NAP----");
console.log("\telső feladata: "+await dayTwoOne(__dirname));

console.log("-----MÁSODIK NAP----");
console.log("\telső feladata: "+await dayThreeOne(__dirname));
