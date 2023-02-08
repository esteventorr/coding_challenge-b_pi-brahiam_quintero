import { fireEvent, render } from "@testing-library/react";
import Tools from "../Tools";

it("changes the class when hovered", () => {
  const { container } = render(<Tools />);
  const toolsContainer = container.getElementsByClassName("tools");
  expect(toolsContainer.length).toBe(1);
  const toolsSearch = document.querySelector(".tools .tools__inner");
  expect(toolsSearch).toBeTruthy();
  const toolsButton = document.querySelector(".tools .tools__button");
  expect(toolsButton).toBeTruthy();

  const buttonNew = container.querySelector(".tb-new-bt");
  const inputField = container.querySelector(".tb-inp");
  fireEvent.click(buttonNew);
  fireEvent.change(inputField, { target: { value: "new" } });
});
