import { describe, expect, it } from "vitest";
import { calculateTotalCoolTime } from "./coolTime";

describe("calculateTotalCoolTime", () => {
  it("returns the value when there is one cooldown", () => {
    expect(calculateTotalCoolTime({ firstStageSeconds: 75 })).toBe(75);
  });

  it("adds the values when there are two cooldowns", () => {
    expect(
      calculateTotalCoolTime({ firstStageSeconds: 13, secondStageSeconds: 15 }),
    ).toBe(28);
  });
});
