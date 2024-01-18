import React from "react";

import { useDragondState } from "../DragondProvider";
import "./style.css";

export interface DragondDeviceProps extends React.PropsWithChildren {}

const DragondDevice = ({ children }: DragondDeviceProps) => {
  const data = useDragondState();

  return (
    <>
      {data.isOpen && (
        <div
          className="dragond-device"
          style={{ top: data.posY, left: data.posX }}
        >
          {children}
        </div>
      )}
    </>
  );
};
export default DragondDevice;
