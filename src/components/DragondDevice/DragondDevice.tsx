import React from "react";

import "./style.css";

export interface DragondDeviceProps extends React.PropsWithChildren {}

export const DragondDevice = ({ children }: DragondDeviceProps) => {
  return <div className="dragond-device">{children}</div>;
};
export default DragondDevice;
