import styles from "./AppButton.module.css";
import { useEffect, useState } from "react";

type Props = {
  buttonStyle: ButtonStyle;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;
export type ButtonStyle =
  | "primary"
  | "async"
  | "gray"
  | "right-gray"
  | "outline"
  | "white"
  | "caution";

const AppButton: React.FC<Props> = (props) => {
  const [buttonStyle, setButtonStyleClass] = useState(props.buttonStyle);
  useEffect(() => setButtonStyleClass(props.buttonStyle), [props.buttonStyle]);
  return (
    <button {...props} className={styles[buttonStyle]}>
      {props.children}
    </button>
  );
};
export default AppButton;
