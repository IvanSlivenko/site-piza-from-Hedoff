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
import { Order } from "./order.component";

export default {
  title: "orders/order",
  component: Order,
} as Meta<typeof Order>;

const Template: StoryFn<typeof Order> = (args) => <Order {...args} />;

export const View = Template.bind({});

View.args = {
  imagePath: "/assets/pizza/barbecue.jpeg",
  weight: 555,
  title: "Піца Барбекю",
  ingredients: "(подвійна порція грибів), Гриби, Моцарела, Соус, Альфредо",
  price: 215,

  user: "User1",
  date: "01.01.2025",
  unit: "шт.",
  quantity: 10,
  summ: 1000,
};
