import { act, render } from "@testing-library/react";
import App from "../App";

it("There is 1 Header Rendered with a Title, Search and a Button", () => {
  const { container } = render(<App />);
  const header = container.getElementsByClassName("header");
  expect(header.length).toBe(1);
  const tools = document.querySelector(".header .tools");
  expect(tools).toBeTruthy();
  const search = document.querySelector(".header .tools__inner");
  expect(search).toBeTruthy();
  const button = document.querySelector(".header .tools__button");
  expect(button).toBeTruthy();
});
