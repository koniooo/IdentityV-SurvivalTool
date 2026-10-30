import { TimerButton } from "components/TimerButton";
import { DualStatusTimerButton } from "components/DualStatusTimerButton";
import type { SkillData } from "lib/hunterData";
import styles from "components/HunterSkillTimerButton.module.scss";

type Props = {
  language: "ja" | "en";
  skill: SkillData;
  time: number;
  setTime: React.Dispatch<React.SetStateAction<number>>;
  isTimerActive: boolean;
  setIsTimerActive: React.Dispatch<React.SetStateAction<boolean>>;
  restartTimer: () => void;
};

export const HunterSkillTimerButton = ({
  language,
  skill,
  isTimerActive,
  time,
  setIsTimerActive,
  setTime,
  restartTimer,
}: Props) => {
  const { secondStageSeconds } = skill.coolTime;

  if (secondStageSeconds === undefined) {
    return (
      <TimerButton
        time={time}
        isTimerActive={isTimerActive}
        setIsTimerActive={setIsTimerActive}
      >
        <p className={styles.timeText}>{time}</p>
        <p className={styles.skillText}>
          <span>{skill.name[language]}</span>
        </p>
      </TimerButton>
    );
  }

  return (
    <DualStatusTimerButton
      secondCoolTime={secondStageSeconds}
      time={time}
      setTime={setTime}
      isTimerActive={isTimerActive}
      setIsTimerActive={setIsTimerActive}
      restartTimer={restartTimer}
    >
      <p className={styles.timeText}>
        {time > secondStageSeconds ? time - secondStageSeconds : time}
      </p>
      <p className={styles.skillText}>
        <span>{skill.name[language]}</span>
      </p>
    </DualStatusTimerButton>
  );
};
