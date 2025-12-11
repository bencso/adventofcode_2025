import fs from "fs/promises";

// Feladat megoldás:
/**
 * Sorok:
 * [.##.] (3) (1,3) (2) (2,3) (0,2) (0,1) {3,5,4,7}
 *  - jelzőfény ábra (elvárt): [.##.] - a . kikapcsolt míg a # bekapcsolt
 *          - [.##.] -> négy lámpa van
 *  - egy vagy több gomb bekötési rajza: (1,3) (2) (2,3) (0,2) (0,1)
 *        - itt az indexet irja a lámpáknak (0 az első stb) => array[0] (kis segítség nekünk :D )
 *      => ha megnyojuk a gombot akkor a másik állapotba kerül a lámpa ki<->be
 *  - feszültségkövetelmények: {3,5,4,7}
 * 
 * Cél: A lehető legkevesebb gombnyomással állítsd be az összes lámpát helyesen minden gépen.
 * 
 * Példa:
 * [.##.] (3) (1,3) (2) (2,3) (0,2) (0,1) {3,5,4,7}

    Megoldás lehet például az első három gomb egyszeri megnyomása → összesen 3 nyomás.
    Másik megoldás: (1,3) egyszer, (2,3) egyszer, (0,1) kétszer → összesen 4 nyomás.
    Vagy az összes gombot megnyomni egyszer, kivéve (1,3)-at → 5 nyomás.
    De a legkevesebb szükséges nyomás 2, például ha a (0,2) és (0,1) gombokat egyszer-egyszer megnyomod.

    Valahogy úgy kéne megoldani szerintem, hogy a gombokon végigmegyünk úgy hogy 1 -> 2 -> 3 gomb nyomás, és a legkevesebbtől a legnagyobbik megyünk
 */

export async function dayTenOne(dir) {
  try {
    const text = await fs.readFile(dir + "/day10/01/input.txt", "utf8");
    const machine = text
      .split("\n")
      .filter(Boolean)
      .map((row) => {
        const splitted = row.split(" ");
        return {
          signal: splitted.shift(),
          voltage: splitted.pop(),
          connection: splitted,
        }
      });


    return 0;
  } catch (err) {
    console.error(err);
  }
}
