import { fireEvent, render } from "@testing-library/react";
import EditBox from "../EditBox";

it("changes the class when hovered", () => {
  const { container } = render(<EditBox />);
  const editBox = container.getElementsByClassName("edit-box");
  expect(editBox.length).toBe(1);
  const tools = document.querySelector(".edit-box .edit-box__title");
  expect(tools).toBeTruthy();
  const form = document.querySelector(".edit-box .edit-box__form");
  expect(form).toBeTruthy();

  const inputEdit = container.querySelector(".eb-input");
  const submitForm = container.querySelector(".edit-box__form");
  fireEvent.change(inputEdit, { target: { value: "new" } });
  fireEvent.submit(submitForm);
});
