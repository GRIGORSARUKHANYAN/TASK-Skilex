import {
  createCombinations,
  createItem,
  createResponses,
} from "../database.js";

class CombinationService {
  async createCombination(data) {
    let result = await this.combine(data);
    console.log(JSON.stringify(result[0]));

    await createItem(JSON.stringify(result[0])),
      await createCombinations(JSON.stringify(result[1]));
    return await createResponses(
      JSON.stringify(result[0]),
      JSON.stringify(result[1])
    );
  }

  async numberToLetter(num) {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (num > 0 && num <= 26) {
      return alphabet[num - 1];
    }
    return null;
  }

  async toPrefix(arr) {
    let numtext = [];
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[i]; j++) {
        numtext.push(`${await this.numberToLetter(i + 1)}${j + 1}`);
      }
    }
    return numtext;
  }

  async combine(data) {
    let resultArr = [];
    let arr = await this.toPrefix(data);

    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i][0] !== arr[j][0]) {
          resultArr.push([arr[i], arr[j]]);
        }
      }
    }

    return [arr, resultArr];
  }
}

export default CombinationService;
