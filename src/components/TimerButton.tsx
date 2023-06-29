import colors from "components/Color.module.scss";

type Props = {
  isTimerActive: boolean;
  time: number;
  setIsTimerActive: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
};

export const TimerButton = ({
  time,
  isTimerActive,
  setIsTimerActive,
  children,
}: Props) => {
  return (
    <button
      type="button"
      className={
        !isTimerActive
          ? `${colors.green} ${colors.greenText}`
          : time > 3
          ? `${colors.yellow} ${colors.yellowText}`
          : `${colors.red} ${colors.redText}`
      }
      onClick={() => {
        setIsTimerActive(!isTimerActive);
      }}
    >
      {children}
    </button>
  );
};
