import { useEffect, useState } from "react";

export type Timer = ReturnType<typeof useTimer>;

export const useTimer = (initialCoolTime: number) => {
  const [coolTime, setCoolTime] = useState(initialCoolTime);
  const [time, setTime] = useState(initialCoolTime);
  const [isActive, setIsActive] = useState(false);
  const [restartKey, setRestartKey] = useState(0);

  const toggle = () => {
    if (isActive) {
      setTime(coolTime);
      setIsActive(false);
    } else {
      setIsActive(true);
    }
  };

  const startFrom = (seconds: number) => {
    setTime(seconds);
    setRestartKey((k) => k + 1);
    setIsActive(true);
  };

  const reset = (newCoolTime: number) => {
    setCoolTime(newCoolTime);
    setTime(newCoolTime);
    setIsActive(false);
  };

  const setRemainingTime = (seconds: number) => {
    setTime(seconds);
  };

  useEffect(() => {
    if (!isActive) return;
    const id = setInterval(() => {
      setTime((t) => t - 1);
    }, 1000);
    return () => clearInterval(id);
  }, [isActive, restartKey]);

  useEffect(() => {
    if (time !== 0) return;
    setIsActive(false);
    setTime(coolTime);
  }, [time, coolTime]);

  return { time, isActive, toggle, startFrom, reset, setRemainingTime };
};
