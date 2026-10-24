export const calculateTotalCoolTime = (coolTimes: readonly number[]) => {
  if (coolTimes.length === 1) {
    return coolTimes[0];
  }

  if (coolTimes.length === 2) {
    return coolTimes[0] + coolTimes[1];
  }

  throw new Error("Cool time must contain one or two values.");
};
