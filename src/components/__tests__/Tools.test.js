import { fireEvent, render } from "@testing-library/react";
import Tools from "../Tools";

it("Test Tools Component", () => {
  const { container } = render(<Tools />);
  const toolsContainer = container.getElementsByClassName("tools");
  expect(toolsContainer.length).toBe(1);
  const toolsSearch = document.querySelector(".tools .tools__inner");
  expect(toolsSearch).toBeTruthy();

  const mockCallBack = jest.fn();

  const buttonNew = container.querySelector(".tools__button-new");
  buttonNew.addEventListener("click", mockCallBack);
  fireEvent.click(buttonNew);
  expect(mockCallBack.mock.calls.length).toEqual(1);

  const inputField = container.querySelector(".tools__input-search");
  inputField.addEventListener("change", mockCallBack);
  fireEvent.click(inputField);
  fireEvent.change(inputField, { target: { value: "new" } });
  expect(mockCallBack.mock.calls.length).toEqual(2);
});
