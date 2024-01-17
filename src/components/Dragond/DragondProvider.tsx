import { DDData, DDPosition } from "@/type";
import React, { useContext, useReducer } from "react";
import { createContext, useState, Dispatch } from "react";

const DataStateContext = createContext<DDData | null>(null);

type Action =
  | { type: "POS"; payload: DDPosition }
  | { type: "OPEN"; payload: boolean };

type DataDispatch = Dispatch<Action>;
const DataDispatchContext = createContext<DataDispatch | undefined>(undefined);

function dataReducer(state: DDData, action: Action): DDData {
  switch (action.type) {
    case "POS":
      return { ...state, ...action.payload, isOpen: true };
    case "OPEN":
      return { ...state, isOpen: action.payload };
    default:
      throw new Error("Unhandled action");
  }
}

export function DragondContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [data, dispatch] = useReducer(dataReducer, {
    isOpen: false,
    posX: 0,
    posY: 0,
    content: "",
  });

  return (
    <DataStateContext.Provider value={data}>
      <DataDispatchContext.Provider value={dispatch}>
        {children}
      </DataDispatchContext.Provider>
    </DataStateContext.Provider>
  );
}

export const useDataState = () => {
  const data = useContext(DataStateContext);
  if (!data) throw new Error("DataStateContext not found");
  return data;
};

export const useDataDispatch = () => {
  const dispatch = useContext(DataDispatchContext);
  if (!dispatch) throw new Error("DataDispatchContext not found");
  return dispatch;
};
