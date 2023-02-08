import "../styles/components/PokemonRow.css";
import edit from "../images/logos/edit-pur.svg";
import trash from "../images/logos/trash-pur.svg";

import { useAppStateStore, usePokemonsStore } from "../data/zustandStores";
import { removePokemon } from "../data/dataConnector";

function PokemonRow({ pokemon }) {
  const { nombre, imagen, ataque, defensa, id } = pokemon;
  const [
    editBoxShow,
    editBoxMode,
    editBoxClear,
    editBoxLoadPokemon,
    editBoxToggle,
    editBoxModeSwitch,
  ] = useAppStateStore((state) => {
    return [
      state.editBoxShow,
      state.editBoxMode,
      state.editBoxClear,
      state.editBoxLoadPokemon,
      state.editBoxToggle,
      state.editBoxModeSwitch,
    ];
  });
  const getAllPokemons = usePokemonsStore((state) => {
    return state.getAllPokemons;
  });

  async function handleDeletePokemon(event) {
    event.preventDefault();
    await removePokemon(id);
    getAllPokemons();
  }

  async function handleEditPokemon(event) {
    event.preventDefault();
    if (editBoxMode == "new") {
      editBoxModeSwitch();
    }
    editBoxClear();
    editBoxLoadPokemon(pokemon);
    if (!editBoxShow) editBoxToggle();
  }

  const backgroundPokemonImage = {
    backgroundImage: "url(" + imagen + ")",
    backgroundSize: "cover",
  };

  return (
    <tr className="pokemon-row">
      <td className="pokemon-row__td --gray-border">{nombre}</td>
      <td className="pokemon-row__td --gray-border --centered">
        <div
          className="pokemon-row__img"
          style={backgroundPokemonImage}
          alt={nombre}
        ></div>
      </td>
      <td className="pokemon-row__td --gray-border">{ataque}</td>
      <td className="pokemon-row__td --gray-border">{defensa}</td>
      <td className="pokemon-row__td --gray-border --centered">
        <button
          onClick={handleEditPokemon}
          className="pokemon-row__button action_icon --secondary pok-row-edit"
        >
          <img className="pokemon-row__icon icon" src={edit}></img>
        </button>
        <button
          onClick={handleDeletePokemon}
          className="pokemon-row__button action_icon --secondary pok-row-delete"
        >
          <img className="pokemon-row__icon icon" src={trash}></img>
        </button>
      </td>
    </tr>
  );
}

export default PokemonRow;
