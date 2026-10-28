import { hunterData } from "./hunterData";

export const calculateTotalCoolTime = (coolTimes: readonly number[]) => {
  if (coolTimes.length === 1) {
    return coolTimes[0];
  }

  if (coolTimes.length === 2) {
    return coolTimes[0] + coolTimes[1];
  }

  throw new Error("Cool time must contain one or two values.");
};

export const getHunterTotalCoolTimes = (hunterId: number) => {
  const { primary, secondary, tertiary } = hunterData[hunterId].skills;

  const primaryTotalCoolTime = calculateTotalCoolTime(primary.coolTime);
  const secondaryTotalCoolTime = secondary
    ? calculateTotalCoolTime(secondary.coolTime)
    : 0;

  const tertiaryTotalCoolTime = tertiary
    ? calculateTotalCoolTime(tertiary.coolTime)
    : 0;

  return {
    primary: primaryTotalCoolTime,
    secondary: secondaryTotalCoolTime,
    tertiary: tertiaryTotalCoolTime,
  };
};
