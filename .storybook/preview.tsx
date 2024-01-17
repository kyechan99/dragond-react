import React from "react";
import type { Preview } from "@storybook/react";
import { DragondContextProvider } from "../src/components/Dragond/DragondProvider";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <DragondContextProvider>
        <Story />
      </DragondContextProvider>
    ),
  ],
};

export default preview;
