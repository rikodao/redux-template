type statusType = "idle" | "loading" | "failed";
export interface CounterState {
  value: number;
  status: statusType;
}

// state
const initialState: CounterState = {
  value: 0,
  status: "idle",
};

// getter
const value = (state: CounterState) => state.value;

// setter
const increment = (state: CounterState) => {
  state.value += 1;
};
const decrement = (state: CounterState) => {
  state.value -= 1;
};
const incrementByAmount = (state: CounterState, amount: number) => {
  state.value += amount;
};
const status = (state: CounterState, status: statusType) => {
  state.status = status;
};

const counter = {
  initialState,
  value,
  status,
  increment,
  decrement,
  incrementByAmount,
};

export default counter;
