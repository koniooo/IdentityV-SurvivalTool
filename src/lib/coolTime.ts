import { hunterData, type CoolTime } from "./hunterData";

export const calculateTotalCoolTime = ({
  firstStageSeconds,
  secondStageSeconds = 0,
}: CoolTime) => firstStageSeconds + secondStageSeconds;

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
