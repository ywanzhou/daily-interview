const format = str => {
  const arr = str.split("-");
  for (let i = 1; i < arr.length; i++) {
    const newArr = arr[i].split("");
    newArr[0] = newArr[0].toUpperCase();
    arr[i] = newArr.join("");
  }
  return arr.join("");
};
// test
console.log(format("background-color")); // backgroundColor
