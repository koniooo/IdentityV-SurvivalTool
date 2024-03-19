import {
  trumpCardTime,
  patrollerCoolTime,
  teleportCoolTime,
  blinkCoolTime,
} from "components/Main";
import colors from "components/Color.module.scss";
import styles from "components/TrumpCardButton.module.scss";

let id: NodeJS.Timeout;

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
  setHasTrumpCard: React.Dispatch<React.SetStateAction<boolean>>;
  elapsedTime: number;
  isTrumpCardUsed: boolean;
  setIsTrumpCardUsed: React.Dispatch<React.SetStateAction<boolean>>;
  isTrumpCardAlertOn: boolean;
  setIsTrumpCardAlertOn: React.Dispatch<React.SetStateAction<boolean>>;
};

export const TrumpCardButton = ({
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
  setHasTrumpCard,
  elapsedTime,
  isTrumpCardUsed,
  setIsTrumpCardUsed,
  isTrumpCardAlertOn,
  setIsTrumpCardAlertOn,
}: Props) => {
  const trumpCardFunc = (
    sourceTraitTime: number,
    sourceTraitCoolTime: number,
    targetTraitCoolTime: number,
    setTargetTraitTime: React.Dispatch<React.SetStateAction<number>>,
    setIsTargetTraitTimerActive: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    const targetTraitTime = Math.floor(
      targetTraitCoolTime * (sourceTraitTime / sourceTraitCoolTime)
    );
    setTargetTraitTime(targetTraitTime);
    setIsTargetTraitTimerActive(true);
  };

  return (
    <button
      type="button"
      className={`${styles.trumpCardButton}  
      ${isTrumpCardUsed && styles.used}
      ${isTrumpCardTimerActive ? colors.yellow : colors.green}`}
      onClick={() => {
        if (isTrumpCardUsed) {
          return;
        }

        const activeTraitList = [
          isPatrollerTimerActive,
          isTeleportTimerActive,
          isBlinkTimerActive,
        ].filter((isActive) => {
          return isActive;
        });
        const numberOfActiveTrait = activeTraitList.length;

        if (numberOfActiveTrait === 1) {
          setHasTrumpCard(true);
          setIsTrumpCardUsed(true);
          setIsTrumpCardAlertOn(false);
          if (isPatrollerTimerActive) {
            trumpCardFunc(
              patrollerTime,
              patrollerCoolTime,
              teleportCoolTime,
              setTeleportTime,
              setIsTeleportTimerActive
            );

            trumpCardFunc(
              patrollerTime,
              patrollerCoolTime,
              blinkCoolTime,
              setBlinkTime,
              setIsBlinkTimerActive
            );
          } else if (isTeleportTimerActive) {
            trumpCardFunc(
              teleportTime,
              teleportCoolTime,
              patrollerCoolTime,
              setPatrollerTime,
              setIsPatrollerTimerActive
            );

            trumpCardFunc(
              teleportTime,
              teleportCoolTime,
              blinkCoolTime,
              setBlinkTime,
              setIsBlinkTimerActive
            );
          } else {
            // 鬼没から変更する場合
            // この場合のみ元の鬼没のタイマーをストップさせる
            setIsBlinkTimerActive(false);

            trumpCardFunc(
              blinkTime,
              blinkCoolTime,
              patrollerCoolTime,
              setPatrollerTime,
              setIsPatrollerTimerActive
            );

            trumpCardFunc(
              blinkTime,
              blinkCoolTime,
              teleportCoolTime,
              setTeleportTime,
              setIsTeleportTimerActive
            );
          }
        } else {
          clearTimeout(id);
          setIsTrumpCardAlertOn(true);
          id = setTimeout(() => {
            setIsTrumpCardAlertOn(false);
          }, 1000 * 3);
        }
      }}
    >
      {isTrumpCardAlertOn && (
        <p className={`${styles.text} ${styles.alertText}`}>
          ※カウント中の特質が
          <br />
          一つだけの時にタップ
        </p>
      )}

      {!isTrumpCardAlertOn && isTrumpCardTimerActive && (
        <p className={`${styles.text} ${styles.timeText}`}>
          {trumpCardTime - elapsedTime}
        </p>
      )}
      {!isTrumpCardUsed && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 82.84445 68.33504"
          fill="#292b2f"
          className={styles.trumpCardIcon}
        >
          <path d="M34.11587.06063c3.89676.08284,4.54862.42648,5.514,4.177,1.578,6.13032,9.0601,40.44132,9.62647,42.86169.98856,4.22467.32631,6.12392-3.302,8.63813-4.497,3.1161-15.58022,10.69628-16.57732,11.44-2.5999,1.93922-4.51442,1.45083-5.94071-1.53142C22.40313,63.48573,11.13706,11.26055,10.08271,6.0224,9.38733,2.56764,11.08346.5212,14.67745.42822,18.04187.34116,31.004-.00552,34.11587.06063Z" />
          <path d="M67.90147,4.90388c-.00635.297-5.34145,25.646-5.4294,25.98476-1.07578,4.14425-2.67724,4.66054-5.86647,1.79489-2.127-1.91117-4.63056-3.35536-6.585-5.48034C48.869,25.951,48.058,24.7136,48.55133,22.87615c1.60476-5.9768,4.553-19.52289,4.68354-20.25323C53.62614.43305,55.06764-.129,57.05339.02338c2.35418.18071,4.714.28828,7.06784.47293C67.22191.73955,67.97508,1.46233,67.90147,4.90388Z" />
          <path d="M53.99623,50.87992c-1.7282-.0576-2.18382-1.0311-1.429-2.51768,1.80542-3.55568,3.54037-7.15544,5.53411-10.60417,1.28224-2.218,2.21864-2.306,3.88985-.313,1.16017,1.38355,2.1138,1.07505,3.16559.31922,4.9672-3.56944,9.75533-7.24156,12.70941-12.9069A17.16727,17.16727,0,0,0,79.53162,14.3648c-.41166-3.26-1.28256-4.00378-4.70306-4.80133a4.0989,4.0989,0,0,1-1.07085-.32427c-.95384-.53324-3.0954-.18672-2.86948-.959.46639-1.59432,2.34585-.82034,3.55036-.6344,4.239.65439,6.8834,3.10039,7.9,7.37133a21.14809,21.14809,0,0,1-.79607,11.77324,38.53849,38.53849,0,0,1-11.23271,16.9168c-1.65843,1.47537-4.07909,2.72181-2.09908,5.73793.54617.832-.49256,1.57072-1.49268,1.59106C64.59844,51.07932,56.11418,50.95052,53.99623,50.87992Z" />
          <path d="M0,50.51831a12.44238,12.44238,0,0,1,.62681-4.79043c.43677-1.0585,1.66-1.57039.14855-3.28039-1.52039-1.72009.43317-2.719,1.96193-3.13645,3.23321-.88284,6.52892-1.55111,9.72871-2.53591,1.60314-.49341,1.75947.11518,1.60955,1.35666-.269,2.22725-.53056,4.45619-.85456,6.67575-.2602,1.78248-1.3882,5.15224-3.09641,3.272-.83776-.92209-1.43876.78893-1.52855,1.74109a7.39482,7.39482,0,0,0,2.144,6.49965,11.91424,11.91424,0,0,0,7.9795,3.593c.47976.0133,1.0898.09719,1.121.70033.03367.65192-.6103.6944-1.07513.749A22.86125,22.86125,0,0,1,3.10329,57.68408C.53285,55.98873.04211,54.42142,0,50.51831Z" />
        </svg>
      )}
      {isTrumpCardUsed && (
        <a
          href="https://twitter.com/konio_tracy"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 250 203.09887"
            fill="#292b2f"
            className={styles.twitterIcon}
          >
            <path
              d="M78.6,203.1c94.3,0,145.9-78.2,145.9-145.9,0-2.2,0-4.4-.1-6.6A107.41429,107.41429,0,0,0,250,24.1a104.26084,104.26084,0,0,1-29.5,8.1A51.248,51.248,0,0,0,243,3.8a100.89757,100.89757,0,0,1-32.6,12.4A51.33635,51.33635,0,0,0,123,63,145.84067,145.84067,0,0,1,17.4,9.4,51.20116,51.20116,0,0,0,33.3,77.8,50.268,50.268,0,0,1,10,71.4V72a51.36843,51.36843,0,0,0,41.2,50.3,50.571,50.571,0,0,1-23.2.9,51.307,51.307,0,0,0,47.9,35.6,102.985,102.985,0,0,1-63.7,22c-4.1,0-8.2-.3-12.2-.7a145.094,145.094,0,0,0,78.6,23"
              transform="translate(0 -0.00114)"
            />
          </svg>
        </a>
      )}
    </button>
  );
};
