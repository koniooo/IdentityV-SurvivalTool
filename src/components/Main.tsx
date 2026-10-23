import { useState, useEffect } from "react";
import { RowContainer } from "components/RowContainer";
import { StartButton } from "components/StartButton";
import { SecondRow } from "components/SecondRow";
import { ThirdRow } from "components/ThirdRow";
import { FourthRow } from "components/FourthRow";
import { hunterData } from "lib/hunterData";
import { calculateTotalCoolTime } from "lib/coolTime";
import { useTimer } from "@/hooks/useTimer";
import { FourthRow as EnglishFourthRow } from "components/en/FourthRow";
import variables from "styles/Variables.module.scss";
import variablesEn from "styles/VariablesEn.module.scss";
import styles from "components/Main.module.scss";

export const patrollerCoolTime = 90;
export const teleportCoolTime = 100;
export const blinkCoolTime = 150;
export const ultraLongCoolTime = 150;

export const trumpCardTime = 120;

export const readyTime = 5;
export const bloodyQueenId = 13;

type Props = {
  language: "ja" | "en";
};

export const Main = ({ language }: Props) => {
  const [elapsedTime, setElapsedTime] = useState(-readyTime);
  const [patrollerTime, setPatrollerTime] = useState(patrollerCoolTime);
  const [teleportTime, setTeleportTime] = useState(teleportCoolTime);
  const [blinkTime, setBlinkTime] = useState(blinkCoolTime);
  const [ultraLongTime, setUltraLongTime] = useState(ultraLongCoolTime);
  const [isStartTimerActive, setIsStartTimerActive] = useState(false);
  const [isPatrollerTimerActive, setIsPatrollerTimerActive] = useState(false);
  const [isTeleportTimerActive, setIsTeleportTimerActive] = useState(false);
  const [isBlinkTimerActive, setIsBlinkTimerActive] = useState(false);
  const [isUltraLongTimerActive, setIsUltraLongTimerActive] = useState(false);
  const [hasConfinedSpace, setHasConfinedSpace] = useState(false);
  const [hasWantedOrder, setHasWantedOrder] = useState(false);
  const [hasTrumpCard, setHasTrumpCard] = useState(false);
  const [hasInsolence, setHasInsolence] = useState(false);
  const [hasDetention, setHasDetention] = useState(false);
  const [hunterId, setHunterId] = useState(bloodyQueenId);
  const [primaryTime, setPrimaryTime] = useState(0);
  const [secondaryTime, setSecondaryTime] = useState(0);
  const [tertiaryTime, setTertiaryTime] = useState(0);
  const [isPrimaryTimerActive, setIsPrimaryTimerActive] = useState(false);
  const [isSecondaryTimerActive, setIsSecondaryTimerActive] = useState(false);
  const [isTertiaryTimerActive, setIsTertiaryTimerActive] = useState(false);
  const [isTrumpCardUsed, setIsTrumpCardUsed] = useState(false);
  const [isTrumpCardAlertOn, setIsTrumpCardAlertOn] = useState(false);

  const FourthRowComponent = language === "ja" ? FourthRow : EnglishFourthRow;

  const pageVariables = language === "ja" ? variables : variablesEn;

  const restartPatrollerTimer = useTimer({
    coolTime: patrollerCoolTime,
    time: patrollerTime,
    setTime: setPatrollerTime,
    isTimerActive: isPatrollerTimerActive,
    setIsTimerActive: setIsPatrollerTimerActive,
  });

  const restartTeleportTimer = useTimer({
    coolTime: teleportCoolTime,
    time: teleportTime,
    setTime: setTeleportTime,
    isTimerActive: isTeleportTimerActive,
    setIsTimerActive: setIsTeleportTimerActive,
  });

  const restartBlinkTimer = useTimer({
    coolTime: blinkCoolTime,
    time: blinkTime,
    setTime: setBlinkTime,
    isTimerActive: isBlinkTimerActive,
    setIsTimerActive: setIsBlinkTimerActive,
  });

  const restartUltraLongTimer = useTimer({
    coolTime: ultraLongCoolTime,
    time: ultraLongTime,
    setTime: setUltraLongTime,
    isTimerActive: isUltraLongTimerActive,
    setIsTimerActive: setIsUltraLongTimerActive,
  });

  const selectedHunter = hunterData[hunterId];
  const selectedPrimaryCoolTime = selectedHunter.primaryCoolTime;
  const selectedSecondaryCoolTime = selectedHunter.secondaryCoolTime;
  const selectedTertiaryCoolTime = selectedHunter.tertiaryCoolTime;

  const primaryTotalCoolTime = calculateTotalCoolTime(selectedPrimaryCoolTime);
  const secondaryTotalCoolTime = selectedSecondaryCoolTime
    ? calculateTotalCoolTime(selectedSecondaryCoolTime)
    : 0;

  const tertiaryTotalCoolTime = selectedTertiaryCoolTime
    ? calculateTotalCoolTime(selectedTertiaryCoolTime)
    : 0;

  const restartPrimaryTimer = useTimer({
    coolTime: primaryTotalCoolTime,
    time: primaryTime,
    setTime: setPrimaryTime,
    isTimerActive: isPrimaryTimerActive,
    setIsTimerActive: setIsPrimaryTimerActive,
  });

  const restartSecondaryTimer = useTimer({
    coolTime: secondaryTotalCoolTime,
    time: secondaryTime,
    setTime: setSecondaryTime,
    isTimerActive: isSecondaryTimerActive,
    setIsTimerActive: setIsSecondaryTimerActive,
  });

  const restartTertiaryTimer = useTimer({
    coolTime: tertiaryTotalCoolTime,
    time: tertiaryTime,
    setTime: setTertiaryTime,
    isTimerActive: isTertiaryTimerActive,
    setIsTimerActive: setIsTertiaryTimerActive,
  });

  useEffect(() => {
    setIsPrimaryTimerActive(false);
    setIsSecondaryTimerActive(false);
    setIsTertiaryTimerActive(false);

    setPrimaryTime(primaryTotalCoolTime);
    setSecondaryTime(secondaryTotalCoolTime);
    setTertiaryTime(tertiaryTotalCoolTime);
  }, [hunterId]);

  const isTrumpCardTimerActive =
    isStartTimerActive && 0 <= elapsedTime && elapsedTime < trumpCardTime;

  return (
    <main className={`${styles.main} ${pageVariables.main}`}>
      <RowContainer isEdgeRow={true}>
        <StartButton
          language={language}
          isPatrollerTimerActive={isPatrollerTimerActive}
          isTeleportTimerActive={isTeleportTimerActive}
          isBlinkTimerActive={isBlinkTimerActive}
          isUltraLongTimerActive={isUltraLongTimerActive}
          elapsedTime={elapsedTime}
          setElapsedTime={setElapsedTime}
          isStartTimerActive={isStartTimerActive}
          setIsStartTimerActive={setIsStartTimerActive}
          restartPatrollerTimer={restartPatrollerTimer}
          restartTeleportTimer={restartTeleportTimer}
          restartBlinkTimer={restartBlinkTimer}
          restartUltraLongTimer={restartUltraLongTimer}
          restartPrimaryTimer={restartPrimaryTimer}
          setPatrollerTime={setPatrollerTime}
          setTeleportTime={setTeleportTime}
          setBlinkTime={setBlinkTime}
          setUltraLongTime={setUltraLongTime}
          setIsPatrollerTimerActive={setIsPatrollerTimerActive}
          setIsTeleportTimerActive={setIsTeleportTimerActive}
          setIsBlinkTimerActive={setIsBlinkTimerActive}
          setIsUltraLongTimerActive={setIsUltraLongTimerActive}
          setHasConfinedSpace={setHasConfinedSpace}
          setHasWantedOrder={setHasWantedOrder}
          setHasInsolence={setHasInsolence}
          setHasTrumpCard={setHasTrumpCard}
          setHasDetention={setHasDetention}
          setHunterId={setHunterId}
          setPrimaryTime={setPrimaryTime}
          setIsPrimaryTimerActive={setIsPrimaryTimerActive}
          isPrimaryTimerActive={isPrimaryTimerActive}
          setIsSecondaryTimerActive={setIsSecondaryTimerActive}
          setIsTertiaryTimerActive={setIsTertiaryTimerActive}
          hunterId={hunterId}
          setIsTrumpCardAlertOn={setIsTrumpCardAlertOn}
          setIsTrumpCardUsed={setIsTrumpCardUsed}
        />
      </RowContainer>
      <SecondRow
        language={language}
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
        hunterId={hunterId}
        setHunterId={setHunterId}
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
        restartPrimaryTimer={restartPrimaryTimer}
        restartSecondaryTimer={restartSecondaryTimer}
        restartTertiaryTimer={restartTertiaryTimer}
      />
      <ThirdRow
        patrollerTime={patrollerTime}
        isPatrollerTimerActive={isPatrollerTimerActive}
        setIsPatrollerTimerActive={setIsPatrollerTimerActive}
        teleportTime={teleportTime}
        isTeleportTimerActive={isTeleportTimerActive}
        setIsTeleportTimerActive={setIsTeleportTimerActive}
        blinkTime={blinkTime}
        isBlinkTimerActive={isBlinkTimerActive}
        setIsBlinkTimerActive={setIsBlinkTimerActive}
        elapsedTime={elapsedTime}
        isStartTimerActive={isStartTimerActive}
      />
      <FourthRowComponent
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
        ultraLongTime={ultraLongTime}
        isUltraLongTimerActive={isUltraLongTimerActive}
        setIsUltraLongTimerActive={setIsUltraLongTimerActive}
        setHasTrumpCard={setHasTrumpCard}
        elapsedTime={elapsedTime}
        isTrumpCardUsed={isTrumpCardUsed}
        setIsTrumpCardUsed={setIsTrumpCardUsed}
        isTrumpCardAlertOn={isTrumpCardAlertOn}
        setIsTrumpCardAlertOn={setIsTrumpCardAlertOn}
      />
    </main>
  );
};
