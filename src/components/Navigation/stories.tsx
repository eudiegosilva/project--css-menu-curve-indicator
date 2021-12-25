import { Story, Meta } from '@storybook/react/types-6-0';

import Navigation, { NavigationProps } from '.';

export default {
  title: 'Organism/Navigation',
  component: Navigation,
  parameters: {
    jest: ['Navigation.test.tsx']
  }
} as Meta;

export const NavigationDefault: Story<NavigationProps> = (args) => (
  <Navigation {...args} />
);
