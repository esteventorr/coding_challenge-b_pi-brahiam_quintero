import {
  getAllPokemonsArr as getAllPokemonsAPI,
  addNewPokemon as addNewPokemonAPI,
  removePokemon as removePokemonAPI,
  updatePokemon as updatePokemonAPI,
} from "./restAPI";

import {
  m_initialize,
  m_getAllPokemons,
  m_addNewPokemon,
  m_removePokemon,
  m_updatePokemon,
} from "./m_restAPI";
import { mockMode } from "../utils/utilVars";

async function getAllPokemons() {
  if (mockMode.enabled) {
    return m_getAllPokemons();
  } else {
    return await getAllPokemonsAPI();
  }
}

async function addNewPokemon(pokemon) {
  if (mockMode.enabled) {
    return m_addNewPokemon(pokemon);
  } else {
    return await addNewPokemonAPI(pokemon);
  }
}

async function removePokemon(id) {
  if (mockMode.enabled) {
    return m_removePokemon(id);
  } else {
    return await removePokemonAPI(id);
  }
}

async function updatePokemon(id, pokemon, callbackFn) {
  if (mockMode.enabled) {
    return m_updatePokemon(id, pokemon);
  } else {
    return await updatePokemonAPI(id, pokemon, callbackFn);
  }
}

/* async function getPokemon(id, callbackFn) {
  if (window.mock) {
    return [];
  } else {
    return await getSinglePokemon(id, callbackFn);
  }
} */

function initMock() {
  return m_initialize();
}

export {
  getAllPokemons,
  addNewPokemon,
  removePokemon,
  updatePokemon,
  initMock,
};
