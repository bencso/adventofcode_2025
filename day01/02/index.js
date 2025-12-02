//Feladat:
// L vagy R = balra vagy jobbra (alacsonyabb vagy magasabb szám)
// Szám = hány forgatás

// 0-99 számok
// 5 -> L10 -> 95 -> R5 -> 0

// 50-el kezdünk

// Meg kell számolni hogy hányszor mutat nullára
// ha 0 alatt megy akkor utána 99-től számolunk

import fs from "fs/promises";

export async function dayOneTwo(dir) {
  const start = 50;
  let count = 0;

  try {
    const text = await fs.readFile(dir + "/day01/01/input.txt", "utf8");
    text.split("\n").reduce(
      (acc, currentValue) => {
        // Felosztjuk a számokat: L | 82
        const direction = currentValue.slice(0, 1).toLocaleLowerCase();
        const convertCurrent = Number(acc.number);
        let convertNumber = Number(currentValue.slice(1, 10));
        // HA 100nál nagyob akkor mindegy mert igazándiból csak köröket megy ezért azt csináljuk hogy ha a szám:

        //Megszámolni hogy a maradék mozgás még átment-e a nullán
        if (convertNumber > 100) {
          count += Math.floor(convertNumber / 100);
          convertNumber = convertNumber - Math.floor(convertNumber / 100) * 100;
        }

        // Megnézzük a maradékot és hogy átlépjük-e a nullát vagy a 100-at
        const remaining = convertNumber % 100;
        if (remaining > 0) {
          if (direction === "l") {
            if (remaining >= 100) count++;
          } else {
            if (convertCurrent + remaining >= convertNumber) count++;
          }
        }

        const returnValue = numberCalculation(
          remaining,
          convertCurrent,
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

// Itt megnézzük hogy a részleges milyen uj számot ad majd
function numberCalculation(number, current, direction) {
  return direction === "l"
    ? (current - number + 100) % 100
    : (current + number) % 100;
}
