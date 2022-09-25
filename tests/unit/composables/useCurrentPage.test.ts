import { useRoute } from "vue-router";
jest.mock("vue-router");

import useCurrentPage from "@/composables/useCurrentPage";

const userouteMock = useRoute as jest.Mock;

describe("useCurrentPage", () => {
  describe("when query params include page", () => {
    it("return page", function () {
      userouteMock.mockReturnValue({ query: { page: "5" } });
      const result = useCurrentPage();
      expect(result.value).toBe(5);
    });
  });

  describe("when query params exclude page", () => {
    it("defaults to page 1", function () {
      userouteMock.mockReturnValue({ query: {} });
      const result = useCurrentPage();
      expect(result.value).toBe(1);
    });
  });
});
