import { hunterData } from "lib/hunterData";
import styles from "components/HunterSelect.module.scss";

type Props = {
  language: "ja" | "en";
  hunterId: number;
  changeHunter: (nextId: number) => void;
};

export const HunterSelect = ({ language, hunterId, changeHunter }: Props) => {
  return (
    <select
      className={styles.hunterSelect}
      name="hunter"
      id="hunter-select"
      value={hunterId}
      onChange={(event) => {
        const targetValue = Number(event.target.value);
        changeHunter(targetValue);
      }}
    >
      {hunterData.map((hunterDatum, index) => {
        return (
          <option value={index} key={index}>
            {hunterDatum.name[language]}
          </option>
        );
      })}
    </select>
  );
};
