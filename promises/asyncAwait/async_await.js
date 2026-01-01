const dbg = (x) => console.log("dbg", x) || x;

const callback = (x = 7) => {
  console.log("call back", x);
  return () => {
    return console.log("call back ka call back") || x;
  };
};

const myPromise = () => {
  return new Promise((r) => r(7));
};

const kuchToHai = async () => {
  const thala = await myPromise()
    // .then((x) => callback(x) && x) // dusre stack mai then nahi jata uska callback jata hai
    .then(callback()) // dusre stack mai then nahi jata uska callback jata hai
    .then((x) => console.log("then 2", x) || 7)
    .catch((x) => console.log("catch", x) || x)
    .finally((t) => console.log("finally", t) || dbg(t));
  console.log("function end", thala);
};

kuchToHai();
console.log("hello!");
