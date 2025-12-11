
import path from "path";
import { fileURLToPath } from "url";
import { dayOneOne } from "./day01/01/index.js";
import { dayTwoOne } from "./day02/01/index.js";
import { dayThreeOne } from "./day03/01/index.js";
import { dayFourOne } from "./day04/01/index.js";
import { dayFiveOne } from "./day05/01/index.js";
import { daySixOne } from "./day06/01/index.js";
import { daySevenOne } from "./day07/01/index.js";
import { dayEightOne } from "./day08/01/index.js";
import { dayNineOne } from "./day09/01/index.js";
import { dayTenOne } from "./day10/01/index.js";
import { dayElevenOne } from "./day11/01/index.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log("-----ELSŐ NAP----");
console.log("\telső feladata: "+await dayOneOne(__dirname));

console.log("-----MÁSODIK NAP----");
console.log("\telső feladata: "+await dayTwoOne(__dirname));

console.log("-----HARMADIK NAP----");
console.log("\telső feladata: "+await dayThreeOne(__dirname));

console.log("-----NEGYEDIK NAP----");
console.log("\telső feladata: "+await dayFourOne(__dirname));

console.log("-----ÖTÖDIK NAP----");
console.log("\telső feladata: "+await dayFiveOne(__dirname));

console.log("-----HATODIK NAP----");
console.log("\telső feladata: "+await daySixOne(__dirname));

console.log("-----HETEDIK NAP----");
console.log("\telső feladata: "+await daySevenOne(__dirname));

console.log("-----NYOLCADIK NAP----");
console.log("\telső feladata: "+await dayEightOne(__dirname));

console.log("-----KILENCEDIK NAP----");
console.log("\telső feladata: "+await dayNineOne(__dirname));

console.log("-----TIZEDIK NAP----");
console.log("\telső feladata: "+await dayTenOne(__dirname));

console.log("-----TIZENEGYEDIK NAP----");
console.log("\telső feladata: "+await dayElevenOne(__dirname));