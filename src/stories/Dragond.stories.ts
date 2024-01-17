 
import Dragond from "../components/Dragond/Dragond";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Dragond/Dragond",
  component: Dragond,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Dragond>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
