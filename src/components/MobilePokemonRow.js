import "../styles/components/MobilePokemonRow.css";
import edit from "../images/logos/edit-pur.svg";
import trash from "../images/logos/trash-pur.svg";

import { useAppStateStore, usePokemonsStore } from "../data/zustandStores";
import { removePokemon } from "../data/dataConnector";

function MobilePokemonRow({ pokemon }) {
  const { id, nombre, imagen, ataque, defensa } = pokemon;
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

  const styleForeground = {
    backgroundImage: "url(" + imagen + ")",
  };

  async function handleDeletePokemon(event) {
    event.preventDefault();
    await removePokemon(id);
    getAllPokemons();
  }

  async function handleEditPokemon(event) {
    event.preventDefault();
    editBoxClear();
    if (editBoxMode === "new") {
      editBoxModeSwitch();
    }
    editBoxLoadPokemon(pokemon);
    if (!editBoxShow) editBoxToggle();
  }

  return (
    <tr className="mob-pokemon-row">
      <td className="mob-pokemon-row__td mob-pokemon-row__pokemon-view">
        <div className="mob-pokemon-row__wrapper">
          <div className="mob-pokemon-row__foreground"></div>
          <div
            className="mob-pokemon-row__imagen"
            style={styleForeground}
            alt={nombre}
          ></div>
          <div className="mob-pokemon-row__nombre">
            <h4 className="mob-pokemon-row__text--styled">{nombre}</h4>
          </div>
        </div>
      </td>
      <td className="mob-pokemon-row__td">
        <div className="mob-pokemon-row__pokemon-details-and-actions">
          <div className="mob-pokemon-row__pokemon-actions mob-pokemon-row__inner --wrapper">
            <div className="mob-pokemon-row__inner">
              <h3>Acciones</h3>
            </div>
            <div className="mob-pokemon-row__inner">
              <button
                onClick={handleEditPokemon}
                className="mob-pokemon-row__button --secondary pok-row-edit"
              >
                <img alt="Edit Icon" className="mob-pokemon-row__icon icon" src={edit}></img>
              </button>
              <button
                onClick={handleDeletePokemon}
                className="mob-pokemon-row__button --secondary pok-row-delete"
              >
                <img alt="Delete Icon" className="mob-pokemon-row__icon icon" src={trash}></img>
              </button>
            </div>
          </div>
          <div className="mob-pokemon-row__pokemon-details mob-pokemon-row__inner --wrapper --transparent">
            <div className="mob-pokemon-row__inner --wrapper">
              <div>
                <h3 className="mob-pokemon-row__text--styled">ATK</h3>
              </div>
              <h1>{ataque}</h1>
            </div>
            <div className="mob-pokemon-row__inner --wrapper">
              <div>
                <h3 className="mob-pokemon-row__text--styled">DEF</h3>
              </div>
              <h1>{defensa}</h1>
            </div>
          </div>
        </div>
      </td>
    </tr>
  );
}

export default MobilePokemonRow;
