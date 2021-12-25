import { Story, Meta } from '@storybook/react/types-6-0';

import { HouseIcon, IconType } from '.';

export default {
  title: '@Icon/House',
  component: HouseIcon,
  args: {
    color: 'primary'
  }
} as Meta;

export const HouseIconDefault: Story<IconType> = (args) => (
  <HouseIcon {...args} />
);
