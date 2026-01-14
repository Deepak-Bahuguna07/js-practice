const head = async ([_isQuietMode, mode, count, ...files]) => {
  let buffer = "";
  console.log({ mode });
  mode = mode === "\\n" ? "\n" : "";
  console.log({ _isQuietMode, mode, count, files });

  const head = new TransformStream({
    transform(chunk, controller) {
      buffer += chunk;
      const buf = buffer.split(mode).filter((x) => x);
      // console.log({ chunk });
      // console.log({ buf });
      // console.log({ buffer });
      if (mode === "\n" && buf.length <= count) controller.enqueue(chunk);
      if (buf.length >= count) {
        if (mode != "\n" || files.length > 0) {
          controller.enqueue(buf.slice(0, count).join(mode));
        }
        controller.terminate();
      }
    },
  });

  if (files.length === 0) {
    await Deno.stdin.readable
      .pipeThrough(new TextDecoderStream())
      .pipeThrough(head)
      .pipeThrough(new TextEncoderStream())
      .pipeTo(Deno.stdout.writable);
  } else {
    for await (const file of files) {
      console.log({ file, files });
      const pwf = await Deno.open(file, { read: true });
      await pwf.readable
        .pipeThrough(new TextDecoderStream())
        .pipeThrough(head)
        .pipeThrough(new TextEncoderStream())
        .pipeTo(Deno.stdout.writable);
    }
  }
};

head(Deno.args);
