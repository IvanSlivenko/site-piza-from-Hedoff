// import type { Meta, StoryObj } from '@storybook/react';
// import { fn } from '@storybook/test';
// import { Header } from './header.component';

// const meta = {
//   title: 'Common/Header',
//   component: Header,
//   // parameters: {
//   //   layout: 'centered',
//   // },
//   // tags: ['autodocs'],
//   // argTypes: {
//   //   backgroundColor: { control: 'color' },
//   // },
//   // args: { onClick: fn() },
// } satisfies Meta<typeof Header>;

// export default meta;
// type Story = StoryObj<typeof meta>;

// export const View: Story = {
//   args: {
//     primary: true,
//     label: 'Button',
//   },
// };

////////////////////////////////////////////////////////////
import { Meta, StoryFn  } from '@storybook/react';
import { HeaderOder } from './headerOrder.component';

export default {
  title: 'Common/HeaderOrder',
  component: HeaderOder,
} as Meta<typeof HeaderOder>;

const Template: StoryFn<typeof HeaderOder> = (args) => <HeaderOder {...args}/>

export const View = Template.bind({});

View.args = {
  title: 'PizzaStack',
  buttonName: 'Start'
};