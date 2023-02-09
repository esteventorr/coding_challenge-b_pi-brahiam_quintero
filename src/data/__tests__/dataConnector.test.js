import { mockMode } from "../../utils/utilVars.js";
import {
  getAllPokemons,
  addNewPokemon,
  removePokemon,
  updatePokemon,
  initMock,
} from "../dataConnector.js";

test("Test Data Connector", async () => {
  const singlePokemonMock = {
    name: "-Mock Pokemon-",
    image: "https://esteventorr.github.io/images/graphical/no-image.png",
    attack: 0,
    defense: 0,
    hp: 0,
    type: "---",
    idAuthor: 1,
  };

  mockMode.setMockMode = false;

  const allPokemonsGotten = await getAllPokemons();
  expect(Array.isArray(allPokemonsGotten)).toBe(true);
  const postResult = await addNewPokemon(singlePokemonMock);
  expect(typeof postResult === "undefined").toBe(true);
  if (postResult) {
    singlePokemonMock.id = postResult.insertId;
  }
  expect(
    typeof (await updatePokemon(singlePokemonMock.id, singlePokemonMock)) ==
      "undefined"
  ).toBe(true);

  expect(
    typeof (await removePokemon(singlePokemonMock.id)) === "undefined"
  ).toBe(true);

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
