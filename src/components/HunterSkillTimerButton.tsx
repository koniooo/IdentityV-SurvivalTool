import type { Timer } from "@/hooks/useTimer";
import { DualStatusTimerButton } from "components/DualStatusTimerButton";
import styles from "components/HunterSkillTimerButton.module.scss";
import { TimerButton } from "components/TimerButton";
import type { SkillData } from "lib/hunterData";

type Props = {
  language: "ja" | "en";
  skill: SkillData;
  timer: Timer;
};

export const HunterSkillTimerButton = ({ language, skill, timer }: Props) => {
  const { secondStageSeconds } = skill.coolTime;
  const { time } = timer;

  if (secondStageSeconds === undefined) {
    return (
      <TimerButton timer={timer}>
        <p className={styles.timeText}>{time}</p>
        <p className={styles.skillText}>
          <span>{skill.name[language]}</span>
        </p>
      </TimerButton>
    );
  }

  return (
    <DualStatusTimerButton secondCoolTime={secondStageSeconds} timer={timer}>
      <p className={styles.timeText}>
        {time > secondStageSeconds ? time - secondStageSeconds : time}
      </p>
      <p className={styles.skillText}>
        <span>{skill.name[language]}</span>
      </p>
    </DualStatusTimerButton>
  );
};
