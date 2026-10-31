import type { SkillData } from "lib/hunterData";
import type { Timer } from "@/hooks/useTimer";
import common from "components/HunterSkillTimerButton.module.scss";
import colors from "components/Color.module.scss";
import styles from "components/DreamWitchSkillTimerButton.module.scss";

type Props = {
  language: "en" | "ja";
  skill: SkillData;
  timer: Timer;
  note: string;
};

export const DreamWitchSkillTimerButton = ({
  language,
  timer,
  skill,
  note,
}: Props) => {
  const { isActive, time, setRemainingTime, toggle } = timer;

  return (
    <button
      type="button"
      className={
        !isActive
          ? `${colors.green} ${colors.greenText}`
          : time > 3
            ? `${colors.yellow} ${colors.yellowText}`
            : `${colors.red} ${colors.redText}`
      }
      onClick={() => {
        if (isActive) {
          const nextTime = Math.floor(time * 0.6);
          setRemainingTime(nextTime);
        } else {
          toggle();
        }
      }}
    >
      <p className={common.timeText}>{time}</p>
      <p className={`${common.skillText} ${styles.skillText}`}>
        <span>{skill.name[language]}</span>
      </p>
      <div className={styles.note}>{note}</div>
    </button>
  );
};
