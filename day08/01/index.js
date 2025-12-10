import fs from "fs/promises";

// Feladat megoldás:
/*
Bemenet egy X,Y,Z koorditanakat tartalmazo lista, amik egymáshoz közel van egyenes vonalban:
162,817,812 és a 425,690,689
össze kell kötni az egymáshoz közel lévőket (1000) és a megszorozni 3 legnagyobb méretét

const distance = (x0, y0, x1, y1) => Math.hypot(x1 - x0, y1 - y0);
distance(1, 1, 2, 3); // ~2.2361

hypot függvény => Euclidean distance számlálásra van

szóval igazándiból azt kell csinálni hogy végig menni a koordinátákon azokon elvégezni a distancet és
utána sorba állítani ezeken egy union find-ot kell elvégezni (ehhez segítséget kértem....)

Union find:
  - Tulajdonképpen összepárosítunk elemeket ugy hogy az szülő-gyerek kapcsolatban lesznek
    array = [0, 0, 2, 2, 4, 4]

    0: szűlője: 0
    1: szűlője: 0
    2: szűlője: 2
    3: szűlője: 2
    4: szűlője: 4
    5: szűlője: 4

    Áramkörök: [0,1], [2,3], [4,5] = 3 áramkör

  - Kezdésnek mindeki a saját szülője (egyedi dobozok)
  - Megkeressük a find-al a vezetőt a szűlőt: find(5) -> array[5] = 2 —> array[2] = 1 -> array[1] = 1 → Vissza: 1,
  ezt pedig egy rekurzióval keressük a végéig
  - majd ezeket uniozzuk azaz: összekötjük a dobozokat:
    - megkeressük a két doboz vezetőjét. ha nem egyeznek akkor az egyik vezetőt a másik alá helyezzük
              -> az összes doboz, amely edgeJ vezetésével volt, most edgeI vezetésével lesz
  - ezek után az 1000 dobozon végig megyünk 
  - ezt követően pedig az áramköröket megszámoljuk és összeszorozzuk az 3 legnagyobbat
*/
export async function dayEightOne(dir) {
  try {
    const text = await fs.readFile(dir + "/day08/01/input.txt", "utf8");
    const splitted = text.split("\n").filter(Boolean);
    const edges = [];

    for (let i = 0; i < splitted.length; i++) {
      for (let j = i + 1; j < splitted.length; j++) {
        const [ax, ay, az] = splitted[i].split(",").map(Number);
        const [bx, by, bz] = splitted[j].split(",").map(Number);

        const dist = Math.hypot(ax - bx, ay - by, az - bz);
        edges.push({ i, j, dist });
      }
    }

    edges.sort((a, b) => a.dist - b.dist);

    const array = [];
    for (let i = 0; i < splitted.length; i++) {
      array[i] = i;
    }

    function find(x) {
      if (array[x] !== x) {
        array[x] = find(array[x]);
      }
      return array[x];
    }

    function union({ i, j }) {
      const edgeI = find(i);
      const edgeJ = find(j);

      if (edgeI !== edgeJ) {
        array[edgeJ] = edgeI;
        return true;
      }
      return false;
    }

    for (let index = 0; index < 1000; index++) {
      union({
        i: edges[index].i,
        j: edges[index].j,
      });
    }

    const circuitSizes = [];

    for (let i = 0; i < splitted.length; i++) {
      const root = find(i);
      if (!circuitSizes[root]) {
        circuitSizes[root] = 0;
      }
      circuitSizes[root]++;
    }

    return circuitSizes
      .filter((item) => {
        return item !== 1;
      })
      .sort((a, b) => {
        return b - a;
      })
      .slice(0, 3)
      .reduce((acc, currentValue) => {
        return acc * currentValue;
      });
  } catch (err) {
    console.error(err);
  }
}
