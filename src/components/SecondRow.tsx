import { RowContainer } from "components/RowContainer";
import { OneThirdColumn } from "components/OneThirdColumn";
import { HunterSkillTimer } from "components/HunterSkillTimer";
import { Persona } from "components/Persona";
import { HunterSelect } from "components/HunterSelect";
import { LanguageSwitch } from "components/LanguageSwitch";
import { hunterData } from "lib/hunterData";
import type { Timer } from "@/hooks/useTimer";
import styles from "components/SecondRow.module.scss";

export type Props = {
  language: "ja" | "en";
  isTrumpCardTimerActive: boolean;
  elapsedTime: number;
  isStartTimerActive: boolean;
  hunterId: number;
  hasConfinedSpace: boolean;
  setHasConfinedSpace: React.Dispatch<React.SetStateAction<boolean>>;
  hasWantedOrder: boolean;
  setHasWantedOrder: React.Dispatch<React.SetStateAction<boolean>>;
  hasInsolence: boolean;
  setHasInsolence: React.Dispatch<React.SetStateAction<boolean>>;
  hasDetention: boolean;
  setHasDetention: React.Dispatch<React.SetStateAction<boolean>>;
  hasTrumpCard: boolean;
  setHasTrumpCard: React.Dispatch<React.SetStateAction<boolean>>;
  primaryTimer: Timer;
  secondaryTimer: Timer;
  tertiaryTimer: Timer;
  changeHunter: (nextId: number) => void;
};

export const SecondRow = ({
  language,
  isTrumpCardTimerActive,
  elapsedTime,
  isStartTimerActive,
  hasConfinedSpace,
  setHasConfinedSpace,
  hasWantedOrder,
  setHasWantedOrder,
  hasInsolence,
  setHasInsolence,
  hasTrumpCard,
  setHasTrumpCard,
  hasDetention,
  setHasDetention,
  hunterId,
  primaryTimer,
  secondaryTimer,
  tertiaryTimer,
  changeHunter,
}: Props) => {
  return (
    <RowContainer isEdgeRow={false}>
      <OneThirdColumn>
        <Persona
          isTrumpCardTimerActive={isTrumpCardTimerActive}
          elapsedTime={elapsedTime}
          isStartTimerActive={isStartTimerActive}
          hasConfinedSpace={hasConfinedSpace}
          setHasConfinedSpace={setHasConfinedSpace}
          hasWantedOrder={hasWantedOrder}
          setHasWantedOrder={setHasWantedOrder}
          hasInsolence={hasInsolence}
          setHasInsolence={setHasInsolence}
          hasTrumpCard={hasTrumpCard}
          setHasTrumpCard={setHasTrumpCard}
          hasDetention={hasDetention}
          setHasDetention={setHasDetention}
        />
      </OneThirdColumn>
      <div className={styles.secondRowRightDiv}>
        <div className={styles.hunterSelectAndLanguage}>
          <section
            className={`${styles.minusHunterId} ${
              hunterId === 0 && styles.disabled
            }`}
          >
            <button
              onClick={() => {
                if (hunterId === 0) {
                  return;
                }
                changeHunter(hunterId - 1);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 210 234.4"
                fill="#292b2f"
              >
                <path d="M180 228.8c-4.3 0-8.6-1-12.5-3.4l-150-86.6a25 25 0 0 1 0-43.3L167.5 9a25 25 0 0 1 25 43.3L80 117.2l112.5 65a25 25 0 0 1-12.5 46.6z" />
              </svg>
            </button>
          </section>
          <section className={styles.hunterSelectSec}>
            <HunterSelect
              language={language}
              hunterId={hunterId}
              changeHunter={changeHunter}
            />
          </section>
          <section
            className={`${styles.plusHunterId} ${
              hunterId === hunterData.length - 1 && styles.disabled
            }`}
          >
            <button
              onClick={() => {
                if (hunterId === hunterData.length - 1) {
                  return;
                }
                changeHunter(hunterId + 1);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 210 234.4"
                fill="#292b2f"
              >
                <path d="M30 5.6c4.3 0 8.6 1 12.5 3.3l150 86.6a25 25 0 0 1 0 43.3l-150 86.6a25 25 0 0 1-25-43.3l112.5-65L17.5 52.3A25 25 0 0 1 30 5.6z" />
              </svg>
            </button>
          </section>
          <section className={styles.languageSwitch}>
            <LanguageSwitch language={language} />
          </section>
        </div>
        <div>
          <section className={styles.hunterSkillTimerSec}>
            <HunterSkillTimer
              language={language}
              hunterId={hunterId}
              primaryTimer={primaryTimer}
              secondaryTimer={secondaryTimer}
              tertiaryTimer={tertiaryTimer}
            />
          </section>
        </div>
      </div>
    </RowContainer>
  );
};
