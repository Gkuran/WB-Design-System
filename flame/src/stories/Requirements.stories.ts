import { Requirements } from "../components/Requirements";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Requirements> = {
  title: "Components/Requirements",
  component: Requirements,
};

export default meta;

type Story = StoryObj<typeof Requirements>;

export const Default: Story = {
  args: {},
};
