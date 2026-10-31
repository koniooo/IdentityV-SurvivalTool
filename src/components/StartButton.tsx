import { useRef, useEffect, useEffectEvent } from "react";
import {
  readyTime,
  bloodyQueenId,
  ultraLongCoolTime,
  blinkCoolTime,
  patrollerCoolTime,
  teleportCoolTime,
} from "components/Main";
import type { Timer } from "@/hooks/useTimer";
import colors from "components/Color.module.scss";
import styles from "components/StartButton.module.scss";

export const patrollerDefaultTime = 30;
export const warpDefaultTime = 40;
const blinkDefaultTime = 60;
const ultraLongDefaultTime = 30;
const bloodyQueenDefaultTime = 8;

const constrainTime = 40;
const quenchingEffectStartTime = 50;
const quenchingEffectDuration = 5;
export const accelerateDecodingTime = 202;
const claustrophobiaTime = 20; // 幽閉の恐怖
export const detentionTime = 120;

const startButtonMessages = {
  ja: {
    startDescription: "※画面が割れてカメラが回り始める瞬間にタップ",
    ready: "ゲーム開始まで",
    startImmediately: "※タップで即座にゲーム開始",
    constrainActive: "【封鎖】発動中",
    toQuenchingAndFlywheel: "【焼き入れ効果・フライホイール効果】まで",
    constrainDeactivated: "【封鎖】解除済み",
    quenchingActive: "【焼き入れ効果】発動中",
    quenchingDeactivated: "【焼き入れ効果】発動済み",
    toAccelerateDecoding: "【解読加速】まで",
    gateOpen: "【通電】",
    claustrophobiaActive: "【幽閉の恐怖】発動中",
    claustrophobiaDeactivated: "【幽閉の恐怖】解除済み",
    detentionActive: "【引き留める】発動中",
    detentionDeactivated: "【引き留める】解除済み",
  },
  en: {
    startDescription:
      "*tap when the camera begins to revolve after the screen cracks",
    ready: "Game starts in",
    startImmediately: "*tap to start the game immediately",
    constrainActive: '"Constrain" active',
    toQuenchingAndFlywheel: 'to "Quenching Effect / Flywheel Effect"',
    constrainDeactivated: '"Constrain" deactivated',
    quenchingActive: '"Quenching Effect" active',
    quenchingDeactivated: '"Quenching Effect" deactivated',
    toAccelerateDecoding: 'to "Accelerate Decoding"',
    gateOpen: "Exit Gate activation",
    claustrophobiaActive: '"Claustrophobia" active',
    claustrophobiaDeactivated: '"Claustrophobia" deactivated',
    detentionActive: '"Detention" active',
    detentionDeactivated: '"Detention" deactivated',
  },
} as const;

