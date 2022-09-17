import { state, mutations, actions } from "@/store";
import getJobs from "@/api/getJobs";
jest.mock("@/api/getJobs");

describe("state", function () {
  it("keeps track of whether user is logged in", function () {
    const startingState = state();

    expect(startingState.isLoggedIn).toBe(false);
  });

  it("stores job listings", function () {
    const startingState = state();

    expect(startingState.jobs).toEqual([]);
  });
});

describe("mutations", function () {
  describe("LOGIN_USER", () => {
    it("logs the user in", function () {
      const state = { isLoggedIn: false };

      mutations.LOGIN_USER(state);
      expect(state).toEqual({ isLoggedIn: true });
    });
  });

  describe("RECEIVE_JOBS", () => {
    it("receives jobs from API response", function () {
      const state = { jobs: [] };
      mutations.RECEIVE_JOBS(state, ["Job 1", "Job 2"]);

      expect(state).toEqual({ jobs: ["Job 1", "Job 2"] });
    });
  });
});

describe("actions", () => {
  describe("FETCH_JOBS", () => {
    beforeEach(() => {
      getJobs.mockResolvedValue([
        {
          id: 1,
          title: "Software Developer",
        },
      ]);
    });

    it("makes request to fetch jobs", async function () {
      const context = { commit: jest.fn() };

      await actions.FETCH_JOBS(context);
      expect(getJobs).toHaveBeenCalled();
    });

    it("sends message to save received jobs in store", async function () {
      const commit = jest.fn();
      const context = { commit };

      await actions.FETCH_JOBS(context);
      expect(commit).toHaveBeenCalledWith("RECEIVE_JOBS", [
        {
          id: 1,
          title: "Software Developer",
        },
      ]);
    });
  });
});
