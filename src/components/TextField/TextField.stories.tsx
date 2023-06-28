import type { Meta, StoryObj } from "@storybook/react";

import TextField from "./TextField";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "ReactComponentLibrary/TextField",
  component: TextField,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    label: "Label",
    placeholder: "Placeholder",
    required: false,
    fullWidth: false,
  },
};
