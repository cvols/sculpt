import type { Meta, StoryObj } from "@storybook/react";

import Typography from "./Typography";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "ReactComponentLibrary/Typography",
  component: Typography,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const HeadingH1: Story = {
  args: {
    variant: "h1",
    children: "Hello World",
  },
};

export const HeadingH4: Story = {
  args: {
    variant: "h4",
    children: "Hello World",
  },
};

export const Body: Story = {
  args: {
    variant: "p",
    children: "Hello World",
  },
};

export const Caption: Story = {
  args: {
    variant: "caption",
    children: "Hello World",
  },
};

export const Span: Story = {
  args: {
    variant: "span",
    children: "Hello World",
  },
};
