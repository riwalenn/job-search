import axios from "axios";

jest.mock("axios");

import getJobs from "@/api/getJobs";

describe("getJobs", () => {
  beforeEach(() => {
    axios.get.mockResolvedValue({
      data: {
        id: 1,
        title: "Java Engineer",
      },
    });
  });

  it("fetches jobs that candidates can apply to", async function () {
    await getJobs();

    expect(axios.get).toHaveBeenCalledWith("http://myfakeapi.com/jobs");
  });

  it("extracts jobs from response", async function () {
    const data = await getJobs();

    expect(data).toEqual({
      id: 1,
      title: "Java Engineer",
    });
  });
});
