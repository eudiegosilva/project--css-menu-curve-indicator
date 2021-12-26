import { Meta } from '@storybook/react/types-6-0';

import Navigation from '.';

export default {
  title: 'Organism/Navigation',
  component: Navigation,
  parameters: {
    jest: ['Navigation.test.tsx']
  }
} as Meta;

export const NavigationDefault = () => <Navigation />;
