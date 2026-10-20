import { describe, expect, it } from "vitest";
import { calculateTotalCoolTime } from "./coolTime";

describe("calculateTotalCoolTime", () => {
  it("returns the value when there is one cooldown", () => {
    expect(calculateTotalCoolTime([75])).toBe(75);
  });

  it("adds the values when there are two cooldowns", () => {
    expect(calculateTotalCoolTime([13, 15])).toBe(28);
  });

  it("throws an error when there are no cooldowns", () => {
    expect(() => calculateTotalCoolTime([])).toThrow(
      "Cool time must contain one or two values."
    );
  });

  it("throws an error when there are more than two cooldowns", () => {
    expect(() => calculateTotalCoolTime([10, 20, 30])).toThrow(
      "Cool time must contain one or two values."
    );
  });
});