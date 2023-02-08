import "../styles/components/Tools.css";
import search from "../images/logos/search.svg";
import plus from "../images/logos/plus-whi.svg";

import { useEffect } from "react";
import { useAppStateStore, usePokemonsStore } from "../data/zustandStores";

function Tools() {
  const [
    editBoxShow,
    editBoxMode,
    editBoxClear,
    editBoxToggle,
    editBoxModeSwitch,
    filterModeEnabled,
    filterModeTarget,
    setFilterModeEnabled,
    setFilterModeTarget,
    setFilterModeMatch,
  ] = useAppStateStore((state) => {
    return [
      state.editBoxShow,
      state.editBoxMode,
      state.editBoxClear,
      state.editBoxToggle,
      state.editBoxModeSwitch,
      state.filterModeEnabled,
      state.filterModeTarget,
      state.setFilterModeEnabled,
      state.setFilterModeTarget,
      state.setFilterModeMatch,
    ];
  });

  const allPokemons = usePokemonsStore((state) => {
    return state.allPokemons;
  });

  function hanldleNewClicked() {
    if (editBoxMode == "edit") {
      editBoxClear();
      editBoxModeSwitch();
      if (editBoxShow == false) editBoxToggle();
    } else {
      if (editBoxShow) editBoxClear();
      editBoxToggle();
    }
  }

  function filterPokemons() {
    if (filterModeEnabled) {
      let pokemonFilter = allPokemons.filter((element) => {
        return (
          element.id == filterModeTarget ||
          element.nombre.includes(filterModeTarget) ||
          element.ataque == filterModeTarget ||
          element.defensa == filterModeTarget
        );
      });
      setFilterModeMatch(pokemonFilter);
    }
  }

  function handleSearchChange(event) {
    event.preventDefault();
    let value = event.target.value;
    if (value != "") {
      setFilterModeEnabled(true);
    } else {
      setFilterModeEnabled(false);
    }
    setFilterModeTarget(value);
  }

  useEffect(() => {
    filterPokemons();
  }, [filterModeTarget]);

  return (
    <div className={"tools"}>
      <div className="tools__inner">
        <img className="tools__icon icon" src={search}></img>
        <input
          className="tools__input-search --gray-border tb-inp"
          type="search"
          placeholder="Buscar"
          name="listado pokemon"
          id=""
          value={filterModeTarget}
          onChange={handleSearchChange}
        />
      </div>
      <button
        className="tools__button-new --primary tb-new-bt"
        onClick={hanldleNewClicked}
      >
        <img className="tools__icon icon" src={plus}></img>Nuevo
      </button>
    </div>
  );
}

export default Tools;
