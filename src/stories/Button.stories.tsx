import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button from "../components/Button";
import icons from "../assets/icons";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Button",
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = (args: any) => {
  return (
    <Template {...args}>
      <icons.iconGoogle />
    </Template>
  );
};

export const Icon = Template.bind({});
Icon.args = {
  children: <icons.iconGoogle />,
};

export const Loading = Template.bind({});
Loading.args = {
  isLoading: true,
  title: "Button",
};
