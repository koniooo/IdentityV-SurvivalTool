import { useEffect, useState, useRef } from "react";

type Props = {
  coolTime: number;
  time: number;
  setTime: React.Dispatch<React.SetStateAction<number>>;
  isTimerActive: boolean;
  setIsTimerActive: React.Dispatch<React.SetStateAction<boolean>>;
};

export const useTimer = ({
  coolTime,
  time,
  setTime,
  isTimerActive,
  setIsTimerActive,
}: Props) => {
  const [restartKey, setRestartKey] = useState(0);
  const timerId = useRef(0);

  useEffect(() => {
    if (isTimerActive) {
      const id = setInterval(() => {
        setTime((t) => t - 1);
      }, 1000);
      timerId.current = Number(id);
    } else {
      clearInterval(timerId.current);
      setTime(coolTime);
    }
    return () => {
      clearInterval(timerId.current);
    };
  }, [isTimerActive, coolTime, setTime, restartKey]);

  useEffect(() => {
    if (time !== 0) return;
    else {
      clearInterval(timerId.current);
      setIsTimerActive(false);
      setTime(coolTime);
    }
  }, [time, coolTime, setIsTimerActive, setTime]);

  return () => {
    setRestartKey((key) => key + 1);
  };
};
