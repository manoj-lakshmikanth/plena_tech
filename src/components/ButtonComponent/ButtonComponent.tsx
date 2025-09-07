import styles from "./ButtonComponent.module.css";
import type { ButtonComponentProps } from "../../types/button.interface";

const ButtonComponent = ({ onClick, children, isRound, Icon, variant }: ButtonComponentProps) => {
  return (
    <button onClick={onClick} className={`${styles.button_component_container} ${variant === "light"? styles.button_component_light : styles.button_component_dark} ${isRound && styles.button_component_round}`}>
      {Icon && <Icon />}
      {children}
    </button>
  );
};

export default ButtonComponent;
