//Feladat:
// L vagy R = balra vagy jobbra (alacsonyabb vagy magasabb szám)
// Szám = hány forgatás

// 0-99 számok
// 5 -> L10 -> 95 -> R5 -> 0

// 50-el kezdünk

// Meg kell számolni hogy hányszor mutat nullára
// ha 0 alatt megy akkor utána 99-től számolunk

import fs from "fs/promises";

export async function dayOneOne(dir) {
  const start = 50;
  let count = 0;

  try {
    const text = await fs.readFile(dir + "/day01/01/input.txt", "utf8");
    text.split("\n").reduce(
      (acc, currentValue) => {
        // Felosztjuk a számokat: L | 82
        const direction = currentValue.slice(0, 1).toLocaleLowerCase();
        const convertCurrent = Number(acc.number);
        let convertNumber = Number(currentValue.slice(1, 4));
        // HA 100nál nagyob akkor mindegy mert igazándiból csak köröket megy ezért azt csináljuk hogy ha a szám:
        // 682 -> ebből: 82-t csinálunk
        if (convertNumber > 100)
          convertNumber = convertNumber - Math.floor(convertNumber / 100) * 100;

        const returnValue = numberCalculation(
          convertCurrent,
          convertNumber,
          direction
        );

        acc.number = returnValue;
        if (returnValue === 0 || returnValue === 100) count++;
        return acc;
      },
      { number: start }
    );
  } catch (err) {
    console.error(err);
  }

  return count;
}

// Ki kell számolni igazándiból a különbséget és annak kell az abszolutját venni
// és akkor megvan, hogy mennyit kell a 100-tól számolni ha balra megyünk és "nullától" kell számolni....
// Mert akkor: ha pl 50-68 = -(-18) => 18 = 100-18 => 82

// Szóval: ha pl: return 50-68 <= 0 ? 100-(abs(50-68)) : 50-68
function numberCalculation(number, current, direction) {
  if (direction === "l") {
    return number - current <= 0
      ? 100 - Math.abs(number - current)
      : number - current;
  } else {
    return number + current >= 100
      ? number + current === 100
        ? 0
        : Math.abs(100 - Math.abs(number + current))
      : number + current;
  }
}
