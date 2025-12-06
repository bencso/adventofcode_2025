import fs from "fs/promises";

// Feladat megoldá:
/*
A sorokat felspliteljük törtéspontonként, és ezeket egy array-be fogjuk tenni, majd ezeken végigmegyünk ugy
hogy ugye az indexelés alapján az arrayeken keresztül fogunk végigmenni és ezeke alapján fogjuk a matematikai müveleteket végrehajtani

123 328  51 64 
 45 64  387 23 
  6 98  215 314
*   +   *   +  
*/

export async function daySixOne(dir) {
  try {
    const text = await fs.readFile(dir + "/day06/01/input.txt", "utf8");
    const rows = text.split("\n");

    const array = rows.map((value) => {
      return value.split(" ").filter(Boolean);
    });

    const sums = [];

    for (let x = 0; x < array[0].length; x++) {
      let arraysT = [];
      for (let y = 0; y < array.length; y++) {
        arraysT.push(array[y][x]);
      }

      let last = arraysT.pop();

      switch (last) {
        case "*":
          sums.push(
            arraysT.reduce((acc, currentValue) => acc * Number(currentValue), 1)
          );
          break;
        case "+":
          sums.push(
            arraysT.reduce((acc, currentValue) => acc + Number(currentValue), 0)
          );
          break;
        case "-":
          sums.push(
            arraysT.reduce((acc, currentValue) => acc - Number(currentValue))
          );
          break;
        case "/":
          sums.push(
            arraysT.reduce((acc, currentValue) => acc / Number(currentValue))
          );
          break;
      }
    }

    return sums.reduce((acc, currentValue) => {
      return acc + Number(currentValue);
    });
  } catch (err) {
    console.error(err);
  }
}
