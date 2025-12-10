import fs from "fs/promises";

// Feladat megoldás:
/**
 * Felosztjuk a kapott inputot x,y koordinátára
 * Ezek után végig megyunk a koordinátákon és meghatározzuk a téglalap két pontját (A,D)
 * Ezekből pedig meghatározzuk az oldalakat, ha példaul ez a két pont A (7,1) D(11,7)
 * akkor AB= |7-11|+1 és BD= |1-7|+1 => A[0] - D[0] + 1, A[1] - D[1] + 1
 * Az terület kiszámítása így akkor pedig: AB*BD
 */

export async function dayNineOne(dir) {
  try {
    const text = await fs.readFile(dir + "/day09/01/input.txt", "utf8");
    const coords = text
      .split("\n")
      .filter(Boolean)
      .map((xy) => {
        const [x, y] = xy.split(",");
        return [Number(x), Number(y)];
      });

    let maxArea = 0;

    for (let i = 0; i < coords.length - 1; i++) {
      for (let j = i + 1; j < coords.length; j++) {
        const A = coords[i];
        const D = coords[j];
        const area = (Math.abs(A[0] - D[0]) + 1) * (Math.abs(A[1] - D[1]) + 1);
        if (area > maxArea) {
          maxArea = area;
        }
      }
    }

    return maxArea;
  } catch (err) {
    console.error(err);
  }
}
