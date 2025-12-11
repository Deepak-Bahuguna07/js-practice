// Iterate over lines of text
//   "this\nis\ngood" => ['this','is','good']

function* splitByNewLine(array) {
  let string = "";
  for (let index = 0; index <= array.length; index++) {
    if (array[index] === "\n" || index === array.length) {
      yield string;
      string = "";
      index++;
    }
    string += array[index];
  }
}

const seq = splitByNewLine("this\nis\ngood");
console.log([...seq]);
