import { state, mutations } from "@/store";

describe("state", function () {
  it("keeps track of whether user is logged in", function () {
    const startingState = state();

    expect(startingState.isLoggedIn).toBe(false);
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
});
