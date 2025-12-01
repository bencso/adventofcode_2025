import { dayOneOne } from "./day01/01/index.js";

import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log("Első nap, első feladata: " + dayOneOne(__dirname));
