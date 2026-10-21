import colors from "components/Color.module.scss";

type Props = {
  time: number;
  setTime: React.Dispatch<React.SetStateAction<number>>;
  secondCoolTime: number;
  isTimerActive: boolean;
  setIsTimerActive: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
  restartTimer: () => void;
};
export const DualStatusTimerButton = ({
  time,
  setTime,
  secondCoolTime,
  isTimerActive,
  setIsTimerActive,
  children,
  restartTimer,
}: Props) => {
  return (
    <button
      type="button"
      className={`${
        !isTimerActive
          ? `${colors.green} ${colors.greenText}`
          : time > secondCoolTime || time <= 3
            ? `${colors.red} ${colors.redText}`
            : `${colors.yellow} ${colors.yellowText}`
      }`}
      onClick={() => {
        if (!isTimerActive || time <= secondCoolTime) {
          setIsTimerActive(!isTimerActive);
        } else {
          setTime(secondCoolTime);
          restartTimer();
        }
      }}
    >
      {children}
    </button>
  );
};
