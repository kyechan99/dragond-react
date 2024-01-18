import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { DragondDevice, useDragondDispatch } from "../";

const meta = {
  title: "Dragond/DragondDevice",
  component: DragondDevice,
  parameters: {
    layout: "centered",
    componentSubtitle: "DragondDevice는 드래그시 보여지게될 컴포넌트입니다.",
    docs: {
      description: {
        component: `상위 요소에 DragondProvider로 인해 종속되어야 합니다.
        <br/>
        혼자서는 아무런 역할을 하지 않습니다.
        <br/>
        Dragond와 같이 사용되어야 합니다.`,
      },
    },
  },
  args: {
    children: "DragondDevice",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => {
      const dispatch = useDragondDispatch();

      React.useEffect(() => {
        dispatch({ type: "OPEN", payload: true });
      }, []);

      return <Story />;
    },
  ],
} satisfies Meta<typeof DragondDevice>;

export default meta;
type Story = StoryObj<typeof meta>;

export const None: Story = {
  args: {},
};
export const Content: Story = {
  args: {
    children: "Input somethng..",
  },
};
