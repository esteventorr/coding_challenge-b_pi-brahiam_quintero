// MOCK REST API

function exists() {
  return localStorage.getItem("pk-db") !== null;
}

function m_initialize() {
  if (!exists()) {
    localStorage.setItem(
      "pk-db",
      JSON.stringify([
        {
          id: 2,
          nombre: "pikachu",
          imagen:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
          ataque: 100,
          defensa: 79,
        },
        {
          id: 3,
          nombre: "charmander",
          imagen:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
          ataque: 70,
          defensa: 30,
        },
        {
          id: 22,
          nombre: "butterfree",
          imagen:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
          ataque: 50,
          defensa: 50,
        },
        {
          id: 27,
          nombre: "onix",
          imagen:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/95.png",
          ataque: 50,
          defensa: 50,
        },
      ])
    );
    return true;
  } else {
    return false;
  }
}

function m_getAllPokemons() {
  let response = getData();
  return response;
}

function m_addNewPokemon(pokemon) {
  let response = getData();

  // SIMULATING DATA BASE ID AUTO-INCREMENT
  let id = Math.max(...response.map((o) => o.id)) + 1;
  response.push({ ...pokemon, id: id });

  storeData(response);
  return response;
}

function m_removePokemon(id) {
  let response = getData();
  storeData(response.filter((o) => o.id !== id));
  return response;
}

function m_updatePokemon(id, pokemon) {
  let response = getData().filter((o) => o.id !== id);
  response.push({ ...pokemon, id: id });
  storeData(response);
  return response;
}

function storeData(pokemons) {
  localStorage.setItem("pk-db", JSON.stringify(pokemons));
  return "stored";
}

function getData() {
  const data = localStorage.getItem("pk-db");
  return JSON.parse(data);
}

export {
  m_initialize,
  m_getAllPokemons,
  m_addNewPokemon,
  m_removePokemon,
  m_updatePokemon,
  exists,
  storeData,
  getData,
};
