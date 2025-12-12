import fs from "fs/promises";

// Feladat megoldás:
/**
 * - Alakzatok:
 *     - Mindegyik egy indexxel kezdődik kettősponttal: 2:
 *     - Alakzat része a # de a . nem
 * - Fák alatti régiók:
 *     - Szélesség x Hossz: 4x4
 * - egyes alakzatok mennyiségét
 *      - 1 0 1 0 3 2:
 *    1: 0 indexű ajándékot, 
 *    0: 1 indexű ajándékot,
 *    1: 2 alakindexű ajándékot,
 *    0: 0 alakindexű ajándékot, 
 *    3: 4 alakindexű ajándékot
 *    2: 5 alakindexű ajándékot.
 * 
 *  - ajándékok: - forgathatók és tükrözhetők 
 *               - nem fedhetik egymást
 *               - összeilleszthetők
 * - hány régióba fér el a felsorolt ajándékok
 * 
 * Az első régió 4x4-es:
  ....
  ....
  ....
  ....
  
  Ebben meg kell határoznod, hogy elfér-e két olyan ajándék, amelyek alakindexe 4:
  ###
  #..
  ###

  Némi kísérletezés után kiderült, hogy mindkét jelen elfér ebben a régióban. 

  AAA.
  ABAB
  ABAB
  .BBB

  
  - Szóval azt kéne hogy feltagoljuk a mezőket: #### és azokat tömbbe tároljuk igy az indexet megfogjuk tudni oldani
  - Ezekután csak egy ellenőrzés kell majd az indexekre igazándiból....
 */

export async function dayTwelveOne(dir) {
  try {
    const text = await fs.readFile(dir + "/day12/01/input.txt", "utf8");
    text
      .split("\n\n")
      .filter(Boolean).forEach((value)=>{
        console.log("---");
        console.log(value);
        console.log("---");
      });

    return 0;
  } catch (err) {
    console.error(err);
  }
}
