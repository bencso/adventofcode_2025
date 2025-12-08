import fs from "fs/promises";

// Feladat megoldás:
/*
Bemenet egy X,Y,Z koorditanakat tartalmazo lista, amik egymáshoz közel van egyenes vonalban:
162,817,812 és a 425,690,689
össze kell kötni az egymáshoz közel lévőket (1000) és a megszorozni 3 legnagyobb méretét

const distance = (x0, y0, x1, y1) => Math.hypot(x1 - x0, y1 - y0);
distance(1, 1, 2, 3); // ~2.2361

hypot függvény => Euclidean distance számlálásra van

szóval igazándiból azt kell csinálni hogy végig menni a koordinátákon azokon elvégezni a distancet és utána ezeket sorba állítani és megvan a közel esők listája
majd utána a 3 legnagyobbat kivenni és megszorozni.
*/
export async function dayEightOne(dir) {
  try {
    const text = await fs.readFile(dir + "/day08/01/input.txt", "utf8");
    const splitted = text.split("\n").filter(Boolean);
    console.log(splitted);


    return 0;
  } catch (err) {
    console.error(err);
  }
}
