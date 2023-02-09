import {
  m_initialize,
  m_getAllPokemons,
  m_addNewPokemon,
  m_removePokemon,
  m_updatePokemon,
  storeData,
  getData,
  exists,
} from "../m_restAPI.js";

test("Test MOCK API", () => {
  localStorage.removeItem("pk-db");
  expect(exists()).toBe(false);
  expect(m_initialize()).toBe(true);
  expect(exists()).toBe(true);
  expect(m_initialize()).toBe(false);

  const pokemonsMock = [
    {
      id: 1,
      nombre: "clefairy",
      imagen:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/35.png",
      ataque: 90,
      defensa: 68,
    },
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
      id: 4,
      nombre: "bulbasaur",
      imagen:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
      ataque: 60,
      defensa: 50,
    },
    {
      id: 5,
      nombre: "squirtle",
      imagen:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
      ataque: 75,
      defensa: 10,
    },
    {
      id: 6,
      nombre: "eevee",
      imagen:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png",
      ataque: 99,
      defensa: 45,
    },
    {
      id: 14,
      nombre: "meowth",
      imagen:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/52.png",
      ataque: 78,
      defensa: 50,
    },
    {
      id: 15,
      nombre: "machamp",
      imagen:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/68.png",
      ataque: 28,
      defensa: 75,
    },
    {
      id: 16,
      nombre: "venonat",
      imagen:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/48.png",
      ataque: 50,
      defensa: 50,
    },
    {
      id: 17,
      nombre: "pidgeot",
      imagen:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png",
      ataque: 89,
      defensa: 23,
    },
    {
      id: 18,
      nombre: "bibarel",
      imagen:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/400.png",
      ataque: 33,
      defensa: 82,
    },
    {
      id: 19,
      nombre: "treecko",
      imagen:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/252.png",
      ataque: 61,
      defensa: 47,
    },
    {
      id: 20,
      nombre: "voltorb",
      imagen:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/100.png",
      ataque: 58,
      defensa: 58,
    },
    {
      id: 21,
      nombre: "noctowl",
      imagen:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/164.png",
      ataque: 23,
      defensa: 57,
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
      id: 23,
      nombre: "raticate",
      imagen:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png",
      ataque: 92,
      defensa: 41,
    },
    {
      id: 24,
      nombre: "ninetales",
      imagen:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/38.png",
      ataque: 70,
      defensa: 100,
    },
    {
      id: 25,
      nombre: "abra",
      imagen:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/63.png",
      ataque: 64,
      defensa: 36,
    },
    {
      id: 26,
      nombre: "muk",
      imagen:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/89.png",
      ataque: 28,
      defensa: 93,
    },
    {
      id: 27,
      nombre: "onix",
      imagen:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/95.png",
      ataque: 50,
      defensa: 50,
    },
    {
      id: 28,
      nombre: "ponyta",
      imagen:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/77.png",
      ataque: 86,
      defensa: 29,
    },
    {
      id: 29,
      nombre: "horsea",
      imagen:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/116.png",
      ataque: 75,
      defensa: 54,
    },
    {
      id: 30,
      nombre: "zigzagoon",
      imagen:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/263.png",
      ataque: 71,
      defensa: 22,
    },
  ];
  const singlePokemonMock = {
    id: -1,
    nombre: "Mock Pokemon",
    imagen:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/35.png",
    ataque: 90,
    defensa: 68,
  };

  expect(storeData(pokemonsMock)).toBe("stored");
  expect(getData()).toStrictEqual(pokemonsMock);

  expect(Array.isArray(m_getAllPokemons())).toBe(true);
  expect(Array.isArray(m_addNewPokemon(singlePokemonMock))).toBe(true);
  expect(Array.isArray(m_removePokemon(singlePokemonMock.id))).toBe(true);
  expect(
    Array.isArray(m_updatePokemon(singlePokemonMock.id, singlePokemonMock))
  ).toBe(true);
});
