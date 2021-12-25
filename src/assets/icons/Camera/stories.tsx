import { Story, Meta } from '@storybook/react/types-6-0';

import { CameraIcon, IconType } from '.';

export default {
  title: '@Icon/Camera',
  component: CameraIcon,
  args: {
    color: 'primary'
  }
} as Meta;

export const CameraIconDefault: Story<IconType> = (args) => (
  <CameraIcon {...args} />
);
