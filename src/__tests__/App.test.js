import { act, render } from "@testing-library/react";
import App from "../App";

it("There is 1 Header Rendered with a Title, Search and a Button", () => {
  const { container } = render(<App />);
  const header = container.getElementsByClassName("app__header");
  expect(header.length).toBe(1);
  const tools = document.querySelector(".app__header .tools");
  expect(tools).toBeTruthy();
});
