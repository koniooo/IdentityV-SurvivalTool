import { hunterData } from "lib/hunterData";
import { OneThirdColumn } from "components/OneThirdColumn";
import { HunterSkillTimerButton } from "components/HunterSkillTimerButton";
import { DreamWitchSkillTimerButton } from "components/DreamWitchSkillTimerButton";
import styles from "components/HunterSkillTimer.module.scss";

export const dreamWitchId = 10;

type Props = {
  language: "ja" | "en";
  hunterId: number;
  primaryTime: number;
  setPrimaryTime: React.Dispatch<React.SetStateAction<number>>;
  isPrimaryTimerActive: boolean;
  setIsPrimaryTimerActive: React.Dispatch<React.SetStateAction<boolean>>;
  secondaryTime: number;
  setSecondaryTime: React.Dispatch<React.SetStateAction<number>>;
  isSecondaryTimerActive: boolean;
  setIsSecondaryTimerActive: React.Dispatch<React.SetStateAction<boolean>>;
  tertiaryTime: number;
  setTertiaryTime: React.Dispatch<React.SetStateAction<number>>;
  isTertiaryTimerActive: boolean;
  setIsTertiaryTimerActive: React.Dispatch<React.SetStateAction<boolean>>;
  restartPrimaryTimer: () => void;
  restartSecondaryTimer: () => void;
  restartTertiaryTimer: () => void;
};

export const HunterSkillTimer = ({
  language,
  hunterId,
  primaryTime,
  secondaryTime,
  tertiaryTime,
  setPrimaryTime,
  setSecondaryTime,
  setTertiaryTime,
  isPrimaryTimerActive,
  isSecondaryTimerActive,
  isTertiaryTimerActive,
  setIsPrimaryTimerActive,
  setIsSecondaryTimerActive,
  setIsTertiaryTimerActive,
  restartPrimaryTimer,
  restartSecondaryTimer,
  restartTertiaryTimer,
}: Props) => {
  const { primary, secondary, tertiary } = hunterData[hunterId].skills;
  if (hunterId === dreamWitchId && secondary) {
    return (
      <div className={styles.double}>
        <OneThirdColumn>
          <DreamWitchSkillTimerButton
            language={language}
            skill={primary}
            time={primaryTime}
            setTime={setPrimaryTime}
            isTimerActive={isPrimaryTimerActive}
            setIsTimerActive={setIsPrimaryTimerActive}
            note={
              language === "ja" ? "※オリジナルの攻撃が" : "*Tap on each hit"
            }
          />
        </OneThirdColumn>
        <OneThirdColumn>
          <DreamWitchSkillTimerButton
            language={language}
            skill={secondary}
            time={secondaryTime}
            setTime={setSecondaryTime}
            isTimerActive={isSecondaryTimerActive}
            setIsTimerActive={setIsSecondaryTimerActive}
            note={
              language === "ja"
                ? "命中するたびにタップ"
                : "by the Spawn Follower"
            }
          />
        </OneThirdColumn>
      </div>
    );
  } else if (tertiary) {
    return (
      <>
        <section
          className={`${styles.triple} ${language === "en" ? styles.tripleEn : ""}`}
        >
          <HunterSkillTimerButton
            language={language}
            skill={primary}
            time={primaryTime}
            setTime={setPrimaryTime}
            isTimerActive={isPrimaryTimerActive}
            setIsTimerActive={setIsPrimaryTimerActive}
            restartTimer={restartPrimaryTimer}
          />
        </section>
        <section
          className={`${styles.triple} ${language === "en" ? styles.tripleEn : ""}`}
        >
          <HunterSkillTimerButton
            language={language}
            skill={secondary}
            time={secondaryTime}
            setTime={setSecondaryTime}
            isTimerActive={isSecondaryTimerActive}
            setIsTimerActive={setIsSecondaryTimerActive}
            restartTimer={restartSecondaryTimer}
          />
        </section>
        <section
          className={`${styles.triple} ${language === "en" ? styles.tripleEn : ""}`}
        >
          <HunterSkillTimerButton
            language={language}
            skill={tertiary}
            time={tertiaryTime}
            setTime={setTertiaryTime}
            isTimerActive={isTertiaryTimerActive}
            setIsTimerActive={setIsTertiaryTimerActive}
            restartTimer={restartTertiaryTimer}
          />
        </section>
      </>
    );
  } else if (secondary) {
    return (
      <div className={styles.double}>
        <OneThirdColumn>
          <HunterSkillTimerButton
            language={language}
            skill={primary}
            time={primaryTime}
            setTime={setPrimaryTime}
            isTimerActive={isPrimaryTimerActive}
            setIsTimerActive={setIsPrimaryTimerActive}
            restartTimer={restartPrimaryTimer}
          />
        </OneThirdColumn>
        <OneThirdColumn>
          <HunterSkillTimerButton
            language={language}
            skill={secondary}
            time={secondaryTime}
            setTime={setSecondaryTime}
            isTimerActive={isSecondaryTimerActive}
            setIsTimerActive={setIsSecondaryTimerActive}
            restartTimer={restartSecondaryTimer}
          />
        </OneThirdColumn>
      </div>
    );
  } else {
    return (
      <div className={styles.single}>
        <HunterSkillTimerButton
          language={language}
          skill={primary}
          time={primaryTime}
          setTime={setPrimaryTime}
          isTimerActive={isPrimaryTimerActive}
          setIsTimerActive={setIsPrimaryTimerActive}
          restartTimer={restartPrimaryTimer}
        />
      </div>
    );
  }
};
