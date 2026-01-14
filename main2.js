// export const readFileData = async (path) => {
//   const data = await Deno.readTextFile(path);
//   return data;
// };

// export const sliceData = (data, separator = "\n", count = 10) => {
//   count = count === -1 ? 10 : parseInt(count);
//   const requiredData = data.split(separator);
//   return requiredData.slice(0, count).join(separator);
// };

// export const addHeader = (fileName, data) => `==> ${fileName} <==\n${data}\n`;

// export const writeData = async (data) =>
//   await Deno.stdout.write(new TextEncoder().encode(data));

// export const parseInput = (args) => {
//   const parsedData = { isQuietMode: 0, specifier: "", count: -1, files: [] };
//   for (let index = 0; index < args.length; index++) {
//     const value = args[index];
//     if (value === "-q") parsedData.isQuietMode = true;
//     else if (value.includes("-")) {
//       parsedData.specifier = value;
//       parsedData.count = args[++index]; // isNaN(parseInt(args[index + 1])) ? -1 :
//     } else parsedData.files.push(value);
//   }

//   return parsedData;
// };

// const formateData = (files, content) =>
//   files.map((fileName, index) => addHeader(fileName, content[index]));

// export const head = async (isQuietMode, specifier, count, files) => {
//   let content = "";
//   for await (const file of files) {
//     const separator = SPECIFIERS[specifier];
//     let data;
//     try {
//       data = await readFileData(`./src/${file}`);
//     } catch (_) {
//       content += `head: ${file}: No such file or directory\n`;
//       continue;
//     }

//     let requiredData = sliceData(data, separator, count);
//     if (!isQuietMode && files.length > 1) {
//       requiredData = addHeader(file, requiredData);
//     }
//     content += requiredData + "\n";
//   }
//   return writeData(content);
// };

// const headStdin = async (specifier, count = 10) => {
//   count = count === -1 ? 10 : parseInt(count);
//   let lineCount = 0;

//   let data = "";
//   for await (const chunk of Deno.stdin.readable) {
//     if (specifier === "-c") {
//       data += new TextDecoder().decode(chunk);
//       if (data.length >= count) {
//         const requiredData = data.slice(0, count);
//         writeData(requiredData);
//         return;
//       }
//     } else {
//       const buffer = sliceData(new TextDecoder().decode(chunk), "\n", count);
//       writeData(buffer.trim() + "\n");
//       lineCount++;
//       if (lineCount >= count) return;
//     }
//   }
// };

// const SPECIFIERS = {
//   "-n": "\n",
//   "-c": "",
// };

// export const main = (args) => {
//   const { isQuietMode, specifier, count, files } = parseInput(args);
//   if (specifier && count === -1) {
//     throw (`head: option requires an argument -- ${specifier}`);
//   }

//   if (!files.length) return headStdin(specifier, count);
//   return head(isQuietMode, specifier, count, files);
// };

// export const readFileData = async (path) => {
//   const data = await Deno.readTextFile(path);
//   return data;
// };

// export const sliceData = (data, separator, count) => {
//   count = count === -1 ? 10 : parseInt(count);
//   separator = separator === undefined ? "\n" : separator;

//   const requiredData = data.split(separator);
//   return requiredData.slice(0, count).join(separator);
// };

// export const addHeader = (fileName, data) => `==> ${fileName} <==\n${data}\n`;

// export const writeData = async (data) =>
//   await Deno.stdout.write(new TextEncoder().encode(data.join("\n")));

// const SPECIFIERS = {
//   "-n": "\n",
//   "-c": "",
// };

// export const head = async (isQuietMode, specifier, count, files) => {
//   const content = [];
//   for await (const file of files) {
//     const separator = SPECIFIERS[specifier];
//     let data;
//     try {
//       data = await readFileData(`${file}`);
//     } catch (_) {
//       content.push(`\nhead: ${file}: No such file or directory\n`);
//       continue;
//     }
//     let requiredData = sliceData(data, separator, count);
//     if (!isQuietMode && files.length > 1) {
//       requiredData = addHeader(file, requiredData);
//     }

//     content.push(requiredData);
//   }

//   console.log(content);
//   return writeData(content);
// };

// const headStdin = async (specifier, count) => {
//   count = count === -1 ? 10 : parseInt(count);
//   let lineCount = 0;

//   let data = "";
//   for await (const chunk of Deno.stdin.readable) {
//     if (specifier === "-c") {
//       data += new TextDecoder().decode(chunk);
//       if (data.length >= count) {
//         const requiredData = data.split("").slice(0, count);
//         writeData(requiredData);
//         return;
//       }
//     } else {
//       const buffer = sliceData(new TextDecoder().decode(chunk), "\n", count)
//         .split("\n");
//       console.log({ buffer });
//       writeData(buffer + "\n");
//       lineCount++;
//       if (lineCount >= count) return;
//     }
//   }
// };
