import colors from "components/Color.module.scss";
import styles from "components/DreamWitchSkillTimerButton.module.scss";
import common from "components/HunterSkillTimerButton.module.scss";
import { hunterData } from "lib/hunterData";
import { dreamWitchId } from "components/HunterSkillTimer";
type Props = {
  skill: "primary" | "secondary";
  time: number;
  setTime: React.Dispatch<React.SetStateAction<number>>;
  isTimerActive: boolean;
  setIsTimerActive: React.Dispatch<React.SetStateAction<boolean>>;
};

export const DreamWitchSkillTimerButton = ({
  time,
  setTime,
  isTimerActive,
  setIsTimerActive,
  skill,
}: Props) => {
  const selectedHunter = hunterData[dreamWitchId];
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
      {skill === "primary" && (
        <p className={`${common.skillText} ${styles.skillText}`}>
          <span>{selectedHunter.primaryNameEn}</span>
        </p>
      )}
      {skill === "secondary" && (
        <p className={`${common.skillText} ${styles.skillText}`}>
          <span>{selectedHunter.secondaryNameEn}</span>
        </p>
      )}
      {skill === "primary" && (
        <div className={styles.description}>*tap each time Spawn</div>
      )}
      {skill === "secondary" && (
        <div className={styles.description}>Follower attack hits</div>
      )}
    </button>
  );
};
