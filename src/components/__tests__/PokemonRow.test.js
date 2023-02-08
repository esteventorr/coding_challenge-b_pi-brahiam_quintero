import { fireEvent, render } from "@testing-library/react";
import PokemonRow from "../PokemonRow";

it("changes the class when hovered", () => {
  const singlePokemonMock = {
    id: -1,
    nombre: "Mock Pokemon",
    imagen:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/35.png",
    ataque: 90,
    defensa: 68,
  };
  const { container } = render(<PokemonRow pokemon={singlePokemonMock} />);
  const pokemonRow = container.getElementsByClassName("pokemon-row");
  expect(pokemonRow).toBeTruthy();

  const buttonEdit = container.querySelector(".pok-row-edit");
  const buttonDelete = container.querySelector(".pok-row-delete");
  console.log(buttonEdit);
  fireEvent.click(buttonEdit);
  fireEvent.click(buttonDelete);
});
