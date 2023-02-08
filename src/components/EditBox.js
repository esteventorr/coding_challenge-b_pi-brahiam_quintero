import "../styles/components/EditBox.css";
import save from "../images/logos/save-whi.svg";
import x from "../images/logos/x-whi.svg";
import { useAppStateStore, usePokemonsStore } from "../data/zustandStores";
import { addNewPokemon, updatePokemon } from "../data/dataConnector";

function EditBox() {
  const getAllPokemons = usePokemonsStore((state) => {
    return state.getAllPokemons;
  });

  const [
    editBoxShow,
    editBoxMode,
    editBoxValues,
    editBoxClear,
    editBoxLoadValuesUpdate,
    editBoxToggle,
  ] = useAppStateStore((state) => {
    return [
      state.editBoxShow,
      state.editBoxMode,
      state.editBoxValues,
      state.editBoxClear,
      state.editBoxLoadValuesUpdate,
      state.editBoxToggle,
    ];
  });

  const handlePokemonCreationFieldChange = (event) => {
    event.preventDefault();
    var value = event.target.value;
    var name = event.target.name;
    editBoxLoadValuesUpdate({ [name]: value });
  };

  const handlePokemonCreationSave = async (event) => {
    event.preventDefault();
    if (editBoxMode == "new") {
      await addNewPokemon(editBoxValues);
    } else {
      await updatePokemon(editBoxValues.id, {
        nombre: editBoxValues.nombre,
        imagen: editBoxValues.imagen,
        ataque: editBoxValues.ataque,
        defensa: editBoxValues.defensa,
      });
    }
    editBoxClear();
    editBoxToggle();
    getAllPokemons();
  };

  const handlePokemonCreationCancel = (event) => {
    event.preventDefault();
    editBoxClear();
    if (editBoxMode == "edit") editBoxToggle();
  };

  return editBoxShow ? (
    <div className="edit-box --wrapper --gray-border">
        <h4 className="edit-box__title">
          {editBoxMode == "new" ? "Nuevo Pokemon" : "Editar Pokemon"}
        </h4>
        <form className="edit-box__form" onSubmit={handlePokemonCreationSave}>
          <div className="edit-box__wrapper">
            <div className="edit-box__inner">
              <div className="edit-box__field">
                <label className="edit-box__label" htmlFor="n_pokemon_name">
                  Nombre:
                </label>
                <input
                  className="edit-box__input edit-box__input--text"
                  type="text"
                  name="nombre"
                  id="n_pokemon_name"
                  placeholder="Nombre Pokemon"
                  onChange={handlePokemonCreationFieldChange}
                  value={editBoxValues.nombre}
                  required
                />
              </div>
              <div className="edit-box__field">
                <label className="edit-box__label" htmlFor="n_pokemon_img">
                  Imagen:
                </label>
                <input
                  className="edit-box__input edit-box__input--text eb-input"
                  name="imagen"
                  type="text"
                  id="n_pokemon_img"
                  placeholder="Imagen URL"
                  onChange={handlePokemonCreationFieldChange}
                  value={editBoxValues.imagen}
                  required
                />
              </div>
            </div>
            <div className="edit-box__inner">
              <div className="edit-box__field">
                <label className="edit-box__label">Ataque:</label>
                <div className="edit-box__range">
                  0
                  <input
                    className="edit-box__input --grow --accent-primary eb-input"
                    type="range"
                    min="0"
                    max="100"
                    step={1}
                    name="ataque"
                    id=""
                    onChange={handlePokemonCreationFieldChange}
                    value={editBoxValues.ataque}
                  />
                  100
                </div>
              </div>
              <div className="edit-box__field">
                <label className="edit-box__label">Defensa:</label>
                <div className="edit-box__range">
                  0
                  <input
                    className="edit-box__input --grow --accent-primary eb-input"
                    type="range"
                    min="0"
                    max="100"
                    step={1}
                    name="defensa"
                    id=""
                    onChange={handlePokemonCreationFieldChange}
                    value={editBoxValues.defensa}
                  />
                  100
                </div>
              </div>
            </div>
          </div>
          <div className="edit-box__actions --full-width">
            <button type="submit" className="edit-box__button --primary">
              <img className="edit-box__icon icon" src={save}></img>
              {editBoxMode == "new" ? "Guardar" : "Actualizar"}
            </button>
            <button
              type="button"
              onClick={handlePokemonCreationCancel}
              className="edit-box__button --primary"
            >
              <img className="edit-box__icon icon" src={x}></img>
              {editBoxMode == "new" ? "Limpiar" : "Cerrar"}
            </button>
          </div>
        </form>
    </div>
  ) : (
    <></>
  );
}

export default EditBox;
