// import { fetchCount } from "repository/counter/mockCounterAPI";
import { apiCounter, mockCounter } from "repository/counter";

import { IfetchCountFunc } from "store/slice/counterSlice";
export const fetchCountFuncImpl: IfetchCountFunc = apiCounter;
