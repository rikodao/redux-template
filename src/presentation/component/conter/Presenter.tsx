import styles from "./Counter.module.css";
import { ContainerProps } from "./Container";
import { Dispatch, SetStateAction } from "react";
import AppButton from "presentation/parts/button/AppButton";

export type Props = {
  incrementValue: number;
  count: number;
  incrementAmount: string;
  setIncrementAmount: Dispatch<SetStateAction<string>>;
  increment: () => void;
  decrement: () => void;
  incrementByAmount: () => void;
  incrementAsync: () => void;
  incrementIfOdd: () => void;
} & ContainerProps;

const Presenter: React.FC<Props> = (props) => {
  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => props.decrement()}
        >
          -
        </button>
        <span className={styles.value}>{props.count}</span>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => props.increment()}
        >
          +
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={props.incrementAmount}
          onChange={(e) => props.setIncrementAmount(e.target.value)}
        />
        <AppButton
          buttonStyle="primary"
          onClick={() => props.incrementByAmount()}
        >
          Add Amount
        </AppButton>
        <AppButton buttonStyle="async" onClick={() => props.incrementAsync()}>
          Add Async
        </AppButton>
        <AppButton buttonStyle="primary" onClick={() => props.incrementIfOdd()}>
          Add If Odd
        </AppButton>
      </div>
    </div>
  );
};
export default Presenter;
