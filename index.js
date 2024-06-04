// ALGORITHMS FOR PALINDROME

let checkPalindrom = (string) => {
  try {
    if (!string || typeof string !== "string" || string.length == 0)
      throw "Not a valid Input";

    let firstIndex = 0;
    let lastIndex = string?.length - 1;

    while (firstIndex < lastIndex) {
      if (string[firstIndex] !== string[lastIndex]) return false;
      lastIndex--;
      firstIndex++;
    }

    return true;
  } catch (error) {
    return `ERROR: ${error}`;
  }
};

module.exports = checkPalindrom;
