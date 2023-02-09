import "../styles/components/List.css";
import { useEffect } from "react";
import PokemonRow from "./PokemonRow";
import MobilePokemonRow from "./MobilePokemonRow";
import { useMediaQuery } from "react-responsive";
import { useAppStateStore, usePokemonsStore } from "../data/zustandStores";

function List() {
  const [allPokemons, getAllPokemons] = usePokemonsStore((state) => {
    return [state.allPokemons, state.getAllPokemons];
  });

  const [filterModeEnabled, filterModeMatch] = useAppStateStore((state) => {
    return [state.filterModeEnabled, state.filterModeMatch];
  });

  const isMobile = useMediaQuery({ query: `(max-width: 720px)` }); //760

  let pokemonsToRender = filterModeEnabled ? filterModeMatch : allPokemons;

  useEffect(() => {
    if (allPokemons.length === 0) {
      getAllPokemons();
    }
    pokemonsToRender = filterModeEnabled ? filterModeMatch : allPokemons;
  }, [filterModeMatch]);

  return (
    <div className="list --wrapper">
      <table className="list__table">
        {!isMobile ? (
          <thead>
            <tr>
              <th className="list__th --gray-border">Nombre</th>
              <th className="list__th --gray-border">Imagen</th>
              <th className="list__th --gray-border">Ataque</th>
              <th className="list__th --gray-border">Defensa</th>
              <th className="list__th --gray-border">Acciones</th>
            </tr>
          </thead>
        ) : null}
        <tbody>
          {pokemonsToRender === undefined ||
          pokemonsToRender === null ||
          pokemonsToRender.length === 0 ? (
            <tr>
              <td colSpan="5" className="--centered">
                No se han encontrado pokemones 🤖
              </td>
            </tr>
          ) : (
            pokemonsToRender.map((pokemon) =>
              isMobile ? (
                <MobilePokemonRow key={pokemon.id} pokemon={pokemon} />
              ) : (
                <PokemonRow key={pokemon.id} pokemon={pokemon} />
              )
            )
          )}
        </tbody>
      </table>
    </div>
  );
}

export default List;
