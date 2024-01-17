import React from "react";

import "./style.css";
import { DDPosition } from "@/type";
import { useDataState } from "../Dragond/DragondProvider";

export interface DragondDeviceProps extends React.PropsWithChildren {}

const DragondDevice = ({ children }: DragondDeviceProps) => {
  const data = useDataState();

  return (
    <div className="dragond-device" style={{ top: data.posY, left: data.posX }}>
      {children}
    </div>
  );
};
export default DragondDevice;
