import fs from "fs/promises";

// Feladat megoldá:
/*
Megállapítjuk hogy az S hol van, onnantól megyünk a következő sorba, utána ha ott van alatta a ^ jelt,
ha majd megyünk megint le stb. 
*/
export async function daySevenOne(dir) {
  try {
    const text = await fs.readFile(dir + "/day07/01/input.txt", "utf8");
    const splitted = text.split("\n").filter(Boolean);
    const splittedMatrix = splitted.map((text) =>
      text.split("").filter(Boolean)
    );
    const sOffset = splittedMatrix[0].indexOf("S");

    splittedMatrix.reduce(
      (acc, currentValue) => {
        for (let index = 0; index < currentValue.length; index++) {
          
            if (currentValue[index] === "^") {
            if (index - 1 >= 0 && currentValue[index - 1] === ".") {
              currentValue[index - 1] = "|";
              acc.sum++;
            }
            if (index + 1 < currentValue.length && currentValue[index + 1] === ".") {
              currentValue[index + 1] = "|";
              acc.sum++;
            }
            } else {
           
            }
        }

        return acc;
      },
      { offset: sOffset, sum: 0}
    );


    return 0;
  } catch (err) {
    console.error(err);
  }
}
