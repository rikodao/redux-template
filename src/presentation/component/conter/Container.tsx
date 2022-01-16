import { useState } from "react";

import { useAppSelector, useAppDispatch } from "store/store";
import {
  increment,
  decrement,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  selectCount,
} from "store/slice/counterSlice";

import Presenter from "./Presenter";
export type ContainerProps = {};

const Counter: React.FC<ContainerProps> = (props) => {
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();

  const [incrementAmount, setIncrementAmount] = useState("2");

  const incrementValue = Number(incrementAmount) || 0;

  return (
    <Presenter
      {...props}
      count={count}
      incrementValue={incrementValue}
      incrementAmount={incrementAmount}
      setIncrementAmount={setIncrementAmount}
      increment={dispatch.bind(this, increment())}
      decrement={dispatch.bind(this, decrement())}
      incrementByAmount={dispatch.bind(this, incrementByAmount(incrementValue))}
      incrementAsync={dispatch.bind(this, incrementAsync(incrementValue))}
      incrementIfOdd={dispatch.bind(this, incrementIfOdd(incrementValue))}
    />
  );
};
export default Counter;
