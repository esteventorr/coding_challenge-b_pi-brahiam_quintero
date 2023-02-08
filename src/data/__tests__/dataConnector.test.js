import { mockMode } from "../../utils/utilVars.js";
import {
  getAllPokemons,
  addNewPokemon,
  removePokemon,
  updatePokemon,
  initMock,
} from "../dataConnector.js";

test("Initialize Runs", async () => {
  const singlePokemonMock = {
    id: -1,
    nombre: "Mock Pokemon",
    imagen:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/35.png",
    ataque: 90,
    defensa: 68,
  };

  mockMode.setMockMode = false;

  const allPokemonsGotten = await getAllPokemons();
  expect(Array.isArray(allPokemonsGotten)).toBe(true);
  const postResult = await addNewPokemon(singlePokemonMock);
  expect(typeof postResult === "object").toBe(true);
  if (postResult) {
    singlePokemonMock.id = postResult.insertId;
  }
  expect(
    typeof (await updatePokemon(singlePokemonMock.id, singlePokemonMock)) ==
      "string"
  ).toBe(true);

  expect(typeof (await removePokemon(singlePokemonMock.id)) === "string").toBe(
    true
  );

  mockMode.setMockMode = true;

  initMock();

  const allPokemonsGotten2 = await getAllPokemons();
  expect(Array.isArray(allPokemonsGotten2)).toBe(true);
  const postResult2 = await addNewPokemon(singlePokemonMock);
  expect(typeof postResult2 === "object").toBe(true);
  if (postResult2) {
    singlePokemonMock.id = postResult2.insertId;
  }
  expect(
    typeof (await updatePokemon(singlePokemonMock.id, singlePokemonMock)) ==
      "string"
  ).toBe(false);

  expect(typeof (await removePokemon(singlePokemonMock.id)) === "string").toBe(
    false
  );
});
