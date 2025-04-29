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
import { FooterName } from './footer-name.component';

export default {
  title: 'Common/FooterName',
  component: FooterName,
} as Meta<typeof FooterName>;

const Template: StoryFn<typeof FooterName> = (args) => (
  <ul>
    <FooterName {...args}/>
  </ul>
)

export const View = Template.bind({});

View.args = {
  href: 'tel:+380674708721',
  children: '067 470 87 21',
};