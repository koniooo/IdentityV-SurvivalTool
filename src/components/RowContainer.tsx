import styles from "components/RowContainer.module.scss";

type Props = {
  isEdgeRow: boolean;
  children: React.ReactNode;
};

export const RowContainer = ({ isEdgeRow, children }: Props) => {
  return (
    <div
      className={`${styles.row} ${
        isEdgeRow ? styles.edgeRow : styles.middleRow
      }`}
    >
      {children}
    </div>
  );
};
