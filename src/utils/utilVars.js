export const endpointURL =
  "https://tribu-ti-staffing-desarrollo-afangwbmcrhucqfh.z01.azurefd.net/pkm-msa-evaluation/pokemon"; //"http://192.168.1.15:4503";

class MockStatus {
  constructor() {
    // Change to False in order to get data from the Server
    this.enabled = false;
  }
  set setMockMode(mode) {
    this.enabled = mode;
  }
}

export let mockMode = new MockStatus();
