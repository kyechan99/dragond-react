import React, { useContext, useReducer, createContext, Dispatch } from "react";

import { DragondData, DragondPosition } from "@/type";

const DataStateContext = createContext<DragondData | null>(null);

type Action =
  | { type: "POS"; payload: DragondPosition }
  | { type: "OPEN"; payload: boolean };

type DataDispatch = Dispatch<Action>;
const DataDispatchContext = createContext<DataDispatch | undefined>(undefined);

function dataReducer(state: DragondData, action: Action): DragondData {
  switch (action.type) {
    case "POS":
      return { ...state, ...action.payload, isOpen: true };
    case "OPEN":
      return { ...state, isOpen: action.payload };
    default:
      throw new Error("Unhandled action");
  }
}

export function DragondProvider({ children }: { children: React.ReactNode }) {
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

export const useDragondState = () => {
  const data = useContext(DataStateContext);
  if (!data) throw new Error("DataStateContext not found");
  return data;
};

export const useDragondDispatch = () => {
  const dispatch = useContext(DataDispatchContext);
  if (!dispatch) throw new Error("DataDispatchContext not found");
  return dispatch;
};
