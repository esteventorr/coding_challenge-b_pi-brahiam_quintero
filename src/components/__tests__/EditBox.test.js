import { fireEvent, render } from "@testing-library/react";
import EditBox from "../EditBox";

it("Test Edit Box Component", () => {
  const { container } = render(<EditBox />);
  const editBox = container.getElementsByClassName("edit-box");
  expect(editBox.length).toBe(1);
  const tools = document.querySelector(".edit-box .edit-box__title");
  expect(tools).toBeTruthy();
  const form = document.querySelector(".edit-box .edit-box__form");
  expect(form).toBeTruthy();

  const mockCallBack = jest.fn();
  const inputEdit = container.querySelector(".eb-input");
  inputEdit.addEventListener("change", mockCallBack);
  fireEvent.click(inputEdit);
  fireEvent.change(inputEdit, { target: { value: "new" } });
  expect(mockCallBack.mock.calls.length).toEqual(1);

  const submitForm = container.querySelector(".edit-box__form");
  submitForm.addEventListener("submit", mockCallBack);
  fireEvent.submit(submitForm);
  expect(mockCallBack.mock.calls.length).toEqual(2);

  const buttonCancel = container.querySelector(".edit-box__button--cancel");
  buttonCancel.addEventListener("click", mockCallBack);
  fireEvent.click(buttonCancel);
  expect(mockCallBack.mock.calls.length).toEqual(3);
});
