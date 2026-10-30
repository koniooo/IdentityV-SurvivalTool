import type { SkillData } from "lib/hunterData";
import common from "components/HunterSkillTimerButton.module.scss";
import colors from "components/Color.module.scss";
import styles from "components/DreamWitchSkillTimerButton.module.scss";

type Props = {
  language: "en" | "ja";
  skill: SkillData;
  time: number;
  setTime: React.Dispatch<React.SetStateAction<number>>;
  isTimerActive: boolean;
  setIsTimerActive: React.Dispatch<React.SetStateAction<boolean>>;
  note: string;
};

export const DreamWitchSkillTimerButton = ({
  language,
  time,
  setTime,
  isTimerActive,
  setIsTimerActive,
  skill,
  note,
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
        if (isTimerActive) {
          const nextTime = Math.floor(time * 0.6);
          setTime(nextTime);
        } else {
          setIsTimerActive(true);
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
