import * as fs from "node:fs";

fs.readFile("./files.txt", "utf8", (_, data) => {
  const file = data.split("\n");
  fs.readFile(file[0], "utf8", (_, data1) => {
    fs.readFile(file[1], "utf8", (_, data2) => {
      console.log(data1 + " " + data2);
    });
  });
});
