export const writeData = async (data, separator = "\n") =>
  await Deno.stdout.write(new TextEncoder().encode(data.join(separator)));

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

export const head = async (isQuietMode, mode, count, files) => {
  for await (const file of files) {
    try {
      const file = await Deno.open("files.txt", { read: true });
      const fileMode = file.readable;
      if (!isQuietMode && files.length > 1) {
        writeData([`==> ${fileName} <==\n`]);
      }
      headStdin(mode, count, fileMode);
    } catch (_) {
      writeData([`head: ${file}: No such file or directory\n`]);
    }
  }
};

const setMode = (metaData, args, index) => {
  if (args[index] === "-q") metaData.isQuietMode = true;
  else {
    metaData.mode = args[index];
    metaData.count = args[++index];
  }
  return (index + 1);
};

export const parseInput = (args) => {
  const metaData = { isQuietMode: false, mode: "-n", count: 10, files: [] };
  let index = 0;

  while (index < args.length) {
    if (args[index] in SPECIFIERS) {
      index = setMode(metaData, args, index);
    } else {
      metaData.files.push(...args.slice(index));
      return metaData;
    }
  }
  return metaData;
};

export const main = (args) => {
  const { isQuietMode, mode, count, files } = parseInput(args);
  if (count === "0") return;
  if (isNaN(parseInt(count))) {
    return writeData([`head: illegal line count -- ${count}`]);
  }

  if (!files.length) return headStdin(mode, count, Deno.stdin.readable);
  return head(isQuietMode, mode, count, files);
};
