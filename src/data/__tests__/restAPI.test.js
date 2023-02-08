import { mockMode } from "../../utils/utilVars";
import {
  getAllPokemonsArr,
  addNewPokemon,
  removePokemon,
  updatePokemon,
} from "../restAPI";

const testif = (condition) => (condition ? it : it.skip);

testif(!mockMode.enabled)("Initialize Runs", async () => {
  const singlePokemonMock = {
    id: -1,
    nombre: "Mock Pokemon",
    imagen:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/35.png",
    ataque: 90,
    defensa: 68,
  };

  expect(Array.isArray(await getAllPokemonsArr())).toBe(true);
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
});
