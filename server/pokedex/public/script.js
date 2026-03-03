const createDiv = (classname) => {
  const div = document.createElement("div");
  div.classList.add(classname);
  return div;
}

const createTypeElm = (types) => {
  const div = createDiv("types");
  types.forEach(type => {
    const span = document.createElement("span");
    span.classList.add("type");
    span.classList.add(type);
    span.innerText = type;

    div.appendChild(span);
  });

  return div;
}

const createImageElm = ({ img, name }) => {
  const container = createDiv("img");
  const image = document.createElement("img");
  image.setAttribute("src", img);
  image.setAttribute("alt", name);
  container.appendChild(image);
  return container;
}

const createOverview = ({ name, types }) => {
  const container = createDiv("overview");
  const nameDiv = document.createElement("div");
  nameDiv.classList.add("name");
  nameDiv.innerText = name;
  const typeElm = createTypeElm(types);
  container.append(nameDiv, typeElm)

  return container;
}

const createTd = (classname, data) => {
  const td = document.createElement("td");
  td.classList.add(classname);
  td.innerText = data;
  return td;
}

const createTr = ([stat, value]) => {
  const tr = document.createElement("tr");
  const statname = createTd("stat", stat);
  const statValue = createTd("value", value);
  tr.append(statname, statValue);

  return tr;
}

const createTable = (pokemon) => {
  const table = document.createElement("table");
  const tbody = document.createElement("tbody");

  Object.entries(pokemon.stats).forEach((stat) => {
    const tr = createTr(stat);
    tbody.appendChild(tr);
  });
  table.appendChild(tbody);

  return table
}

const createDetails = (pokemon) => {
  const container = createDiv("details");
  const table = createTable(pokemon);
  container.appendChild(table);
  return container;
}

const createInfo = (pokemon) => {
  const info = createDiv("info");
  const overview = createOverview(pokemon);
  const details = createDetails(pokemon);
  info.append(overview, details);

  return info;
}

const createCard = (pokemon) => {
  const card = createDiv("card");
  const img = createImageElm(pokemon);
  const info = createInfo(pokemon)


  card.append(img, info);
  return card;
}

const attechSearchBtnEvent = (container) => {
  const form = document.querySelector("#search-pokemon-name");

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const fd = new FormData(form);
    const { name } = Object.fromEntries(fd.entries());

    const data = await fetch(`/search-pokemon?name=${name}`);
    const pokemons = await data.json();

    container.innerHTML = "";


    for (const pokemon of Object.values(pokemons)) {
      const card = createCard(pokemon);
      container.appendChild(card);
    }
  });
}

// attechSearchTypeBtnEvent

const main = () => {
  const container = document.querySelector("main");
  attechSearchBtnEvent(container);
  attechSearchTypeBtnEvent(container);
}

window.onload = main