type Props = {
  language: "ja" | "en";
  elapsedTime: number;
  setElapsedTime: React.Dispatch<React.SetStateAction<number>>;
  isStartTimerActive: boolean;
  setIsStartTimerActive: React.Dispatch<React.SetStateAction<boolean>>;
  ultraLongTimer: Timer;
  setHasConfinedSpace: React.Dispatch<React.SetStateAction<boolean>>;
  setHasWantedOrder: React.Dispatch<React.SetStateAction<boolean>>;
  setHasInsolence: React.Dispatch<React.SetStateAction<boolean>>;
  setHasDetention: React.Dispatch<React.SetStateAction<boolean>>;
  setHasTrumpCard: React.Dispatch<React.SetStateAction<boolean>>;
  changeHunter: (nextId: number) => void;
  hunterId: number;
  setIsTrumpCardAlertOn: React.Dispatch<React.SetStateAction<boolean>>;
  setIsTrumpCardUsed: React.Dispatch<React.SetStateAction<boolean>>;
  patrollerTimer: Timer;
  teleportTimer: Timer;
  blinkTimer: Timer;
  primaryTimer: Timer;
};
export const StartButton = ({
  language,
  ultraLongTimer,
  elapsedTime,
  setElapsedTime,
  isStartTimerActive,
  setIsStartTimerActive,
  setHasConfinedSpace,
  setHasWantedOrder,
  setHasInsolence,
  setHasDetention,
  setHasTrumpCard,
  changeHunter,
  hunterId,
  setIsTrumpCardAlertOn,
  setIsTrumpCardUsed,
  patrollerTimer,
  teleportTimer,
  blinkTimer,
  primaryTimer,
}: Props) => {
  const messages = startButtonMessages[language];

  const startTimerId = useRef<number>(0);

  const handleElapsedTimeChange = useEffectEvent((time: number) => {
    if (
      time !== 0 &&
      time !== accelerateDecodingTime &&
      time !== accelerateDecodingTime + detentionTime + 10 &&
      time !== -readyTime
    )
      return;
    else if (time === 0) {
      if (hunterId === bloodyQueenId) {
        // 画面が回転してる間にハンターを特定している可能性があるため
        primaryTimer.startFrom(bloodyQueenDefaultTime);
      }
      patrollerTimer.startFrom(patrollerDefaultTime);
      teleportTimer.startFrom(warpDefaultTime);
      blinkTimer.startFrom(blinkDefaultTime);
      ultraLongTimer.startFrom(ultraLongDefaultTime);
    } else if (time === accelerateDecodingTime + detentionTime + 10) {
      clearInterval(startTimerId.current);
      setIsStartTimerActive(false);
      setElapsedTime(-readyTime);
    } else {
      clearInterval(startTimerId.current);
      setIsStartTimerActive(false);
    }
  });

  useEffect(() => {
    handleElapsedTimeChange(elapsedTime);
  }, [elapsedTime]);

  useEffect(() => {
    return () => {
      clearInterval(startTimerId.current);
    };
  }, []);

  const isFirstStatus = elapsedTime === -readyTime && !isStartTimerActive;
  const isSecondStatus =
    -readyTime <= elapsedTime &&
    elapsedTime < accelerateDecodingTime &&
    isStartTimerActive;
  const isThirdStatus =
    elapsedTime === accelerateDecodingTime && !isStartTimerActive;
  const isFourthStatus =
    accelerateDecodingTime <= elapsedTime &&
    elapsedTime < accelerateDecodingTime + detentionTime + 10 &&
    isStartTimerActive;

  const renderContent = () => {
    if (isFirstStatus) {
      return (
        <>
          <div className={`${styles.flexContainer} ${styles.start}`}>
            <p>START</p>
          </div>
          <div className={`${styles.flexContainer} ${styles.description}`}>
            <p>{messages.startDescription}</p>
          </div>
        </>
      );
    } else if (isSecondStatus) {
      if (elapsedTime < 0) {
        return (
          <>
            <div className={`${styles.flexContainer} ${styles.ready}`}>
              <p className={styles.text}>{messages.ready}</p>
              <p className={styles.time}>{-elapsedTime}</p>
            </div>
            <div className={`${styles.flexContainer} ${styles.description}`}>
              <p>{messages.startImmediately}</p>
            </div>
          </>
        );
      } else if (elapsedTime < constrainTime) {
        return (
          <>
            <div className={`${styles.flexContainer} ${styles.firstLine}`}>
              <p className={styles.text}>{messages.constrainActive}</p>
              <p className={styles.time}>{constrainTime - elapsedTime}</p>
            </div>
            <div className={`${styles.flexContainer} ${styles.secondLine}`}>
              <p className={styles.text}>{messages.toQuenchingAndFlywheel}</p>
              <p className={styles.time}>
                {quenchingEffectStartTime - elapsedTime}
              </p>
            </div>
          </>
        );
      } else if (elapsedTime < quenchingEffectStartTime) {
        return (
          <>
            <div className={`${styles.flexContainer} ${styles.firstLine}`}>
              <p className={styles.text}>{messages.constrainDeactivated}</p>
            </div>
            <div className={`${styles.flexContainer} ${styles.secondLine}`}>
              <p className={styles.text}>{messages.toQuenchingAndFlywheel}</p>
              <p className={styles.time}>
                {quenchingEffectStartTime - elapsedTime}
              </p>
            </div>
          </>
        );
      } else if (
        elapsedTime <
        quenchingEffectStartTime + quenchingEffectDuration
      ) {
        return (
          <div className={styles.flexContainer}>
            <p className={styles.text}>{messages.quenchingActive}</p>
            <p className={styles.time}>
              {quenchingEffectStartTime + quenchingEffectDuration - elapsedTime}
            </p>
          </div>
        );
      } else if (
        elapsedTime <
        quenchingEffectStartTime + quenchingEffectDuration + 10
      ) {
        return (
          <>
            <div className={`${styles.flexContainer} ${styles.firstLine}`}>
              <p className={styles.text}>{messages.quenchingDeactivated}</p>
            </div>
            <div className={`${styles.flexContainer} ${styles.secondLine}`}>
              <p className={styles.text}>{messages.toAccelerateDecoding}</p>
              <p className={styles.time}>
                {accelerateDecodingTime - elapsedTime}
              </p>
            </div>
          </>
        );
      } else {
        return (
          <div className={styles.flexContainer}>
            <p className={styles.text}>{messages.toAccelerateDecoding}</p>
            <p className={styles.time}>
              {accelerateDecodingTime - elapsedTime}
            </p>
          </div>
        );
      }
    } else if (isThirdStatus) {
      return (
        <div
          className={`${styles.flexContainer} ${styles.gateOpen} ${language === "en" ? styles.englishGateOpen : ""}`}
        >
          <p>{messages.gateOpen}</p>
        </div>
      );
    } else if (isFourthStatus) {
      if (elapsedTime < accelerateDecodingTime + claustrophobiaTime) {
        return (
          <>
            <div className={`${styles.flexContainer} ${styles.firstLine}`}>
              <p className={styles.text}>{messages.claustrophobiaActive}</p>
              <p className={styles.time}>
                {accelerateDecodingTime + claustrophobiaTime - elapsedTime}
              </p>
            </div>
            <div className={`${styles.flexContainer} ${styles.secondLine}`}>
              <p className={styles.text}>{messages.detentionActive}</p>
              <p className={styles.time}>
                {accelerateDecodingTime + detentionTime - elapsedTime}
              </p>
            </div>
          </>
        );
      } else if (
        elapsedTime <
        accelerateDecodingTime + claustrophobiaTime + 10
      ) {
        return (
          <>
            <div className={`${styles.flexContainer} ${styles.firstLine}`}>
              <p className={styles.text}>
                {messages.claustrophobiaDeactivated}
              </p>
            </div>
            <div className={`${styles.flexContainer} ${styles.secondLine}`}>
              <p className={styles.text}>{messages.detentionActive}</p>
              <p className={styles.time}>
                {accelerateDecodingTime + detentionTime - elapsedTime}
              </p>
            </div>
          </>
        );
      } else if (elapsedTime < accelerateDecodingTime + detentionTime) {
        return (
          <div className={styles.flexContainer}>
            <p className={styles.text}>{messages.detentionActive}</p>
            <p className={styles.time}>
              {accelerateDecodingTime + detentionTime - elapsedTime}
            </p>
          </div>
        );
      } else {
        return (
          <div className={styles.flexContainer}>
            <p className={styles.text}>{messages.detentionDeactivated}</p>
          </div>
        );
      }
    }
  };

  return (
    <button
      type="button"
      className={`${isStartTimerActive ? colors.yellow : colors.green}  ${
        styles.startButton
      }`}
      onClick={() => {
        if (isFirstStatus) {
          changeHunter(bloodyQueenId);
          patrollerTimer.reset(patrollerCoolTime);
          teleportTimer.reset(teleportCoolTime);
          blinkTimer.reset(blinkCoolTime);
          ultraLongTimer.reset(ultraLongCoolTime);

          setHasConfinedSpace(false);
          setHasWantedOrder(false);
          setHasInsolence(false);
          setHasTrumpCard(false);
          setHasDetention(false);

          setIsTrumpCardUsed(false);
          setIsTrumpCardAlertOn(false);

          const id = setInterval(() => {
            setElapsedTime((t) => t + 1);
          }, 1000);
          startTimerId.current = Number(id);
          setIsStartTimerActive(true);
        } else if (isSecondStatus) {
          if (elapsedTime < 0) {
            clearInterval(startTimerId.current);
            setElapsedTime(0);
            const id = setInterval(() => {
              setElapsedTime((t) => t + 1);
            }, 1000);
            startTimerId.current = Number(id);
          } else {
            setElapsedTime(accelerateDecodingTime); // elapsedTimeがaccelerateDecodingTimeになったときの処理はuseEffectに任せる
          }
        } else if (isThirdStatus) {
          const id = setInterval(() => {
            setElapsedTime((t) => t + 1);
          }, 1000);
          startTimerId.current = Number(id);
          setIsStartTimerActive(true);
        } else if (isFourthStatus) {
          setElapsedTime(-readyTime); // 上に同じ
        }
      }}
    >
      {renderContent()}
    </button>
  );
};
