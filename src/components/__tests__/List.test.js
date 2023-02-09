import { render } from "@testing-library/react";
import List from "../List";

it("Test List Component", () => {
  const { container } = render(<List />);
  const list = container.getElementsByClassName("list");
  expect(list.length).toBe(1);
  const table = document.querySelector(".list .list__table");
  expect(table).toBeTruthy();
});
