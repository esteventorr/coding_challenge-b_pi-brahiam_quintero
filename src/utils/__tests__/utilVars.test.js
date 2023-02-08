import { cleanup, fireEvent, render } from "@testing-library/react";
import { endpointURL } from "../utilVars";

it("is Endpoint Unchanged", () => {
  expect(endpointURL).toBe("http://192.168.1.15:4503");
});
