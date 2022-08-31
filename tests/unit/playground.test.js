import { evenOrOdd } from "@/playground";

describe("basic math", () => {
    it("adds two numbers", () => {
        expect(1 + 1).toBe(2);
    });

    it("subtracts two numbers", () => {
        expect(5-3).toBe(2);
    });
    
    describe("evenOrOdd", () => {
       describe("when the number is even", () => {
           it("indicates the number is even", () => {
               expect(evenOrOdd(4)).toBe("Even");
           });
       });

        describe("when the number is Odd", () => {
            it("indicates the number is Odd", () => {
                expect(evenOrOdd(3)).toBe("Odd");
            });
        });
    });
});