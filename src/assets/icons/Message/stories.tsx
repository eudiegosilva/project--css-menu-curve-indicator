import { Story, Meta } from '@storybook/react/types-6-0';

import { MessageIcon, IconType } from '.';

export default {
  title: '@Icon/Message',
  component: MessageIcon,
  args: {
    color: 'primary'
  }
} as Meta;

export const MessageIconDefault: Story<IconType> = (args) => (
  <MessageIcon {...args} />
);
