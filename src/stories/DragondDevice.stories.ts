import DragondDevice, {
  DragondDeviceProps,
} from "../components/DragondDevice/DragondDevice";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Dragond/DragondDevice",
  component: DragondDevice,
  parameters: {
    layout: "centered",
  },
  args: {},
  tags: ["autodocs"],
} satisfies Meta<DragondDeviceProps>;

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
