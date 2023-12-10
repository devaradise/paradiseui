import type { Meta, StoryObj } from '@storybook/react';
import TextField from '../TextField';

const meta: Meta<typeof TextField> = {
  title: "Text Field",
  component: TextField,
};
export default meta
type Story = StoryObj<typeof TextField>;

export const Default: Story = {}
Default.storyName = "Text Field"
