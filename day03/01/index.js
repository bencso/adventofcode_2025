import fs from "fs/promises";

// Feladat:
// Megkeresni azt a két számot a sorból ami "összeolvasztással" a legnagyobb számot adja ki, majd ezeket a maxokat összeadni

// Elsőnek végig megyek az első karakter majd azon belül az i=index+1 i<lenght, (buborékos rendezéses)
// majd ezeken végig az egész soron és ami nagyobb kicserélem
export async function dayThreeOne(dir) {
  try {
    const numbers = [];
    const text = await fs.readFile(dir + "/day03/01/input.txt", "utf8");
    // Sor törés
    text.split("\n").forEach((element) => {
      const maxLenght = element.length;

      let max = 0;
      // Buborékos rendezés
      for (let x = 0; x < maxLenght; x++) {
        for (let y = x + 1; y < maxLenght; y++) {
          const combined = parseInt(String(element[x]) + String(element[y]));
          if (combined > max) {
            max = combined;
          }
        }
      }
      numbers.push(max);
    });

    // Sumolás
    return numbers.reduce((acc, currentValue) => {
      return (acc += currentValue | 0);
    }, 0);
  } catch (err) {
    console.error(err);
  }
}
