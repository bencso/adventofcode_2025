import fs from "fs/promises";

// Feladat megoldás:
/**
 * Megvan adva a start és az end
 * Meg kell néznünk hogy hányon keresztül megyünk
 * you : [eee]
 * eee: [aaa,bbb,ccc]
 * aaa: [out]
 * 
 * Folyamat ilyesmi: you -> eee -> aaa -> aaa (és itt megy az out-ig)
 * Ha nem jó folyamat akkor ilyen: you -> eee -> bbb  (itt megakad mert nicns childja)
 *
 * elsőnek az az ötletem hogy ezeket feltagoljuk úgy hogy eee: [aaa, bbb], majd ezek után egy path findingot csinálunk úgy hogy
 * ha benne van valamelyik tömbjében akkor ő lesz a vezető és mindig nézzük hogy a vezetők benne vannak-e a dologba és addig megyünk mig nincs meg az out....
 *
 * Lesz egy visited vagy current_path lista, és ha egy csomópont már szerepel benne, nem megyünk újra rá.
 * Rekurziv függvényt csinálunk, path findinggal (?)
 * Szóval két eset van a rekurziónál majd:
 *  - ha out-on állunk akkor -> csak egyetlen út létezik innentől => ["out"]
 *  - Ha a csomópontnak nincsenek kimenete -> nincs út => []
 *
 * -> minden gyerekre meghívjuk a függvényt, ugye rekurzió...
 * -> a listába beszúrjuk a jelenlegi csomópontot és visszaadjuk
 *
 * hogyha node === "out: akkor return [["out"]] ha node nak nincs gyereke akkor [] végigmegyünk a gyerekeken a nodenak:
 *  rekurziomeghivás:
 *     ezeken is végig megyünk és közben hozzáadjuk a bejárt ut tömbhöz
 *        és ezt adjuk majd vissza
 */

export async function dayElevenOne(dir) {
  try {
    const text = await fs.readFile(dir + "/day11/01/input.txt", "utf8");
    const childrens = {};
    text
      .split("\n")
      .filter(Boolean)
      .forEach((row) => {
        const splitted = row.split(":");
        childrens[splitted[0].trim()] = splitted[1].split(" ").filter(Boolean);
      });

    function findPaths(node, visited = new Set()) {
      if (node === "out") return [["out"]];
      if (!childrens[node]) return [];
      if (visited.has(node)) return [];

      visited.add(node);
     
      let paths = [];
      for (const child of childrens[node]) {
        const childPaths = findPaths(child, new Set(visited));
        for (const path of childPaths) {
          paths.push([node, ...path]);
        }
      }
      return paths;
    }

    const returnData = findPaths("you");

    return returnData.length;
  } catch (err) {
    console.error(err);
  }
}
