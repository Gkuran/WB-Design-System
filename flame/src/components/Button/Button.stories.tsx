import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { View } from "react-native";
import { Button } from "./Button";

const meta = {
  title: "components/Buttons/Button",
  component: Button,
  argTypes: {
    withIcon: { control: "boolean" },
    isDisabled: { control: "boolean" },
  },
  decorators: [
    (Story) => (
      <View style={{ flex: 1, alignItems: "flex-start" }}>
        <Story />
      </View>
    ),
  ],
  tags: ["autodocs"],
  // Use `fn` to spy on the onPress arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onPress: fn() },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    primary: true,
    label: "Principal",
  },
};
