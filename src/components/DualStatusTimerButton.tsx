import type { Timer } from "@/hooks/useTimer";
import colors from "components/Color.module.scss";

type Props = {
  timer: Timer;
  secondCoolTime: number;
  children: React.ReactNode;
};
export const DualStatusTimerButton = ({
  timer,
  children,
  secondCoolTime,
}: Props) => {
  const { time, isActive, toggle, startFrom } = timer;

  return (
    <button
      type="button"
      className={
        !isActive
          ? `${colors.green} ${colors.greenText}`
          : time > secondCoolTime || time <= 3
            ? `${colors.red} ${colors.redText}`
            : `${colors.yellow} ${colors.yellowText}`
      }
      onClick={() => {
        if (!isActive || time <= secondCoolTime) {
          toggle();
        } else {
          startFrom(secondCoolTime);
        }
      }}
    >
      {children}
    </button>
  );
};
