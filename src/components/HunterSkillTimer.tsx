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
  const selectedHunter = hunterData[hunterId];
  if (hunterId === dreamWitchId) {
    return (
      <div className={styles.double}>
        <OneThirdColumn>
          <DreamWitchSkillTimerButton
            language={language}
            skill="primary"
            time={primaryTime}
            setTime={setPrimaryTime}
            isTimerActive={isPrimaryTimerActive}
            setIsTimerActive={setIsPrimaryTimerActive}
          />
        </OneThirdColumn>
        <OneThirdColumn>
          <DreamWitchSkillTimerButton
            language={language}
            skill="secondary"
            time={secondaryTime}
            setTime={setSecondaryTime}
            isTimerActive={isSecondaryTimerActive}
            setIsTimerActive={setIsSecondaryTimerActive}
          />
        </OneThirdColumn>
      </div>
    );
  } else if (selectedHunter.skills.tertiary) {
    return (
      <>
        <section
          className={`${styles.triple} ${language === "en" ? styles.tripleEn : ""}`}
        >
          <HunterSkillTimerButton
            language={language}
            skill="primary"
            hunterId={hunterId}
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
            skill="secondary"
            hunterId={hunterId}
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
            skill="tertiary"
            hunterId={hunterId}
            time={tertiaryTime}
            setTime={setTertiaryTime}
            isTimerActive={isTertiaryTimerActive}
            setIsTimerActive={setIsTertiaryTimerActive}
            restartTimer={restartTertiaryTimer}
          />
        </section>
      </>
    );
  } else if (selectedHunter.skills.secondary) {
    return (
      <div className={styles.double}>
        <OneThirdColumn>
          <HunterSkillTimerButton
            language={language}
            skill="primary"
            hunterId={hunterId}
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
            skill="secondary"
            hunterId={hunterId}
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
          skill="primary"
          hunterId={hunterId}
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
