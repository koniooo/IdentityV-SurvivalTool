import { RowContainer } from "components/RowContainer";
import { TrumpCardButton } from "components/en/TrumpCardButton";
import { UltraLongTimer } from "components/UltraLongTimer";
import styles from "components/FourthRow.module.scss";

type Props = {
  isTrumpCardTimerActive: boolean;
  patrollerTime: number;
  setPatrollerTime: React.Dispatch<React.SetStateAction<number>>;
  isPatrollerTimerActive: boolean;
  setIsPatrollerTimerActive: React.Dispatch<React.SetStateAction<boolean>>;
  teleportTime: number;
  setTeleportTime: React.Dispatch<React.SetStateAction<number>>;
  isTeleportTimerActive: boolean;
  setIsTeleportTimerActive: React.Dispatch<React.SetStateAction<boolean>>;
  blinkTime: number;
  setBlinkTime: React.Dispatch<React.SetStateAction<number>>;
  isBlinkTimerActive: boolean;
  setIsBlinkTimerActive: React.Dispatch<React.SetStateAction<boolean>>;
  ultraLongTime: number;
  isUltraLongTimerActive: boolean;
  setIsUltraLongTimerActive: React.Dispatch<React.SetStateAction<boolean>>;
  setHasTrumpCard: React.Dispatch<React.SetStateAction<boolean>>;
  elapsedTime: number;
  isTrumpCardUsed: boolean;
  setIsTrumpCardUsed: React.Dispatch<React.SetStateAction<boolean>>;
  isTrumpCardAlertOn: boolean;
  setIsTrumpCardAlertOn: React.Dispatch<React.SetStateAction<boolean>>;
};
export const FourthRow = ({
  isTrumpCardTimerActive,
  patrollerTime,
  setPatrollerTime,
  isPatrollerTimerActive,
  setIsPatrollerTimerActive,
  teleportTime,
  setTeleportTime,
  isTeleportTimerActive,
  setIsTeleportTimerActive,
  blinkTime,
  setBlinkTime,
  isBlinkTimerActive,
  setIsBlinkTimerActive,
  ultraLongTime,
  isUltraLongTimerActive,
  setIsUltraLongTimerActive,
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
          isTrumpCardTimerActive={isTrumpCardTimerActive}
          patrollerTime={patrollerTime}
          setPatrollerTime={setPatrollerTime}
          isPatrollerTimerActive={isPatrollerTimerActive}
          setIsPatrollerTimerActive={setIsPatrollerTimerActive}
          teleportTime={teleportTime}
          setTeleportTime={setTeleportTime}
          isTeleportTimerActive={isTeleportTimerActive}
          setIsTeleportTimerActive={setIsTeleportTimerActive}
          blinkTime={blinkTime}
          setBlinkTime={setBlinkTime}
          isBlinkTimerActive={isBlinkTimerActive}
          setIsBlinkTimerActive={setIsBlinkTimerActive}
          setHasTrumpCard={setHasTrumpCard}
          elapsedTime={elapsedTime}
          isTrumpCardUsed={isTrumpCardUsed}
          setIsTrumpCardUsed={setIsTrumpCardUsed}
          isTrumpCardAlertOn={isTrumpCardAlertOn}
          setIsTrumpCardAlertOn={setIsTrumpCardAlertOn}
        />
      </section>
      <section className={styles.ultraLong}>
        <UltraLongTimer
          isUltraLongTimerActive={isUltraLongTimerActive}
          setIsUltraLongTimerActive={setIsUltraLongTimerActive}
          ultraLongTime={ultraLongTime}
        />
      </section>
    </RowContainer>
  );
};
