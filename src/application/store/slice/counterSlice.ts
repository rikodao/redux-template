import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "application/store/store";
import { fetchCountFuncImpl } from "resolver";
import counter, { CounterState } from "application/model/counter/counterModel";

export interface IfetchCountFunc {
  (amount: number): Promise<number>;
}

export const incrementAsync = createAsyncThunk(
  "counter/fetchCount",
  fetchCountFuncImpl
);

const counterSlice = createSlice({
  name: "counter",
  initialState: counter.initialState,
  reducers: {
    increment: (state: CounterState) => {
      counter.increment(state);
    },
    decrement: (state: CounterState) => {
      counter.decrement(state);
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state: CounterState, action: PayloadAction<number>) => {
      counter.incrementByAmount(state, action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.pending, (state: CounterState) => {
        counter.status(state, "loading");
      })
      .addCase(
        incrementAsync.fulfilled,
        (state: CounterState, action: PayloadAction<number>) => {
          counter.status(state, "idle");
          counter.incrementByAmount(state, action.payload);
        }
      )
      .addCase(incrementAsync.rejected, (state: CounterState) => {
        alert("えらーが発生しました");
        counter.status(state, "failed");
      });
  },
});

export const incrementIfOdd =
  (amount: number): AppThunk =>
  (dispatch, getState) => {
    const currentValue = selectCount(getState());
    if (currentValue % 2 === 1) {
      dispatch(incrementByAmount(amount));
    }
  };
export const selectCount = (state: RootState) => counter.value(state.counter);
export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;
