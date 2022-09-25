import mutations from "@/store/mutations";
import state from "@/store/state";
import { Job } from "@/api/types";
import { GlobalState } from "@/store/types";

describe("mutations", () => {
  const createState = (config: Partial<GlobalState> = {}): GlobalState => {
    const initialState = state();
    return { ...initialState, ...config };
  };

  describe("LOGIN_USER", () => {
    it("logs the user in", () => {
      const startingState = createState({ isLoggedIn: false });
      mutations.LOGIN_USER(startingState);
      expect(startingState.isLoggedIn).toBe(true);
    });
  });

  const createJob = (config: Partial<Job> = {}): Job => ({
    id: 1,
    title: "Angular Developer",
    organization: "Vue and Me",
    degree: "Master's",
    jobType: "Intern",
    locations: ["Lisbon"],
    minimumQualifications: [],
    preferredQualifications: [],
    description: [],
    dateAdded: "2021-07-04",
    ...config,
  });

  describe("RECEIVE_JOBS", () => {
    it("receives jobs from API response", () => {
      const startingState = createState({ jobs: [] });
      const jobOne = createJob();
      const jobTwo = createJob();
      mutations.RECEIVE_JOBS(startingState, [jobOne, jobTwo]);
      expect(startingState.jobs).toEqual([jobOne, jobTwo]);
    });
  });

  // describe("ADD_SELECTED_ORGANIZATIONS", () => {
  //   it("updates organizations that the user has chosen to filter jobs by", () => {
  //     const state = { selectedOrganizations: [] };
  //
  //     mutations.ADD_SELECTED_ORGANIZATIONS(state, ["Org1", "Org2"]);
  //     expect(state).toEqual({ selectedOrganizations: ["Org1", "Org2"] });
  //   });
  // });
  //
  // describe("ADD_SELECTED_JOB_TYPES", () => {
  //   it("updates job types that the user has chosen to filter jobs by", () => {
  //     const state = { selectedJobTypes: [] };
  //
  //     mutations.ADD_SELECTED_JOB_TYPES(state, ["Full-time", "Part-time"]);
  //     expect(state).toEqual({ selectedJobTypes: ["Full-time", "Part-time"] });
  //   });
  // });
});
