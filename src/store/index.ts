import { createStore } from "redux";
import env from "../key.json";

import paramReducer from "./params/reducer";

export default createStore(
    paramReducer,
    //@ts-ignore
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    //@ts-ignore
    window.__REDUX_DEVTOOLS_EXTENSION__()
);
