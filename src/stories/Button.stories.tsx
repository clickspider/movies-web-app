import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button from "../components/Button";
import iconGoogle from "../assets/icon-google.svg";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Button",
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const PrimaryWithIcon = (args: any) => {
  return (
    <Template {...args}>
      <img src={iconGoogle} width="30" height="30" alt="google-icon" />
      <span style={{ marginLeft: 10 }}>Login with google</span>
    </Template>
  );
};

export const Loading = Template.bind({});
Loading.args = {
  isLoading: true,
  title: "Loading...",
  backgroundColor: "hsl(0deg, 97%, 63%)",
};

export const Primary = Template.bind({});
Primary.args = {
  title: "Click here",
};
