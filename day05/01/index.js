import fs from "fs/promises";

// Feladat megoldá:
// 3-5 tartomány => 3-4-5 mind friss bármi tartományon belül van friss
// Megvannak adva a tartományok ezeket a számokat betesszük egy Set-be,
// és ha a setbe benne van az adott tartomány száma akkor az jó lesz és ezt összesumoljuk

// Reduce-os megoldás:
// vagy azt is lehet hogy végig megyünk a tartományokon végigmegyünk a termékeken és ha x>= termek <= y sum++
export async function dayFiveOne(dir) {
  try {
    const text = await fs.readFile(dir + "/day05/01/input.txt", "utf8");
    const inputs = text.split("\n\n");
    const ranges = inputs[0];
    const products = inputs[1];

    const range = ranges.split("\n");
    const product = products.split("\n").filter(Boolean);

    let returnValue = product.reduce((acc, currrentValue) => {
      for (let index = 0; index < range.length; index++) {
        const ranges = range[index].split("-");
        if (
          Number(currrentValue) >= Number(ranges[0]) &&
          Number(currrentValue) <= Number(ranges[1])
        ) {
          return acc + 1;
        }
      }
      return acc;
    }, 0);
    return returnValue;
  } catch (err) {
    console.error(err);
  }
}
