import getters from "@/store/getters";

describe("getters", () => {
  describe("UNIQUE_ORGANIZATIONS", () => {
    it("finds unique organizations from list of jobs", () => {
      const state = {
        jobs: [
          { organization: "Google" },
          { organization: "Amazon" },
          { organization: "Google" },
        ],
      };
      const result = getters.UNIQUE_ORGANIZATIONS(state);

      expect(result).toEqual(new Set(["Google", "Amazon"]));
    });
  });

  describe("UNIQUE_JOB_TYPES", () => {
    it("finds unique job types from list of jobs", () => {
      const state = {
        jobs: [
          { jobType: "Full-time" },
          { jobType: "Temporary" },
          { jobType: "Full-time" },
        ],
      };
      const result = getters.UNIQUE_JOB_TYPES(state);

      expect(result).toEqual(new Set(["Full-time", "Temporary"]));
    });
  });

  describe("INCLUDE_JOB_BY_ORGANIZATION", () => {
    describe("when the user has not selected any organizations", () => {
      it("includes job", function () {
        const state = { selectedOrganizations: [] };
        const job = { organization: "Google" };
        const includeJob = getters.INCLUDE_JOB_BY_ORGANIZATION(state)(job);

        expect(includeJob).toBe(true);
      });

      it("identifies if job is associated with given organizations", function () {
        const state = { selectedOrganizations: ["Google", "Microsoft"] };
        const job = { organization: "Google" };
        const includeJob = getters.INCLUDE_JOB_BY_ORGANIZATION(state)(job);

        expect(includeJob).toBe(true);
      });
    });
  });

  describe("INCLUDE_JOB_BY_JOB_TYPE", () => {
    describe("when the user has not selected any job types", () => {
      it("includes job", function () {
        const state = { selectedJobTypes: [] };
        const job = { jobType: "Full-time" };
        const includeJob = getters.INCLUDE_JOB_BY_JOB_TYPE(state)(job);

        expect(includeJob).toBe(true);
      });

      it("identifies if job is associated with given job types", function () {
        const state = { selectedJobTypes: ["Full-time", "Part-time"] };
        const job = { jobType: "Part-time" };
        const includeJob = getters.INCLUDE_JOB_BY_JOB_TYPE(state)(job);

        expect(includeJob).toBe(true);
      });
    });
  });
});
