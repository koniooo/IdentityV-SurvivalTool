import styles from "components/SecondRow.module.scss";
import { RowContainer } from "components/RowContainer";
import { OneThirdColumn } from "components/OneThirdColumn";
import { HunterSkillTimer } from "components/en/HunterSkillTimer";
import { Persona } from "components/Persona";
import { HunterSelect } from "components/en/HunterSelect";
import { LanguageSwitch } from "components/en/LanguageSwitch";
import { hunterData } from "lib/hunterData";

export type Props = {
  isTrumpCardTimerActive: boolean;
  elapsedTime: number;
  isStartTimerActive: boolean;
  hunterId: number;
  setHunterId: React.Dispatch<React.SetStateAction<number>>;
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
  primaryTimerId: React.MutableRefObject<number>;
  secondaryTimerId: React.MutableRefObject<number>;
  tertiaryTimerId: React.MutableRefObject<number>;
};

export const SecondRow = ({
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
  setHunterId,
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
  primaryTimerId,
  secondaryTimerId,
  tertiaryTimerId,
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
                setHunterId((t) => t - 1);
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
            <HunterSelect hunterId={hunterId} setHunterId={setHunterId} />
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
                setHunterId((t) => t + 1);
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
            <LanguageSwitch />
          </section>
        </div>
        <div>
          <section className={styles.hunterSkillTimerSec}>
            <HunterSkillTimer
              hunterId={hunterId}
              primaryTime={primaryTime}
              secondaryTime={secondaryTime}
              tertiaryTime={tertiaryTime}
              setPrimaryTime={setPrimaryTime}
              setSecondaryTime={setSecondaryTime}
              setTertiaryTime={setTertiaryTime}
              isPrimaryTimerActive={isPrimaryTimerActive}
              isSecondaryTimerActive={isSecondaryTimerActive}
              isTertiaryTimerActive={isTertiaryTimerActive}
              setIsSecondaryTimerActive={setIsSecondaryTimerActive}
              setIsPrimaryTimerActive={setIsPrimaryTimerActive}
              setIsTertiaryTimerActive={setIsTertiaryTimerActive}
              primaryTimerId={primaryTimerId}
              secondaryTimerId={secondaryTimerId}
              tertiaryTimerId={tertiaryTimerId}
            />
          </section>
        </div>
      </div>
    </RowContainer>
  );
};
