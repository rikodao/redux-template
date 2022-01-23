// import { fetchCount } from "repository/counter/mockCounterAPI";
import { apiCounter, mockCounter } from "application/repository/counter";

import { IfetchCountFunc } from "application/store/slice/counterSlice";
export const fetchCountFuncImpl: IfetchCountFunc = apiCounter;
