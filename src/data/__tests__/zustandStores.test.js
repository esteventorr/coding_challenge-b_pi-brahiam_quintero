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

import { useAppStateStore } from "../zustandStores.js";

test("Zustand Test", () => {
  expect(typeof useAppStateStore === "function").toBe(true);
});
