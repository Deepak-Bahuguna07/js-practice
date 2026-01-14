// export const readFileData = async (path) => await Deno.readTextFile(path);

export const writeData = async (data, separator = "\n") =>
  await Deno.stdout.write(new TextEncoder().encode(data.join(separator)));

// export const addHeader = (fileName, data) => `==> ${fileName} <==\n${data}\n`;

export const sliceData = (data, separator, count, fileCount = 0) => {
  const requiredData = data.split(separator).slice(0, count).join(separator);
  return (fileCount === 1) ? requiredData + separator : requiredData;
};

const SPECIFIERS = {
  "-n": "\n",
  "-c": "",
  "-q": "",
};

const stdinForBytes = async (count, type) => {
  let data = "";

  for await (const chunk of type) {
    data += new TextDecoder().decode(chunk);

    if (data.length >= count) {
      const requiredData = data.slice(0, count);
      return writeData([requiredData]);
    }
  }
  return writeData([data]);
};

const stdinForlines = async (count, type) => {
  let lineCount = 0;

  for await (const chunk of type) {
    const buffer = sliceData(new TextDecoder().decode(chunk), "\n", count);
    writeData([buffer.trim() + "\n"]);
    lineCount++;
    if (lineCount >= count) return;
  }
};

const headStdin = (specifier, count, type) =>
  specifier === "-c" ? stdinForBytes(count, type) : stdinForlines(count, type);

// const main = async () => {

//   for await (const chunk of file.readable) {
//     Deno.stdout.writable.getWriter().write(chunk);
//   }
// };

// main();

// const stdinMode = Deno.stdin.readable;

export const head = async (isQuietMode, mode, count, files) => {
  // const content = [];

  for await (const file of files) {
    // const separator = SPECIFIERS[mode];
    // let data;

    try {
      const file = await Deno.open("files.txt", { read: true });
      const fileMode = file.readable;
      if (!isQuietMode && files.length > 1) {
        Deno.stdout.write(`==> ${fileName} <==\n`);
      }
      headStdin(mode, count, fileMode);
      // content.push(requiredData);
    } catch (_) {
      Deno.stdout.write(`head: ${file}: No such file or directory\n`);
      // content.push(`head: ${file}: No such file or directory\n`);
    }
  }

  // return writeData(content);
};
