async function* getPokemons(initialP1 = 0, initialP2 = 20) {
  const url = (p1) =>
    `https://pokeapi.co/api/v2/pokemon/?offset=${p1}&limit=${initialP2}`;
  let p1 = initialP1;

  while (true) {
    const current = await fetch(url(p1)).then((res) => res.json());
    p1 += 20;
    yield current;
  }
}

async function get1000Pokemons() {
  const all = [];
  const itr = getPokemons();
  for (let i = 0; i < 25; i++) {
    const val = await itr.next();
    all.push(val.value.results);
  }

  return all;
}

const getPokemonData = async (url) => {
  const res = await fetch(url);
  const pokemon = await res.json();
  const abilities = pokemon.abilities.map((x) => x.ability.name);
  const stats = pokemon.stats.map((x) => [x.stat.name, x.base_stat]);
  const pokemonDetails = [
    pokemon.name,
    pokemon.id,
    abilities,
    pokemon.base_experience,
    pokemon.height,
    pokemon.weight,
    pokemon.moves.length,
    stats,
  ];

  return pokemonDetails;
};

const formateData = (data) => {
  const stats = data[7];
  let formatedStats = "";
  stats.forEach((element) => {
    formatedStats += `         ${element[0].toUpperCase()} : ${element[1]}\n`;
  });

  const desc = `            ||-${data[0].toUpperCase()}-||            
ID : ${data[1]}                                           
HEIGHT : ${data[4]}                         
WEIGHT : ${data[5]}                         
ABILITIES : ${data[2]}
BASE_EXPERIENCE : ${data[3]}
MOVES : ${data[6]}                     
STATES : 
${formatedStats}
`;
  return desc;
};

const play = async (pokemons) => {
  while (true) {
    const pokemon = prompt("Search for Pokemon: ");
    if (pokemon === "exit") break;
    const isAPokemon = pokemons.find((x) => x.name === pokemon);
    if (isAPokemon) {
      console.clear();
      const data = await getPokemonData(isAPokemon.url);
      console.log(formateData(data));
    } else console.log("not valid!");
  }

  return console.log("ho gya khtam!");
};

const main = async () => {
  const all = await get1000Pokemons();
  const pokemons = all.flat();
  console.clear();
  play(pokemons);
};

main();
console.log("Loading...");
