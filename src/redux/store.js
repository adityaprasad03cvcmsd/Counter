import { applyMiddleware, createStore } from "redux";
import { reducer } from "./reducer";
import {putCount} from "./reducer"

export const store = createStore(reducer,applyMiddleware(putCount)
);
