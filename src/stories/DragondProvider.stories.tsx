import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { useDragondDispatch, DragondProvider } from "../";

const meta = {
  title: "Dragond/DragondProvider",
  component: DragondProvider,
  parameters: {
    layout: "centered",
    componentSubtitle:
      "DragondProvider 는 Dragond 의 기능들을 이용하기 위해 가장 상위에 위치해 있어야할 Provider 입니다.",
    docs: {
      description: {
        component: `Dragond의 모든 기능들이 가장 가까운 DragondProvider에 의존하여 데이터가 결정됩니다.`,
      },
    },
  },
  args: {
    children: "",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof DragondProvider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const None: Story = {
  args: {},
};
