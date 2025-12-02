//Feladat:
//
//  Kapunk egy stringet ahol a dolgok ,-vel vannak elválasztva ezen belül pedig kötőjellel
//  Össze kell adni az érvénytelen azonosítókat: csak kétszer ismétlődő számjegysorozat
//  Ezek érvénytelenek: 55 : kétszer 5, 6464: kétszer 64
// Egyik szám se kezdődik nullával

import fs from "fs/promises";

export async function dayTwoOne(dir) {
  let sum = 0;

  try {
    const text = await fs.readFile(dir + "/day02/01/input.txt", "utf8");
    //Spliteljük a felsorolást
    text
      .trim()
      .split(",")
      .forEach((currentValue) => {
        // Kiszedjük a x - y-ból a két számot
        const [min, max] = currentValue.split("-");
        // Végigmegyünk az intervallumon
        for (let index = parseInt(min); index <= parseInt(max); index++) {
          const invalid = textSearch(index.toString());
          // Ha invalid akkor hozzáadjuk
          if (invalid > 0) sum += invalid;
        }
      });
  } catch (err) {
    console.error(err);
  }

  return sum;
}

function textSearch(text) {
  const textHalf = text.length / 2;
  // Megnézzük balról majd jobbról a szöveget sliceolással, és ha így alakítjuk ki a pattern-t
  const element = text.slice(0, textHalf);
  const elementHalf = text.slice(textHalf);
  console.log(element+ " - "+elementHalf);
  // Nullával nem kezdödhet az elem, és ugye ha a pattern egyezik a szöveggel akkor jók vagyunk
  if (element[0] != "0" && elementHalf === element) {
    return parseInt(text);
  }
  return 0;
}