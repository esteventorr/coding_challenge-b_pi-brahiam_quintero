import axios from "axios";
import { endpointURL } from "../utils/utilVars";

const defaultPokemon = {
  name: "---",
  image: "https://esteventorr.github.io/images/graphical/no-image.png",
  attack: 0,
  defense: 0,
  hp: 0,
  type: "---",
  idAuthor: 1,
};

const getAllPokemonsArr = async () => {
  const allPokemon = await axios
    .get(`${endpointURL}/?idAuthor=1`)
    .then((response) => {
      let data = response.data;
      console.log(data);
      return data.map((element) => {
        return {
          id: element.id,
          nombre: element.name,
          imagen: element.image,
          ataque: element.attack,
          defensa: element.defense,
        };
      });
    });
  return allPokemon;
};

const updatePokemon = async (id, pokemon) => {
  let mappingPokemon = {
    id: id,
    name: pokemon.nombre,
    image: pokemon.imagen,
    attack: pokemon.ataque,
    defense: pokemon.defensa,
  };

  const pokemonUpdated = await axios
    .put(`${endpointURL}/${id}`, {
      ...mappingPokemon,
      idAuthor: defaultPokemon.idAuthor,
    })
    .then((response) => response.data);
  return pokemonUpdated;
};

const addNewPokemon = async (newPokemon) => {
  let mappingPokemon = {
    name: newPokemon.nombre,
    image: newPokemon.imagen,
    attack: newPokemon.ataque,
    defense: newPokemon.defensa,
  };

  const newPokemonPost = await axios
    .post(`${endpointURL}/`, {
      ...defaultPokemon,
      ...mappingPokemon,
    })
    .then((response) => response.data);
  return newPokemonPost;
};

const removePokemon = async (id) => {
  const pokemonDeletion = await axios
    .delete(`${endpointURL}/${id}`)
    .then((response) => response.data);
  return pokemonDeletion;
};

export { getAllPokemonsArr, addNewPokemon, removePokemon, updatePokemon };
