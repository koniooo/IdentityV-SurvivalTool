import { TimerButton } from "components/TimerButton";
import { DualStatusTimerButton } from "components/DualStatusTimerButton";
import { hunterData } from "lib/hunterData";
import styles from "components/HunterSkillTimerButton.module.scss";

type Props = {
  skill: "primary" | "secondary" | "tertiary";
  hunterId: number;
  time: number;
  setTime: React.Dispatch<React.SetStateAction<number>>;
  isTimerActive: boolean;
  setIsTimerActive: React.Dispatch<React.SetStateAction<boolean>>;
  timerId: React.MutableRefObject<number>;
};

export const HunterSkillTimerButton = ({
  skill,
  isTimerActive,
  time,
  setIsTimerActive,
  hunterId,
  setTime,
  timerId,
}: Props) => {
  const selectedHunter = hunterData[hunterId];
  const selectedPrimaryCoolTime = selectedHunter.primaryCoolTime;
  const selectedSecondaryCoolTime = selectedHunter.secondaryCoolTime || [0, 0]; // undefinedとなる可能性があるためundefinedの場合は[0, 0]というデフォルト値を設定する（or演算子は左辺がfalsyな場合に右辺を返す）
  const selectedTertiaryCoolTime = selectedHunter.tertiaryCoolTime || [0, 0];

  const haveSingleStatus =
    skill === "primary"
      ? selectedPrimaryCoolTime.length === 1
      : skill === "secondary"
      ? selectedSecondaryCoolTime.length === 1
      : selectedTertiaryCoolTime.length === 1;

  if (haveSingleStatus) {
    return (
      <TimerButton
        time={time}
        isTimerActive={isTimerActive}
        setIsTimerActive={setIsTimerActive}
      >
        <p className={styles.timeText}>{time}</p>
        {skill === "primary" && (
          <p className={styles.skillText}>
            <span>{selectedHunter.primaryNameJa}</span>
          </p>
        )}
        {skill === "secondary" && (
          <p className={styles.skillText}>
            <span>{selectedHunter.secondaryNameJa}</span>
          </p>
        )}
        {skill === "tertiary" && (
          <p className={styles.skillText}>
            <span>{selectedHunter.tertiaryNameJa}</span>
          </p>
        )}
      </TimerButton>
    );
  } else {
    return (
      <DualStatusTimerButton
        secondCoolTime={
          skill === "primary"
            ? selectedPrimaryCoolTime[1]
            : skill === "secondary"
            ? selectedSecondaryCoolTime[1]
            : selectedTertiaryCoolTime[1]
        }
        time={time}
        setTime={setTime}
        isTimerActive={isTimerActive}
        setIsTimerActive={setIsTimerActive}
        timerId={timerId}
      >
        {skill === "primary" &&
          (time > selectedPrimaryCoolTime[1] ? (
            <p className={styles.timeText}>
              {time - selectedPrimaryCoolTime[1]}
            </p>
          ) : (
            <p className={styles.timeText}>{time}</p>
          ))}
        {skill === "primary" && (
          <p className={styles.skillText}>
            <span>{selectedHunter.primaryNameJa}</span>
          </p>
        )}
        {skill === "secondary" &&
          (time > selectedSecondaryCoolTime[1] ? (
            <p className={styles.timeText}>
              {time - selectedSecondaryCoolTime[1]}
            </p>
          ) : (
            <p className={styles.timeText}>{time}</p>
          ))}
        {skill === "secondary" && (
          <p className={styles.skillText}>
            <span>{selectedHunter.secondaryNameJa}</span>
          </p>
        )}
        {skill === "tertiary" &&
          (time > selectedTertiaryCoolTime[1] ? (
            <p className={styles.timeText}>
              {time - selectedTertiaryCoolTime[1]}
            </p>
          ) : (
            <p className={styles.timeText}>{time}</p>
          ))}
        {skill === "tertiary" && (
          <p className={styles.skillText}>
            <span>{selectedHunter.tertiaryNameJa}</span>
          </p>
        )}
      </DualStatusTimerButton>
    );
  }
};
