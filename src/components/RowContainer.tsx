import styles from "components/RowContainer.module.scss";

type Props = {
  children: React.ReactNode;
  isEdgeRow: boolean;
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
