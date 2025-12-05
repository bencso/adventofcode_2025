import fs from "fs/promises";

// Feladat:
// A tekercsek körül (8 irányban) kevesebb-e van mint négy ezt megvizsgálni
export async function dayFourOne(dir) {
  try {
    let sum = 0;
    const text = await fs.readFile(dir + "/day04/01/input.txt", "utf8");
    // Sor törés
    const rows = text.split("\n");
    const rowNumber = rows.length;
    for (let x = 0; x < rowNumber; x++) {
      const maxLength = rows[x].length;
      for (let y = 0; y < maxLength; y++) {
        const element = rows[x][y];
        const neighbours = [
          [x, y - 1], // fent
          [x + 1, y - 1], // jobb-fent
          [x + 1, y], // jobb
          [x + 1, y + 1], // jobb-lent
          [x, y + 1], // lent
          [x - 1, y + 1], // bal-lent
          [x - 1, y], // bal
          [x - 1, y - 1], // bal-fent
        ];

        let paperRolls = 0;
        if (element === "@") {
          neighbours.forEach((neighbour) => {
            const nx = neighbour[0];
            const ny = neighbour[1];
            if (nx >= 0 && nx < rowNumber && ny >= 0 && ny < rows[nx].length) {
              if (rows[nx][ny] === "@") paperRolls++;
            }
          });
           if (paperRolls < 4) {
          sum++;
        }
        }
      }
    }

    // Sumolás
    return sum;
  } catch (err) {
    console.error(err);
  }
}
