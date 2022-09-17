import { state, mutations } from "@/store";

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
