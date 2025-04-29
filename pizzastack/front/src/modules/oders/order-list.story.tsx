// import { Meta, StoryFn } from "@storybook/react";
// import { MenuListOrder } from "./order-list.component";

// export default {
//   title: "orders/order list",
//   component: MenuListOrder,
// } as Meta<typeof MenuListOrder>;

// const Template: StoryFn<typeof MenuListOrder> = (args: any) => (
// <MenuListOrder {...args}/>
// );

// export const View = Template.bind({});

// // View.args = {

// // };

/////////////////////////////////////////////////////////////////

import { Meta, StoryFn } from "@storybook/react";
import { MenuListOrder } from "./order-list.component";
import pizzaMenuOrder from "@app/mocs/pizzaOrder.json";

export default {
  title: "orders/Order List",
  component: MenuListOrder,
} as Meta<typeof MenuListOrder>;

// Оскільки MenuListOrder не приймає пропсів — не потрібно {...args}
const Template: StoryFn<typeof MenuListOrder> = (args) => (
  <MenuListOrder {...args} />
);

export const View = Template.bind({});

View.args = {
  itemsOrder: pizzaMenuOrder,
};
