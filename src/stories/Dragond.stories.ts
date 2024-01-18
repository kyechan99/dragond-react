import type { Meta, StoryObj } from "@storybook/react";

import { Dragond } from "../";

const meta = {
  title: "Dragond/Dragond",
  component: Dragond,
  parameters: {
    layout: "centered",
    componentSubtitle: "Dragond는 드래그를 인식할 영역입니다.",
    docs: {
      description: {
        component: `상위 요소에 DragondProvider로 인해 종속되어야 합니다.
        <br/>
        혼자서는 아무런 역할을 하지 않습니다.
        <br/>
        DragondDevice와 같이 사용되어야 합니다.`,
      },
    },
  },
  tags: ["autodocs"],
  args: {
    children: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum has been the industry's standard dummy text ever since the
    1500s, when an unknown printer took a galley of type and scrambled it to
    make a type specimen book. It has survived not only five centuries, but
    also the leap into electronic typesetting, remaining essentially
    unchanged. It was popularised in the 1960s with the release of Letraset
    sheets containing Lorem Ipsum passages, and more recently with desktop
    publishing software like Aldus PageMaker including versions of Lorem
    Ipsum.`,
  },
} satisfies Meta<typeof Dragond>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
