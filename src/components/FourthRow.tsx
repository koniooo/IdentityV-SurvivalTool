import { RowContainer } from "components/RowContainer";
import { TrumpCardButton } from "components/TrumpCardButton";
import { UltraLongTimer } from "components/UltraLongTimer";
import styles from "components/FourthRow.module.scss";
import type { Timer } from "@/hooks/useTimer";

type Props = {
  language: "ja" | "en";
  isTrumpCardTimerActive: boolean;
  patrollerTimer: Timer;
  teleportTimer: Timer;
  blinkTimer: Timer;
  ultraLongTimer: Timer;
  setHasTrumpCard: React.Dispatch<React.SetStateAction<boolean>>;
  elapsedTime: number;
  isTrumpCardUsed: boolean;
  setIsTrumpCardUsed: React.Dispatch<React.SetStateAction<boolean>>;
  isTrumpCardAlertOn: boolean;
  setIsTrumpCardAlertOn: React.Dispatch<React.SetStateAction<boolean>>;
};
export const FourthRow = ({
  language,
  isTrumpCardTimerActive,
  patrollerTimer,
  teleportTimer,
  blinkTimer,
  ultraLongTimer,
  setHasTrumpCard,
  elapsedTime,
  isTrumpCardUsed,
  setIsTrumpCardUsed,
  isTrumpCardAlertOn,
  setIsTrumpCardAlertOn,
}: Props) => {
  return (
    <RowContainer isEdgeRow={true}>
      <section className={styles.trump}>
        <TrumpCardButton
          language={language}
          patrollerTimer={patrollerTimer}
          teleportTimer={teleportTimer}
          blinkTimer={blinkTimer}
          isTrumpCardTimerActive={isTrumpCardTimerActive}
          setHasTrumpCard={setHasTrumpCard}
          elapsedTime={elapsedTime}
          isTrumpCardUsed={isTrumpCardUsed}
          setIsTrumpCardUsed={setIsTrumpCardUsed}
          isTrumpCardAlertOn={isTrumpCardAlertOn}
          setIsTrumpCardAlertOn={setIsTrumpCardAlertOn}
        />
      </section>
      <section className={styles.ultraLong}>
        <UltraLongTimer ultraLongTimer={ultraLongTimer} />
      </section>
    </RowContainer>
  );
};
