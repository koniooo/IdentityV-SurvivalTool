import { hunterData } from "lib/hunterData";
import styles from "components/HunterSelect.module.scss";

type Props = {
  hunterId: number;
  setHunterId: React.Dispatch<React.SetStateAction<number>>;
};

export const HunterSelect = ({ hunterId, setHunterId }: Props) => {
  return (
    <select
      className={styles.hunterSelect}
      name="hunter"
      id="hunter-select"
      value={hunterId}
      onChange={(event) => {
        const targetValue = Number(event.target.value);
        setHunterId(targetValue);
      }}
    >
      {hunterData.map((hunterDatum, index) => {
        return (
          <option value={index} key={index}>
            {hunterDatum.nameEn}
          </option>
        );
      })}
    </select>
  );
};
