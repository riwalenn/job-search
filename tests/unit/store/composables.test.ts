import { useStore } from "vuex";
jest.mock("vuex");

import {
  useFetchJobsDispatch,
  useFilteredJobs,
  useUniqueDegrees,
  useUniqueJobTypes,
  useUniqueOrganizations,
} from "@/store/composables";

const useStoreMock = useStore as jest.Mock;

describe("composables", () => {
  describe("useFilteredJobs", () => {
    it("retrieves filtered jobs from store", function () {
      useStoreMock.mockReturnValue({
        getters: {
          FILTERED_JOBS: [{ id: 1 }],
        },
      });

      const result = useFilteredJobs();

      expect(result.value).toEqual([{ id: 1 }]);
    });
  });

  describe("useUniqueJobTypes", () => {
    it("retrieves unique job types from store", function () {
      useStoreMock.mockReturnValue({
        getters: {
          UNIQUE_JOB_TYPES: new Set(["Full-time"]),
        },
      });
      const result = useUniqueJobTypes();

      expect(result.value).toEqual(new Set(["Full-time"]));
    });
  });

  describe("useUniqueOrganizations", () => {
    it("retrieves unique job organizations from store", function () {
      useStoreMock.mockReturnValue({
        getters: {
          UNIQUE_ORGANIZATIONS: new Set(["Apple"]),
        },
      });
      const result = useUniqueOrganizations();

      expect(result.value).toEqual(new Set(["Apple"]));
    });
  });

  describe("useUniqueDegrees", () => {
    it("retrieves unique degrees from store", function () {
      useStoreMock.mockReturnValue({
        getters: {
          UNIQUE_DEGREES: ["Ph.D"],
        },
      });
      const result = useUniqueDegrees();

      expect(result.value).toEqual(["Ph.D"]);
    });
  });

  describe("useFetchJobsDispatch", () => {
    it("sends call to fetch jobs from API", function () {
      const dispatch = jest.fn();
      useStoreMock.mockReturnValue({
        dispatch,
      });

      useFetchJobsDispatch();
      expect(dispatch).toHaveBeenCalledWith("FETCH_JOBS");
    });
  });
});
