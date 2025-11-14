import { describe, it, expect } from "vitest";
import { add } from "../src/utils/example";

describe("example util tests", () => {
  it("adds numbers correctly", () => {
    expect(add(2, 3)).toBe(5);
  });
});
