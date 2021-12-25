import { screen } from '@testing-library/react';
import { renderWithTheme } from 'core/helpers/tests/renderWithTheme';

import Navigation from '.';

describe('<Navigation />', () => {
  it('should render the Navigation component', () => {
    renderWithTheme(<Navigation />);

    expect(screen.getByLabelText('Navigation component')).toBeInTheDocument();
  });
});
