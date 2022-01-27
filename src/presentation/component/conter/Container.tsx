import { useState } from "react";

import { useAppSelector, useAppDispatch } from "application/store/store";
import {
  increment,
  decrement,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  selectCount,
} from "application/store/slice/counterSlice";

import Presenter, { Props } from "./Presenter";
export type ContainerProps = {};

const Counter: React.FC<ContainerProps> = (props) => {
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();

  const [incrementAmount, setIncrementAmount] = useState("2");

  const incrementValue = Number(incrementAmount) || 0;

  const _props: Props = {
    ...props,
    count: count,
    incrementValue: incrementValue,
    incrementAmount: incrementAmount,
    setIncrementAmount: setIncrementAmount,
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
    incrementByAmount: () => dispatch(incrementByAmount(incrementValue)),
    incrementAsync: () => dispatch(incrementAsync(incrementValue)),
    incrementIfOdd: () => dispatch(incrementIfOdd(incrementValue)),
  };

  return <Presenter {..._props} />;
};
export default Counter;
