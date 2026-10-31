import colors from "components/Color.module.scss";
import type { Timer } from "@/hooks/useTimer";

type Props = {
  timer: Timer;
  children: React.ReactNode;
};

export const TimerButton = ({ timer, children }: Props) => {
  return (
    <button
      type="button"
      className={
        !timer.isActive
          ? `${colors.green} ${colors.greenText}`
          : timer.time > 3
            ? `${colors.yellow} ${colors.yellowText}`
            : `${colors.red} ${colors.redText}`
      }
      onClick={timer.toggle}
    >
      {children}
    </button>
  );
};
