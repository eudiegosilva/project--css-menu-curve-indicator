import { Story, Meta } from '@storybook/react/types-6-0';

import { PeopleIcon, IconType } from '.';

export default {
  title: '@Icon/People',
  component: PeopleIcon,
  args: {
    color: 'primary'
  }
} as Meta;

export const PeopleIconDefault: Story<IconType> = (args) => (
  <PeopleIcon {...args} />
);
