// import fs from "node:fs";

// const image = fs.readFileSync("imagep6.ppm");
// const index = 15;
// const pixelData = image.slice(index);
// let ppm3 = ``;

// console.log("length", pixelData.length, pixelData);
// for (let i = 0; i < pixelData.length; i += 3) {
//   const r = pixelData[i];
//   const g = pixelData[i + 1];
//   const b = pixelData[i + 2];
//   // console.log(r, g, b);
//   ppm3 += `${r} ${g} ${b} `;
//   if (i % (340 * 3) === 0 && i !== 0) ppm3 += "\n";
// }

// console.log(ppm3.split(" ").length);

// fs.writeFileSync("imagep3.ppm", ppm3);

// console.log("P6 converted to P3 successfully!");
