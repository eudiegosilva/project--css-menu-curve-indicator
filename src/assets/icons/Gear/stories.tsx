import { Story, Meta } from '@storybook/react/types-6-0';

import { GearIcon, IconType } from '.';

export default {
  title: '@Icon/Gear',
  component: GearIcon,
  args: {
    color: 'primary'
  }
} as Meta;

export const GearIconDefault: Story<IconType> = (args) => (
  <GearIcon {...args} />
);
