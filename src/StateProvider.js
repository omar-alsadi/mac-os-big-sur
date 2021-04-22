import React, { createContext, useContext, useReducer } from "react";
import logger from 'use-reducer-logger';

// this is the data layer
export const StateContext = createContext();

// buiuld a provider
export const StateProvider = ({ reducer, initialState, children }) => {
  return (
    <StateContext.Provider value={useReducer(process.env.NODE_ENV === 'development' ? logger(reducer) : reducer, initialState)}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateValue = () => useContext(StateContext);
