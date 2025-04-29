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
import { MenuItem } from "../menu-item/menu-item.component";

export default {
  title: "Menu/Menu Item",
  component: MenuItem,
} as Meta<typeof MenuItem>;

const Template: StoryFn<typeof MenuItem> = (args) => <MenuItem {...args} />;

export const View = Template.bind({});

View.args = {
  imagePath: "/assets/pizza/barbecue.jpeg",
  weight: 555,
  title: "Піца Барбекю",
  ingredients: "(подвійна порція грибів), Гриби, Моцарела, Соус, Альфредо",
  price: 215,
};
