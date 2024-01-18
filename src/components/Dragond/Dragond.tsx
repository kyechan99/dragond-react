import React from "react";

import DragondDevice from "../DragondDevice/DragondDevice";
import { useDragondDispatch, useDragondState } from "../DragondProvider";

import "./style.css";

export interface DragondProps extends React.PropsWithChildren {}

const Dragond = ({ children }: DragondProps) => {
  const data = useDragondState();
  const dispatch = useDragondDispatch();

  const onMouseDownHandler = (_e: React.MouseEvent<HTMLDivElement>) => {
    // e.preventDefault();

    window.getSelection()?.removeAllRanges();
  };

  const onMouseUpHandler = (_e: React.MouseEvent<HTMLDivElement>) => {
    // e.preventDefault();

    const sel = window.getSelection();
    if (sel?.toString().length === undefined || sel.toString().length === 0) {
      // setData({ ...data, isOpen: false });
      dispatch({ type: "OPEN", payload: false });
      return;
    }

    const scrollTop =
      window.pageYOffset !== undefined
        ? window.pageYOffset
        : (
            document.documentElement ||
            document.body.parentNode ||
            document.body
          ).scrollTop;

    let selectionRect = sel.getRangeAt(0).getBoundingClientRect();
    const posX =
      selectionRect.x + (selectionRect.right - selectionRect.left) / 2 + 0;
    const posY = selectionRect.bottom + scrollTop + 16;

    dispatch({ type: "POS", payload: { posX, posY } });
  };

  return (
    <div
      className="dragond"
      onMouseDown={onMouseDownHandler}
      onMouseUp={onMouseUpHandler}
    >
      {children}
    </div>
  );
};
export default Dragond;
