import { mockMode } from "../../utils/utilVars";
import {
  getAllPokemonsArr,
  addNewPokemon,
  removePokemon,
  updatePokemon,
} from "../restAPI";

const testif = (condition) => (condition ? it : it.skip);

testif(!mockMode.enabled)("Test Rest API", async () => {
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
  console.log("Pokemon Created", postResult);
  if (postResult) {
    singlePokemonMock.id = postResult.id;
  }

  const singPoke = await updatePokemon(singlePokemonMock.id, singlePokemonMock);
  console.log("Pokemon Updated", singPoke);
  expect(typeof singPoke == "object").toBe(true);

  const removeResult = await removePokemon(singlePokemonMock.id);
  console.log("Pokemon Removed");
  expect(typeof removeResult === "string").toBe(true);
});
