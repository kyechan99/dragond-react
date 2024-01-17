import React from "react";
import DragondDevice from "../DragondDevice/DragondDevice";
import { DDData } from "@/type";
import "./style.css";
import {
  DragondContextProvider,
  useDataDispatch,
  useDataState,
} from "./DragondProvider";

const Dragond = () => {
  const data = useDataState();
  const dispatch = useDataDispatch();

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
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book. It has survived not only five centuries, but
      also the leap into electronic typesetting, remaining essentially
      unchanged. It was popularised in the 1960s with the release of Letraset
      sheets containing Lorem Ipsum passages, and more recently with desktop
      publishing software like Aldus PageMaker including versions of Lorem
      Ipsum.
      {data.isOpen && <DragondDevice>Dragond Content</DragondDevice>}
    </div>
  );
};
export default Dragond;
