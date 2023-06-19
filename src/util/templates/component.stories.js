module.exports = (componentName) => ({
  content: `import type { Meta, StoryObj } from '@storybook/react';

  import ${componentName} from './${componentName}';

  // More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
  const meta = {
    title: 'ReactComponentLibrary/${componentName}',
    component: ${componentName},
    tags: ['autodocs'],
    argTypes: {},
  } satisfies Meta<typeof ${componentName}>;

  export default meta;
  type Story = StoryObj<typeof meta>;

  // More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
  export const Primary: Story = {
    args: {
      foo: 'bar'
    },
  };
`,
  extension: `.stories.tsx`
});
