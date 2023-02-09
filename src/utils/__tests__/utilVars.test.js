import { cleanup, fireEvent, render } from "@testing-library/react";
import { endpointURL } from "../utilVars";

it("is Endpoint Unchanged", () => {
  expect(endpointURL).toBe(
    "https://tribu-ti-staffing-desarrollo-afangwbmcrhucqfh.z01.azurefd.net/pkm-msa-evaluation/pokemon"
  );
});
