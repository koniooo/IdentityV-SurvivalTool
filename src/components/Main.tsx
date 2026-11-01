import { useState } from "react";

import { useTimer } from "@/hooks/useTimer";
import {
  blinkCoolTime,
  bloodyQueenId,
  patrollerCoolTime,
  readyTime,
  teleportCoolTime,
  trumpCardTime,
  ultraLongCoolTime,
} from "@/lib/timerConstants";
import { FourthRow } from "components/FourthRow";
import styles from "components/Main.module.scss";
import { RowContainer } from "components/RowContainer";
import { SecondRow } from "components/SecondRow";
import { StartButton } from "components/StartButton";
import { ThirdRow } from "components/ThirdRow";
import { getHunterTotalCoolTimes } from "lib/coolTime";
import variables from "styles/Variables.module.scss";
import variablesEn from "styles/VariablesEn.module.scss";

const bloodyQueenTotalCoolTimes = getHunterTotalCoolTimes(bloodyQueenId);

type Props = {
  language: "ja" | "en";
};

export const Main = ({ language }: Props) => {
  const [elapsedTime, setElapsedTime] = useState(-readyTime);
  const [isStartTimerActive, setIsStartTimerActive] = useState(false);
  const [hasConfinedSpace, setHasConfinedSpace] = useState(false);
  const [hasWantedOrder, setHasWantedOrder] = useState(false);
  const [hasTrumpCard, setHasTrumpCard] = useState(false);
  const [hasInsolence, setHasInsolence] = useState(false);
  const [hasDetention, setHasDetention] = useState(false);
  const [hunterId, setHunterId] = useState(bloodyQueenId);
  const [isTrumpCardUsed, setIsTrumpCardUsed] = useState(false);
  const [isTrumpCardAlertOn, setIsTrumpCardAlertOn] = useState(false);
  const pageVariables = language === "ja" ? variables : variablesEn;
  const patrollerTimer = useTimer(patrollerCoolTime);
  const teleportTimer = useTimer(teleportCoolTime);
  const blinkTimer = useTimer(blinkCoolTime);
  const primaryTimer = useTimer(bloodyQueenTotalCoolTimes.primary);
  const secondaryTimer = useTimer(bloodyQueenTotalCoolTimes.secondary);
  const tertiaryTimer = useTimer(bloodyQueenTotalCoolTimes.tertiary);
  const ultraLongTimer = useTimer(ultraLongCoolTime);

  const changeHunter = (nextId: number) => {
    setHunterId(nextId);
    const { primary, secondary, tertiary } = getHunterTotalCoolTimes(nextId);
    primaryTimer.reset(primary);
    secondaryTimer.reset(secondary);
    tertiaryTimer.reset(tertiary);
  };

  const isTrumpCardTimerActive =
    isStartTimerActive && 0 <= elapsedTime && elapsedTime < trumpCardTime;

  return (
    <main className={`${styles.main} ${pageVariables.main}`}>
      <RowContainer isEdgeRow={true}>
        <StartButton
          language={language}
          changeHunter={changeHunter}
          elapsedTime={elapsedTime}
          setElapsedTime={setElapsedTime}
          isStartTimerActive={isStartTimerActive}
          setIsStartTimerActive={setIsStartTimerActive}
          ultraLongTimer={ultraLongTimer}
          setHasConfinedSpace={setHasConfinedSpace}
          setHasWantedOrder={setHasWantedOrder}
          setHasInsolence={setHasInsolence}
          setHasTrumpCard={setHasTrumpCard}
          setHasDetention={setHasDetention}
          hunterId={hunterId}
          setIsTrumpCardAlertOn={setIsTrumpCardAlertOn}
          setIsTrumpCardUsed={setIsTrumpCardUsed}
          patrollerTimer={patrollerTimer}
          teleportTimer={teleportTimer}
          blinkTimer={blinkTimer}
          primaryTimer={primaryTimer}
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
        changeHunter={changeHunter}
        primaryTimer={primaryTimer}
        secondaryTimer={secondaryTimer}
        tertiaryTimer={tertiaryTimer}
      />
      <ThirdRow
        elapsedTime={elapsedTime}
        isStartTimerActive={isStartTimerActive}
        patrollerTimer={patrollerTimer}
        teleportTimer={teleportTimer}
        blinkTimer={blinkTimer}
      />
      <FourthRow
        language={language}
        isTrumpCardTimerActive={isTrumpCardTimerActive}
        setHasTrumpCard={setHasTrumpCard}
        elapsedTime={elapsedTime}
        isTrumpCardUsed={isTrumpCardUsed}
        setIsTrumpCardUsed={setIsTrumpCardUsed}
        isTrumpCardAlertOn={isTrumpCardAlertOn}
        setIsTrumpCardAlertOn={setIsTrumpCardAlertOn}
        ultraLongTimer={ultraLongTimer}
        patrollerTimer={patrollerTimer}
        teleportTimer={teleportTimer}
        blinkTimer={blinkTimer}
      />
    </main>
  );
};
