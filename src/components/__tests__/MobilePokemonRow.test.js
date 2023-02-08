import { fireEvent, render } from "@testing-library/react";
import MobilePokemonRow from "../default/MobilePokemonRow";

it("changes the class when hovered", () => {
  const singlePokemonMock = {
    id: -1,
    nombre: "Mock Pokemon",
    imagen:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/35.png",
    ataque: 90,
    defensa: 68,
  };
  const { container } = render(
    <MobilePokemonRow pokemon={singlePokemonMock} />
  );
  const pokemonRow = container.getElementsByClassName("mob-pokemon-row");
  expect(pokemonRow).toBeTruthy();

  const buttonEdit = container.querySelector(".pok-row-edit");
  const buttonDelete = container.querySelector(".pok-row-delete");
  fireEvent.click(buttonEdit);
  fireEvent.click(buttonDelete);
});
