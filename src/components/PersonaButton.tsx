import colors from "components/Color.module.scss";

type Props = {
  hasPersona: boolean;
  setHasPersona: React.Dispatch<React.SetStateAction<boolean>>;
  isPersonaTimerActive: boolean;
  children: React.ReactNode;
};

export const PersonaButton = ({
  hasPersona,
  setHasPersona,
  isPersonaTimerActive,
  children,
}: Props) => {
  return (
    <button
      type="button"
      className={
        hasPersona
          ? colors.red
          : isPersonaTimerActive
          ? colors.yellow
          : colors.green
      }
      onClick={() => {
        setHasPersona(!hasPersona);
      }}
    >
      {children}
    </button>
  );
};
