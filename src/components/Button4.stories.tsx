import { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { useState } from 'react';

const meta = {
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  argTypes: {
    name: {
      control: 'text',
    },
    color: {
      control: 'color',
    },
    disabled: {
      control: 'boolean',
    },
  },
};

const ButtonWithHooks = () => {
  const [showText, setShowText] = useState(false);
  return (
    <>
      <Button name="Toggle Text" onClick={() => setShowText((prev) => !prev)} />
      {showText && <p>Hello</p>}
    </>
  );
};

export const WithUseState: Story = {
  ...Default,
  render: () => <ButtonWithHooks />,
};
