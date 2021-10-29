import React, {createContext, useReducer} from "react";
import { initialState, SegmentReducer } from "../reducers/SegmentReducer";

export const SegmentContext = createContext();

const ContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(SegmentReducer, initialState);

    return (
        <SegmentContext.Provider value={{state, dispatch}}>
            {children}
        </SegmentContext.Provider>
    );
};

export {ContextProvider};