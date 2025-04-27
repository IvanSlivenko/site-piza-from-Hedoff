// import type { Meta, StoryObj } from '@storybook/react';
// import { fn } from '@storybook/test';
// import { MenuItem } from './menu-item.component';

// const meta = {
//   title: 'Menu/Menu Item',
//   component: MenuItem,
//   // parameters: {
//   //   layout: 'centered',
//   // },
//   // tags: ['autodocs'],
//   // argTypes: {
//   //   backgroundColor: { control: 'color' },
//   // },
//   // args: { onClick: fn() },
// } satisfies Meta<typeof MenuItem>;

// export default meta;
// type Story = StoryObj<typeof meta>;

// export const View: Story = {
//   args: {
//     primary: true,
//     label: 'Button',
//   },
// };

////////////////////////////////////////////////////////////////////////
import { Meta, StoryFn } from "@storybook/react";
import { MenuList } from "./menu-list.component";

export default {
  title: "Menu/Menu List",
  component: MenuList,
} as Meta<typeof MenuList>;

const Template: StoryFn<typeof MenuList> = () => (
<MenuList />
);

export const View = Template.bind({});

// View.args = {

// };
