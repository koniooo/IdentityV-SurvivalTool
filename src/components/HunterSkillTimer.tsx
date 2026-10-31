import { hunterData } from "lib/hunterData";
import { OneThirdColumn } from "components/OneThirdColumn";
import { HunterSkillTimerButton } from "components/HunterSkillTimerButton";
import { DreamWitchSkillTimerButton } from "components/DreamWitchSkillTimerButton";
import type { Timer } from "@/hooks/useTimer";
import styles from "components/HunterSkillTimer.module.scss";

export const dreamWitchId = 10;

type Props = {
  language: "ja" | "en";
  hunterId: number;
  primaryTimer: Timer;
  secondaryTimer: Timer;
  tertiaryTimer: Timer;
};

export const HunterSkillTimer = ({
  language,
  hunterId,
  primaryTimer,
  secondaryTimer,
  tertiaryTimer,
}: Props) => {
  const { primary, secondary, tertiary } = hunterData[hunterId].skills;
  if (hunterId === dreamWitchId && secondary) {
    return (
      <div className={styles.double}>
        <OneThirdColumn>
          <DreamWitchSkillTimerButton
            language={language}
            skill={primary}
            timer={primaryTimer}
            note={
              language === "ja" ? "※オリジナルの攻撃が" : "*Tap on each hit"
            }
          />
        </OneThirdColumn>
        <OneThirdColumn>
          <DreamWitchSkillTimerButton
            language={language}
            skill={secondary}
            timer={secondaryTimer}
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
            timer={primaryTimer}
          />
        </section>
        <section
          className={`${styles.triple} ${language === "en" ? styles.tripleEn : ""}`}
        >
          <HunterSkillTimerButton
            language={language}
            skill={secondary}
            timer={secondaryTimer}
          />
        </section>
        <section
          className={`${styles.triple} ${language === "en" ? styles.tripleEn : ""}`}
        >
          <HunterSkillTimerButton
            language={language}
            skill={tertiary}
            timer={tertiaryTimer}
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
            timer={primaryTimer}
          />
        </OneThirdColumn>
        <OneThirdColumn>
          <HunterSkillTimerButton
            language={language}
            skill={secondary}
            timer={secondaryTimer}
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
          timer={primaryTimer}
        />
      </div>
    );
  }
};
