import colors from "components/Color.module.scss";

type Props = {
  time: number;
  setTime: React.Dispatch<React.SetStateAction<number>>;
  secondCoolTime: number;
  isTimerActive: boolean;
  setIsTimerActive: React.Dispatch<React.SetStateAction<boolean>>;
  timerId: React.MutableRefObject<number>;
  children: React.ReactNode;
};
export const DualStatusTimerButton = ({
  time,
  setTime,
  secondCoolTime,
  isTimerActive,
  setIsTimerActive,
  timerId,
  children,
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
          clearInterval(timerId.current);
          setTime(secondCoolTime);
          const id = setInterval(() => {
            setTime((t) => t - 1);
          }, 1000);
          timerId.current = Number(id);
        }
      }}
    >
      {children}
    </button>
  );
};
